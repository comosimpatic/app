import React from "react";

const SectionHead = ({ kicker, title, lede, dark = false, className = "" }) => (
  <div className={`max-w-[640px] mb-14 ${className}`}>
    {kicker && (
      <p className={`text-[14px] font-semibold mb-3 ${dark ? "text-teal-light" : "text-coral"}`}>
        {kicker}
      </p>
    )}
    {title && (
      <h2 className={`text-[26px] sm:text-[32px] lg:text-[36px] mb-4 ${dark ? "text-cream" : "text-ink"}`}>
        {title}
      </h2>
    )}
    {lede && (
      <p className={`text-[16px] ${dark ? "text-cream/70" : "text-ink-soft"}`}>{lede}</p>
    )}
  </div>
);

export default SectionHead;
