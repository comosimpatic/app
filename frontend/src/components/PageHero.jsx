import React from "react";
import SkyWaves from "./SkyWaves";

const PageHero = ({ eyebrow, title, lede, image, imageAlt = "", imagePosition = "center", scene = false, children }) => {
  if (scene) {
    return (
      <section className="relative overflow-hidden text-cream">
        {scene !== "bare" && <SkyWaves />}
        <div className={"relative max-w-wrap mx-auto px-5 sm:px-8 pt-20 sm:pt-28 " + (scene === "bare" ? "pb-10 sm:pb-14" : "pb-40 sm:pb-52")}>
          <div className="max-w-[54ch]">
            {eyebrow && <p className="label text-coral mb-4">{eyebrow}</p>}
            <h1 className="font-serif text-cream text-[40px] sm:text-[58px] lg:text-[68px] max-w-[16ch] mb-6 leading-[1.04]">
              {title}
            </h1>
            {lede && <p className="text-[18px] sm:text-[20px] text-cream/90 max-w-[52ch] font-medium">{lede}</p>}
            {children}
          </div>
        </div>
      </section>
    );
  }

  if (image) {
    return (
      <section className="relative overflow-hidden text-cream">
        <div className="absolute inset-0">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
            style={{ objectPosition: imagePosition }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-navy-deep/20" />
        </div>
        <div className="relative max-w-wrap mx-auto px-5 sm:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <div className="max-w-[54ch]">
            {eyebrow && (
              <p className="label text-coral mb-4">{eyebrow}</p>
            )}
            <h1 className="font-serif text-cream text-[40px] sm:text-[58px] lg:text-[68px] max-w-[16ch] mb-6 leading-[1.04]">
              {title}
            </h1>
            {lede && <p className="text-[18px] sm:text-[20px] text-cream/90 max-w-[52ch] font-medium">{lede}</p>}
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white text-ink pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        {eyebrow && (
          <p className="label text-teal mb-4">{eyebrow}</p>
        )}
        <h1 className="font-serif text-[38px] sm:text-[58px] max-w-[18ch] mb-6">{title}</h1>
        {lede && <p className="text-[18px] sm:text-[20px] text-ink-soft max-w-[58ch] font-medium">{lede}</p>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
