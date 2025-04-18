"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { FC } from "react";

/**
 * 🍂 Warm‑Ghibli × Soft Future Grid 🍂
 * Palette: twilight gold (#FFDE9F), forest moss (#A4C48A), dusk teal (#8EB8C7)
 * Mood: camp‑fire glow, gentle grain, subtle motion.
 */

type Project = {
  title: string;
  slug: string;
  desc: string;
  tech: string[];
  thumb: string;
};

const projects: Project[] = [
  {
    title: "OpenType",
    slug: "opentype",
    desc: "A minimalistic typing speed testing app built with React and TailwindCSS.",
    tech: ["React", "Redux", "TailwindCSS"],
    thumb: "https://picsum.photos/seed/typing/640/360",
  },
  {
    title: "Students Get Rentals",
    slug: "students-get-rentals",
    desc: "A student rental platform for students to find and rent properties.",
    tech: ["React", "NextJS", "Nextra", "MongoDB"],
    thumb: "https://picsum.photos/seed/rentals/640/360",
  },
  {
    title: "Call Analytics",
    slug: "call-analytics",
    desc: "A minimal and aesthetic app that scans your call history and gives you incredible insights.",
    tech: ["React", "React Native", "Chart.js"],
    thumb: "https://picsum.photos/seed/call/640/360",
  },
];

const ProjectsContent: FC = () => (
  <section id="projects" className="mx-auto max-w-6xl px-4 py-20">
    <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <motion.article
          key={p.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-amber-300/30 bg-white/5 shadow-[0_0_25px_-8px_rgba(255,222,159,0.5)] backdrop-blur-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_-6px_rgba(255,210,120,0.7)]"
        >
          {/* top text */}
          <div className="p-6 pb-4">
            <h3 className="text-lg font-semibold text-amber-50 drop-shadow">
              {p.title}
            </h3>
            <hr className="my-3 border-amber-200/30" />
            <p className="text-sm leading-relaxed text-amber-200/80">
              {p.desc}
            </p>
          </div>

          {/* image */}
          <div className="relative h-48 w-full">
            <Image
              src={p.thumb}
              alt={p.title}
              fill
              className="object-cover"
              sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
            />
          </div>

          {/* chips */}
          <div className="flex flex-wrap gap-2 p-4">
            {p.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-amber-200/15 px-3 py-1 text-xs font-medium text-amber-100 ring-1 ring-amber-300/30 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-auto p-4">
            <Link
              href={`/projects/${p.slug}`}
              className="block rounded-md bg-gradient-to-r from-amber-300 via-rose-300 to-orange-300 px-4 py-2 text-center text-sm font-semibold text-slate-900 shadow-inner transition-opacity hover:opacity-90"
            >
              View Project
            </Link>
          </div>

          {/* grain overlay for nostalgic warmth */}
          <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[url('https://svgshare.com/i/13JB.svg')] bg-[length:120px] opacity-10 mix-blend-soft-light" />
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsContent;
