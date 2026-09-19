import React from "react";

const PageHero = ({ eyebrow, title, lede, children }) => (
  <section className="bg-white text-ink pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-parchment-line">
    <div className="max-w-wrap mx-auto px-5 sm:px-8">
      {eyebrow && (
        <p className="text-[14px] text-teal font-medium mb-4">{eyebrow}</p>
      )}
      <h1 className="font-serif text-[38px] sm:text-[58px] max-w-[18ch] mb-6">{title}</h1>
      {lede && <p className="text-[18px] sm:text-[20px] text-ink-soft max-w-[58ch] font-medium">{lede}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
