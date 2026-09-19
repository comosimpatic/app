import React from "react";

const PageHero = ({ eyebrow, title, lede, image, imageAlt = "", imagePosition = "center", children }) => (
  <section className="bg-white text-ink border-b border-parchment-line">
    <div
      className={
        image
          ? "max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-center py-12 sm:py-16"
          : "max-w-wrap mx-auto px-5 sm:px-8 pt-16 pb-14 sm:pt-20 sm:pb-16"
      }
    >
      <div>
        {eyebrow && (
          <p className="text-[14px] text-teal font-bold mb-4">{eyebrow}</p>
        )}
        <h1 className="font-serif text-[38px] sm:text-[58px] max-w-[18ch] mb-6">{title}</h1>
        {lede && <p className="text-[18px] sm:text-[20px] text-ink-soft max-w-[58ch] font-medium">{lede}</p>}
        {children}
      </div>
      {image && (
        <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[5/4] w-full bg-parchment">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            loading="eager"
          />
        </div>
      )}
    </div>
  </section>
);

export default PageHero;
