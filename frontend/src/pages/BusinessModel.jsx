import React from "react";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";

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

const ecosystem = ["Investors", "DFX Platform", "Suppliers, Buyers & Partners", "Distribution", "Logistics", "Caribbean Markets"];

const revenueStreams = [
  { title: "Distribution margins", desc: "Margin earned moving supplier product through DFX's distribution network." },
  { title: "Logistics coordination fees", desc: "Fees for freight, consolidation, warehousing and last-mile coordination." },
  { title: "Product sourcing fees", desc: "Fees for identifying and qualifying suppliers on behalf of buyers." },
  { title: "Market-entry services", desc: "Fixed or retained fees for market assessment and entry planning." },
  { title: "Commercial representation", desc: "Ongoing fees for acting as a supplier's local sales and market presence." },
  { title: "Warehouse & fulfillment fees", desc: "Storage, pick-and-pack and fulfillment charges across regional facilities." },
  { title: "Subscription / membership", desc: "Recurring revenue from DFX Business, Distributor, Exporter and Partner tiers." },
  { title: "Transaction fees", desc: "Per-transaction fees on sourcing requests, quotes and completed orders." },
  { title: "Marketplace commissions", desc: "Commission on transactions completed through the DFX product marketplace." },
  { title: "Investment facilitation fees", desc: "Fees for structuring and introducing investment opportunities to capital." },
  { title: "Data & market intelligence", desc: "Revenue from regional trade, tariff and market-demand reporting." },
];

const BusinessModel = () => (
  <>
    <Seo
      title="Our Business Model — Source, Move, Sell, Invest"
      description="How DFX Caribbean's regional commercial platform works, and the revenue streams behind a Pan-Caribbean trade, distribution and investment business."
    />
    <PageHero
      eyebrow="Our Business Model"
      title="Source. Move. Sell. Invest."
      lede="DFX operates across four interconnected pillars — from finding a product to putting capital behind it — so a single relationship can cover the full commercial journey."
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

    <section className="bg-white text-ink py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Ecosystem"
          title="How capital, products and markets connect through DFX"
          lede="The DFX platform sits at the center of a regional flow — bringing capital, supply and demand together across Caribbean markets."
        />
        <div className="flex flex-wrap items-center gap-3">
          {ecosystem.map((node, i) => (
            <React.Fragment key={node}>
              <div
                className={`px-5 py-4 border text-[14px] font-medium ${
                  node === "DFX Platform"
                    ? "bg-teal border-teal text-cream"
                    : "border-parchment-line text-ink-soft"
                }`}
              >
                {node}
              </div>
              {i < ecosystem.length - 1 && <span className="text-teal">&rarr;</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Revenue Model"
          title="Multiple revenue streams, not just freight margins"
          lede="DFX's economics are built across the full Source–Move–Sell–Invest chain rather than depending on any single line of business."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
          {revenueStreams.map((r) => (
            <div key={r.title} className="border-t-2 border-teal pt-[18px]">
              <h3 className="text-[16px] mb-2">{r.title}</h3>
              <p className="text-[14px] text-ink-soft">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand title="Find your entry pathway" primary={{ label: "Doing Business with DFX", to: "/doing-business" }} />
  </>
);

export default BusinessModel;
