import React from "react";
import { ArrowDown } from "lucide-react";

const levels = [
  {
    label: "Distribution Factory Caribbean",
    note: "The company",
    style: "bg-navy-deep text-cream border-navy-deep",
    noteStyle: "text-cream/70",
  },
  {
    label: "DFX Caribbean",
    note: "A major project and commercial platform",
    style: "bg-teal text-cream border-teal",
    noteStyle: "text-cream/80",
  },
  {
    label: "DFX Network",
    note: "Manufacturers • Buyers • Distributors • Logistics • Investors",
    style: "bg-white text-ink border-parchment-line",
    noteStyle: "text-ink-soft",
  },
  {
    label: "Caribbean Markets",
    note: "Trade • Sales • Distribution • Investment",
    style: "bg-white text-ink border-parchment-line",
    noteStyle: "text-ink-soft",
  },
];

const BrandHierarchy = ({ className = "" }) => (
  <div className={`max-w-[520px] mx-auto ${className}`} data-testid="brand-hierarchy">
    {levels.map((l, i) => (
      <React.Fragment key={l.label}>
        <div className={`border px-6 py-5 text-center ${l.style}`}>
          <p className="font-serif text-[20px] leading-tight">{l.label}</p>
          <p className={`text-[13px] mt-1.5 ${l.noteStyle}`}>{l.note}</p>
        </div>
        {i < levels.length - 1 && (
          <div className="flex justify-center py-2 text-teal">
            <ArrowDown size={20} strokeWidth={1.75} />
          </div>
        )}
      </React.Fragment>
    ))}
  </div>
);

export default BrandHierarchy;
