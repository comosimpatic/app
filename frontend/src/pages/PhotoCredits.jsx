import React from "react";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { photoCredits } from "../data/photoCredits";

const PhotoCredits = () => (
  <>
    <Seo title="Photo Credits" noIndex />
    <PageHero
      eyebrow="Legal"
      title="Photo credits"
      lede="Photography on this site is sourced from Wikimedia Commons under free licenses. Credit is given here per that requirement."
    />
    <section className="py-16 sm:py-20">
      <div className="max-w-[68ch] mx-auto px-5 sm:px-8">
        <ul className="border-t border-parchment-line">
          {photoCredits.map((c) => (
            <li key={c.file} className="py-5 border-b border-parchment-line">
              <p className="text-[15px] text-ink mb-1">{c.title}</p>
              <p className="text-[13.5px] text-ink-soft">
                {c.author} &middot; {c.license} &middot;{" "}
                <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-teal font-semibold">
                  Source
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default PhotoCredits;
