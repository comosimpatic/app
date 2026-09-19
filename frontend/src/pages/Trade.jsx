import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { coreMarkets } from "../data/countries";

const ways = [
  { title: "Sell into the Caribbean", desc: "Manufacturers and suppliers seeking distribution and buyers.", to: "/business-model#doing-business" },
  { title: "Source products and suppliers", desc: "Buyers looking for products and supply relationships.", to: "/products" },
];

const Trade = () => (
  <>
    <Seo
      title="Caribbean Trade — Market Opportunities by Country"
      description="Explore Caribbean trade opportunities across DFX's network of 15 core markets — sell into the region, source products and suppliers, and see each market's overview."
    />
    <PageHero
      eyebrow="Trade"
      image="/photos/page-trade.jpg"
      imageAlt="Container ship at a port terminal at sunset"
      imagePosition="center"
      title="Caribbean trade, market by market"
      lede="Trade opportunities across the DFX network — sell into the region or source what your business needs."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Market Opportunities"
          title="Opportunities by market"
          lede="Every core market carries its own overview, products, suppliers and buyers."
        />
        <div className="flex flex-wrap gap-2.5">
          {coreMarkets.map((m) => (
            <Link
              key={m.slug}
              to={`/network/${m.slug}`}
              className="px-4 py-2 border border-parchment-line text-[13.5px] font-medium hover:border-teal hover:text-teal transition-colors"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead kicker="Ways to trade" title="Start trading through DFX" />
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {ways.map((w) => (
            <Link key={w.to} to={w.to} className="border border-parchment-line p-8 hover:border-teal transition-colors">
              <h3 className="font-serif text-[22px] mb-2">{w.title}</h3>
              <p className="text-[14.5px] text-ink-soft mb-4">{w.desc}</p>
              <span className="text-[13px] font-semibold text-coral">Get started &rarr;</span>
            </Link>
          ))}
        </div>
        <p className="text-[13.5px] text-ink-soft">
          <span className="font-semibold text-ink">Trade Intelligence: </span>
          Reports on tariffs, regulations and market conditions are in development as part of DFX's
          phase 2 trade intelligence offering.
        </p>
      </div>
    </section>

    <CtaBand
      title="Looking at Caribbean investment instead?"
      primary={{ label: "View Investment Opportunities", to: "/investment" }}
      secondary={{ label: "Contact Us", to: "/contact" }}
    />
  </>
);

export default Trade;
