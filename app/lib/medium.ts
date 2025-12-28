import Parser from "rss-parser";

type MediumItem = {
  title?: string;
  link?: string;
  isoDate?: string;
  contentSnippet?: string;

  "content:encoded"?: string;
};

type MediumProject = {
  title: string;
  link: string;
  date: string;
  description: string;
  stack: string[];
  tags?: string[];
};

const parser: Parser<unknown, MediumItem> = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

function htmlToText(html: string): string {
  return html
    .replace(/<\/p>\s*<p>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .join("\n")
    .trim();
}

function extractSiteFields(item: MediumItem) {
    // Ex: "I build a dashboard... [tldr]"
  const raw = item["content:encoded"] ?? item.contentSnippet ?? "";
  const text = htmlToText(raw);

  const descMarker = "[tldr]";
  const descIdx = text.toLowerCase().indexOf(descMarker);

  const description =
    descIdx !== -1 ? text.slice(0, descIdx).trim() : text.slice(0, 160).trim();

  const stack = extractStackLine(text);
  const tags = extractTagsLine(text);

  return { description, stack, tags };
}

function extractStackLine(text: string) {
  // Ex: "Stack: Python, SQL, Streamlit [stack]"
  const lower = text.toLowerCase();
  const marker = "[stack]";
  const idx = lower.indexOf(marker);
  if (idx === -1) return [];

  const before = text.slice(0, idx);

  const lines = before.split("\n").map((l) => l.trim());
  const stackLine = [...lines].reverse().find((l) => /^stack:\s*/i.test(l));
  if (!stackLine) return [];

  const match = stackLine.match(/^Stack:\s*(.+)$/i);
  if (!match) return [];

  return match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function extractTagsLine(text: string) {
  // Ex: "Tags: fintech, alt-data, ml [tags]"
  const lower = text.toLowerCase();
  const marker = "[tags]";
  const idx = lower.indexOf(marker);
  if (idx === -1) return undefined;

  const before = text.slice(0, idx);

  const lines = before.split("\n").map((l) => l.trim());
  const tagsLine = [...lines].reverse().find((l) => /^tags:\s*/i.test(l));
  if (!tagsLine) return undefined;

  const match = tagsLine.match(/^Tags:\s*(.+)$/i);
  if (!match) return undefined;

  const tags = match[1]
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  return tags.length ? tags : undefined;
}

export async function getMediumProjects(): Promise<MediumProject[]> {
  const feedUrl = "https://medium.com/feed/@rickycircelli";

  const res = await fetch(feedUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Next.js)",
      Accept: "application/rss+xml,application/xml;q=0.9,*/*;q=0.8",
    },
    next: { revalidate: 3600 }, // 1 hour
  });

  if (!res.ok) {
    throw new Error(`Medium feed fetch failed: ${res.status} ${res.statusText}`);
  }

  const xml = await res.text();
  const feed = await parser.parseString(xml);

  return (feed.items as MediumItem[])
    .filter((item) => (item.title ?? "").toLowerCase().includes("[project]"))
    .map((item) => {
      const { description, stack, tags } = extractSiteFields(item);

      return {
        title: (item.title ?? "Untitled").replace(/\[project\]\s*/i, "").trim(),
        link: item.link ?? "#",
        date: item.isoDate ?? "",
        description,
        stack,
        tags,
      };
    });
}
