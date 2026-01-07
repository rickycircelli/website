Personal website built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

The site is intentionally designed with a **terminal-inspired UI** to present my background, experience, projects, and technical skills in a way that reflects how I think and work.

Live site: [https://rickycircelli.com](https://rickycircelli.com/)

## Purpose

I built this site to:

- Create a clean, fast personal site that feels technical but human
- Showcase experience, projects, and skills without a traditional résumé layout
- Learn React + Next.js by building something real from scratch

I learned **React and Next.js in about one week** and applied them directly by designing, implementing, and deploying this site end-to-end.

## Tech Stack

- **Next.js (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Vercel**

## Features

- Terminal-style command/output layout
- Custom skills matrix rendered with text-based progress bars
- Projects pulled dynamically from Medium posts
- Fully responsive and fast
- SEO metadata, Open Graph support, and custom favicon

## Projects via Medium Scraping

The Projects page is generated dynamically by pulling my writing directly from Medium.

Instead of manually maintaining a separate projects list, I use **web scraping via Medium’s RSS feed** to keep the site in sync with my published work.

### How it works

- Fetches my Medium RSS feed at runtime
- Parses the full post content (`content:encoded`)
- Filters posts marked with `[project]` in the title
- Extracts structured metadata (description, tech stack, images) from the post body

## Ideas for Improvement

- Make terminal interactive
- Terminal-style Open Graph preview image
- Dark/light theme toggle
