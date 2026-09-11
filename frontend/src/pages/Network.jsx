import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { coreMarkets, phase2Markets } from "../data/countries";

const Network = () => (
  <>
    <Seo
      title="Our Caribbean Network — 15 Core Markets"
      description="DFX's regional network spans 15 core Caribbean markets, with a phase-2 expansion list covering the wider Caribbean. Explore market overviews, contacts and opportunities."
    />
    <PageHero
      eyebrow="Our Caribbean Network"
      title="15 core markets. One regional manifest."
      lede="DFX's network is structured like a shipping manifest — each market carries its own overview, products, suppliers, buyers, distribution, logistics and investment opportunities."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Core Markets — Launch"
          title="The DFX network"
          lede="Select a market to view its overview and local DFX contact."
        />
        <ol className="border-t border-parchment-line relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-parchment-line hidden sm:block" aria-hidden="true" />
          {coreMarkets.map((m, i) => (
            <li key={m.slug} className="border-b border-parchment-line relative">
              <Link
                to={`/network/${m.slug}`}
                className="flex items-center gap-6 py-5 pl-0 sm:pl-10 group"
                data-testid={`network-link-${m.slug}`}
              >
                <span className="hidden sm:flex absolute left-0 w-9 h-9 rounded-full border border-parchment-line bg-white items-center justify-center font-serif text-[12px] text-teal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[18px] font-serif group-hover:text-teal transition-colors flex-1">
                  {m.name}
                </span>
                <span className="hidden sm:block text-[13.5px] text-ink-soft">{m.subregion}</span>
                <span className="text-teal text-[14px]">&rarr;</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Phase 2"
          title="Expanding the network"
          lede="Additional markets planned for the next phase of DFX's regional expansion."
        />
        <div className="flex flex-wrap gap-2.5">
          {phase2Markets.map((m) => (
            <span key={m} className="px-4 py-2 border border-parchment-line text-[13.5px] text-ink-soft bg-white">
              {m}
            </span>
          ))}
        </div>
      </div>
    </section>

    <CtaBand title="Not seeing your market yet?" primary={{ label: "Contact DFX", to: "/contact" }} secondary={{ label: "Partner With DFX", to: "/doing-business" }} />
  </>
);

export default Network;
