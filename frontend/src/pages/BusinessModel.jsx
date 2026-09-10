import React from "react";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";

const pillars = [
  {
    num: "01",
    title: "Source",
    desc: "Finding the right products, suppliers and commercial opportunities to move through the network.",
    services: ["Supplier identification", "Product sourcing", "Market & category research", "Sourcing request management"],
  },
  {
    num: "02",
    title: "Move",
    desc: "Coordinating everything required to get product physically from origin to destination market.",
    services: ["Freight & consolidation", "Warehousing", "Customs coordination", "Last-mile delivery"],
  },
  {
    num: "03",
    title: "Sell",
    desc: "Connecting products with the distributors, retailers, businesses and consumers who will move them.",
    services: ["Distributor identification", "Sales representation", "Retail & hospitality placement", "Market reporting"],
  },
  {
    num: "04",
    title: "Invest",
    desc: "Identifying and facilitating capital into businesses, infrastructure and regional opportunities.",
    services: ["Deal sourcing", "Investor introductions", "Structuring support", "Regional project pipeline"],
  },
];

const ecosystem = ["Investors", "DFC Platform", "Suppliers, Buyers & Partners", "Distribution", "Logistics", "Caribbean Markets"];

const BusinessModel = () => (
  <>
    <PageHero
      eyebrow="Our Business Model"
      title="Source. Move. Sell. Invest."
      lede="DFC operates across four interconnected pillars — from finding a product to putting capital behind it — so a single relationship can cover the full commercial journey."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 gap-8">
          {pillars.map((p) => (
            <div key={p.num} className="border border-parchment-line p-8" data-testid={`pillar-${p.num}`}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="font-serif text-teal text-[14px]">{p.num}</span>
                <h2 className="font-serif text-[24px]">{p.title}</h2>
              </div>
              <p className="text-ink-soft text-[15px] mb-5 max-w-[42ch]">{p.desc}</p>
              <ul className="space-y-2">
                {p.services.map((s) => (
                  <li key={s} className="text-[14px] text-ink-soft pl-4 relative">
                    <span className="absolute left-0 text-parchment-line">—</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy text-cream py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          dark
          kicker="Ecosystem"
          title="How capital, products and markets connect through DFC"
          lede="The DFC platform sits at the center of a regional flow — bringing capital, supply and demand together across Caribbean markets."
        />
        <div className="flex flex-wrap items-center gap-3">
          {ecosystem.map((node, i) => (
            <React.Fragment key={node}>
              <div
                className={`px-5 py-4 border text-[14px] font-medium ${
                  node === "DFC Platform"
                    ? "bg-teal border-teal text-cream"
                    : "border-white/25 text-cream/85"
                }`}
              >
                {node}
              </div>
              {i < ecosystem.length - 1 && <span className="text-teal-light">&rarr;</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    <CtaBand title="Find your entry pathway" primary={{ label: "Doing Business with DFC", to: "/doing-business" }} />
  </>
);

export default BusinessModel;
