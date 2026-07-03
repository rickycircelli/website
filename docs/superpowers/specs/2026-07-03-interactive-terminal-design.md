# Interactive Terminal Website — Design

Date: 2026-07-03

## Goal

Turn the terminal-styled homepage into a real interactive terminal: the page auto-types the existing transcript, then leaves a live prompt where visitors can type commands. All existing colors, fonts, and styling stay unchanged.

## Architecture

- Homepage (`app/page.tsx`) becomes a thin server component that renders a client `Terminal` component (`app/components/Terminal.tsx`).
- Existing JSX blocks are extracted into output components in `app/components/outputs/` (Hero, Links, Status, Experience, Skills, Contact, Projects, Help, Neofetch). Each is pure presentational JSX using the current classes.
- A command registry in `app/lib/commands.tsx` maps command strings → `{ output: ReactNode | (args) => ReactNode }`.
- Terminal state: `history: { command: string; output: ReactNode }[]`, current input string, intro phase.

## Intro sequence (hybrid auto-run)

- On load, auto-type the six current commands in order: `whoami`, `ls links/`, `cat status.txt`, `cat experience.log`, `skills --matrix`, `echo $EMAIL`.
- Commands type character-by-character (~30ms/char); each output block appears instantly after its command finishes.
- Any keypress, tap, or click skips the animation and shows the full finished transcript.
- After the intro, show a hint line (e.g. `# type 'help' to see available commands`) and a live prompt with blinking cursor.

## SEO / SSR

- Server renders the complete finished transcript (all six blocks) so crawlers and no-JS users see full content.
- After hydration, the client replaces it with the animated version (or, if `prefers-reduced-motion`, keeps the finished transcript and just appends the live prompt).

## Live commands

| Command | Output |
|---|---|
| `help` | list of available commands with short descriptions |
| `whoami` | hero block |
| `links` / `ls links/` | links block |
| `status` / `cat status.txt` | status block |
| `experience` / `cat experience.log` | experience block |
| `skills` / `skills --matrix` | skills matrix |
| `contact` / `echo $EMAIL` | email block |
| `projects` | project list with links (reuses `/projects` data) |
| `resume` | opens `/resume/ricky_circelli_resume.pdf` in a new tab + prints confirmation |
| `clear` | clears history |
| `sudo …` | "nice try." easter egg |
| `vim` / `vi` | "you can never leave." joke |
| `exit` | ":( fine. closing…" joke (doesn't actually close) |
| `neofetch` | ASCII/info card styled like neofetch |
| `track` | link to Gamecocks athlete page |
| unknown | `command not found: X — try 'help'` |

- Empty input just prints a new prompt line.
- Up/Down arrows cycle through the visitor's command history.
- Matching is case-insensitive; leading/trailing whitespace trimmed.

## Mobile

- A visually hidden real `<input>` receives focus when the user taps anywhere in the terminal, opening the on-screen keyboard. The visible prompt line mirrors its value with a block cursor.
- Enter key on mobile keyboard submits.
- Terminal auto-scrolls to bottom as output is added and while the intro types.
- Existing responsive Tailwind layout unchanged; output blocks already stack at small widths.

## Out of scope

- `/projects` page stays as-is.
- No real filesystem simulation beyond the aliases above; no `cd`/`pwd`.
- No persistence of visitor history across reloads.

## Testing

- Manual: run dev server, verify intro types and skips, each command prints the right block, unknown commands error, clear works, arrow history works, mobile keyboard opens on tap (device emulation), reduced-motion path shows static transcript.
- Build passes (`next build`) with no client/server boundary errors.
