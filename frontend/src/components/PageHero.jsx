import React from "react";

const PageHero = ({ eyebrow, title, lede, children }) => (
  <section className="bg-gradient-to-b from-navy to-navy-deep text-cream pt-16 pb-14 sm:pt-20 sm:pb-16">
    <div className="max-w-wrap mx-auto px-5 sm:px-8">
      {eyebrow && (
        <p className="text-[14px] text-teal-light font-medium mb-4">{eyebrow}</p>
      )}
      <h1 className="font-serif text-[32px] sm:text-[42px] max-w-[20ch] mb-5">{title}</h1>
      {lede && <p className="text-[17px] text-cream/80 max-w-[58ch]">{lede}</p>}
      {children}
    </div>
  </section>
);

export default PageHero;
