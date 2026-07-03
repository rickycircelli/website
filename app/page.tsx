import type { Metadata } from "next";
import Terminal from "./components/Terminal";
import { getMediumProjects } from "./lib/medium";
import type { Project } from "./lib/types";

export const revalidate = 1800; // 30 minutes

export const metadata: Metadata = {
  title: "Ricky Circelli",
  description:
    "Student-athlete at the University of South Carolina focused on fintech and data science. Projects, experience, and technical skills."
};

export default async function Home() {
  let projects: Project[] = [];
  try {
    projects = await getMediumProjects();
  } catch (e) {
    console.error("Medium fetch error:", e);
  }

  return <Terminal projects={projects} />;
}
