import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { industryFilters, clients, industries } from "../mock";

const ClientCard = ({ c }) => (
  <div className="fuse-card group relative bg-[#f4f5f6] hover:bg-white rounded-[8px] p-6 flex flex-col justify-between h-[190px] border border-transparent hover:border-black/10 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all overflow-hidden">
    <div className="h-8 flex items-center">
      <img src={c.logo} alt={c.name} loading="lazy" className="max-h-8 max-w-[120px] object-contain grayscale group-hover:grayscale-0 transition-all" />
    </div>
    <p className="text-[13px] text-[#6b7683] leading-snug mt-3">{c.desc}</p>
    {c.caseStudy && (
      <a href={`#case-${c.name}`} className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-[#0e1b2a] group-hover:text-[#10c968] transition-colors">
        Case Study <ArrowRight size={14} />
      </a>
    )}
  </div>
);

export default function Clients() {
  const [active, setActive] = useState("All industries");

  const filtered =
    active === "All industries"
      ? clients
      : clients.filter((c) => c.industries.includes(active));

  return (
    <section id="clients" className="bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="mb-8">
        <span className="text-[13px] uppercase tracking-[0.2em] text-[#1fdd7a] font-medium">Clients</span>
        <h2 className="text-[32px] md:text-[42px] font-medium leading-[1.05] text-[#0e1b2a] mt-2 max-w-[680px]">
          Trusted by teams shipping regulated, data-heavy products.
        </h2>
      </div>

      {/* Industry filter pills */}
      <div className="flex flex-wrap gap-2 mb-10">
        {industryFilters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`text-[13px] px-4 py-2 rounded-full border transition-colors ${
              active === f
                ? "bg-[#0e1b2a] text-white border-[#0e1b2a]"
                : "border-black/10 text-[#6b7683] hover:border-[#0e1b2a] hover:text-[#0e1b2a]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Client logos grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((c) => (
          <ClientCard key={c.name} c={c} />
        ))}
      </div>

      {/* Industries block */}
      <div className="mt-24">
        <h2 className="text-[30px] md:text-[40px] font-medium text-[#0e1b2a] max-w-[600px] leading-tight">
          Regardless of Your Industry, We've Got You.
        </h2>
        <p className="mt-4 text-[#4a5561] text-[15.5px] leading-relaxed max-w-[720px]">
          We work as a UI/UX design agency for healthcare, fintech, government, AI, and manufacturing clients. Each industry brings its own regulatory rules, data sensitivity, and user behavior patterns, and the design system, research methods, and accessibility standards we use shift to match.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10">
          {industries.map((ind) => (
            <a
              key={ind.name}
              href={`#industry-${ind.name}`}
              className="fuse-card group flex flex-col items-start gap-4 bg-[#f4f5f6] hover:bg-[#0e1b2a] rounded-[10px] p-5 h-[150px] justify-between transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                <img src={ind.icon} alt="" className="w-6 h-6 object-contain" />
              </span>
              <span className="text-[15px] font-medium text-[#0e1b2a] group-hover:text-white transition-colors leading-tight">
                {ind.name}
              </span>
            </a>
          ))}
        </div>

        <a href="#industries" className="inline-flex items-center gap-2 mt-8 text-[15px] font-medium text-[#0e1b2a] hover:text-[#10c968] transition-colors">
          Discover <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
