import React from "react";
import { cn } from "../lib/utils";

const SectionHead = ({ kicker, title, lede, dark = false, className = "" }) => (
  <div className={cn("max-w-[760px] mb-14", className)}>
    {kicker && (
      <p className={`text-[14px] font-semibold mb-3 ${dark ? "text-teal-light" : "text-coral"}`}>
        {kicker}
      </p>
    )}
    {title && (
      <h2 className={`text-[30px] sm:text-[40px] lg:text-[48px] mb-5 ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
    )}
    {lede && (
      <p className={`text-[17px] sm:text-[18px] ${dark ? "text-cream/70" : "text-ink-soft"}`}>{lede}</p>
    )}
  </div>
);

export default SectionHead;
