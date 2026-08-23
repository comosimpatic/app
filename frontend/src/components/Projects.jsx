import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { strategy, projects } from "../mock";

const allTags = [
  "All", "App Development", "Dashboard Design", "Data Visualization",
  "Interface Design and UX", "Software Design", "Web App Design",
];

const ProjectCard = ({ p }) => (
  <a
    href={`#project-${p.id}`}
    className="fuse-card group relative block w-full rounded-[6px] overflow-hidden bg-[#111]"
    style={{ aspectRatio: "1920 / 765" }}
  >
    <img src={p.cover} alt={p.name} loading="lazy" className="fuse-card-img w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />

    {/* category chips top-left */}
    <div className="absolute top-4 left-4 flex flex-wrap gap-2 max-w-[60%]">
      {p.categories.map((c) => (
        <span key={c} className="flex items-center gap-1 text-[11px] text-white/90 bg-black/25 backdrop-blur-sm px-2 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1fdd7a]" />
          {c}
        </span>
      ))}
    </div>

    {/* service tags top-right */}
    <div className="absolute top-4 right-4 hidden md:flex flex-wrap gap-x-4 gap-y-1 justify-end max-w-[45%] text-right">
      {p.tags.map((t) => (
        <span key={t} className="text-[11px] text-white/80">{t}</span>
      ))}
    </div>

    {/* name bottom-left */}
    <h3 className="absolute bottom-4 left-5 text-white text-[22px] md:text-[30px] font-semibold drop-shadow">
      {p.name}
    </h3>

    {/* arrow bottom-right */}
    <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full border-2 border-[#1fdd7a] bg-white/90 flex items-center justify-center group-hover:bg-[#1fdd7a] transition-colors">
      <ArrowRight size={18} className="text-[#0e1b2a]" />
    </span>
  </a>
);

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="work" className="bg-white px-6 md:px-12 lg:px-20 py-20 lg:py-28">
      {/* Strategy intro */}
      <div className="grid lg:grid-cols-2 gap-10 mb-14">
        <h2 className="text-[36px] md:text-[46px] font-medium leading-[1.05] text-[#0e1b2a]">
          {strategy.title}
        </h2>
        <div className="space-y-5 text-[#4a5561] text-[15.5px] leading-relaxed lg:pt-2">
          <p>{strategy.p1}</p>
          <p>{strategy.p2}</p>
        </div>
      </div>

      {/* Filter row */}
      <div className="flex items-center justify-between border-t border-b border-black/10 py-3 mb-8 gap-4 flex-wrap">
        <span className="text-[13px] text-[#6b7683] uppercase tracking-wide">Industry / Project</span>
        <div className="flex flex-wrap gap-2 justify-end">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`text-[12.5px] px-3 py-1.5 rounded-full transition-colors ${
                filter === t
                  ? "bg-[#0e1b2a] text-white"
                  : "text-[#6b7683] hover:text-[#0e1b2a] hover:bg-black/5"
              }`}
            >
              {t === "All" ? "Services" : t}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of projects (single column large cards like source) */}
      <div className="flex flex-col gap-6">
        {filtered.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
