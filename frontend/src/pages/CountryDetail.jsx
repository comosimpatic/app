import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import InquiryForm from "../components/InquiryForm";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
import { findMarket, coreMarkets } from "../data/countries";

const CountryDetail = () => {
  const { slug } = useParams();
  const market = findMarket(slug);
  if (!market) return <Navigate to="/network" replace />;

  const idx = coreMarkets.findIndex((m) => m.slug === slug);
  const prev = coreMarkets[(idx - 1 + coreMarkets.length) % coreMarkets.length];
  const next = coreMarkets[(idx + 1) % coreMarkets.length];

  return (
    <>
      <Seo
        title={`${market.name} — Caribbean Trade & Distribution`}
        description={`${market.name} is one of DFX's 15 core Caribbean markets. Explore market overview, products, suppliers, buyers, distribution, logistics and investment opportunities.`}
      />
      <section className="bg-white text-ink pt-16 pb-14 sm:pt-20 sm:pb-16 border-b border-parchment-line">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <BackLink to="/network" label="Our Caribbean Network" className="text-[13.5px] text-teal font-medium mb-4 inline-block" />
          <h1 className="font-serif text-[32px] sm:text-[42px] mb-5">{market.name}</h1>
          <dl className="flex flex-wrap gap-x-10 gap-y-2 text-[14px] text-ink-soft">
            <div><dt className="inline text-ink-soft/60">Capital &middot; </dt><dd className="inline">{market.capital}</dd></div>
            <div><dt className="inline text-ink-soft/60">Currency &middot; </dt><dd className="inline">{market.currency}</dd></div>
            <div><dt className="inline text-ink-soft/60">Language &middot; </dt><dd className="inline">{market.language}</dd></div>
            <div><dt className="inline text-ink-soft/60">Subregion &middot; </dt><dd className="inline">{market.subregion}</dd></div>
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14">
          <div className="space-y-10">
            <div>
              <p className="text-[13px] font-semibold text-coral mb-2.5">Market Overview</p>
              <p className="text-ink-soft text-[15.5px] max-w-[56ch]">
                {market.name} is one of DFX's 15 core launch markets. DFX's regional platform gives
                businesses operating here access to sourcing, distribution, logistics, market entry
                and investment services across the full Caribbean network — coordinated through a
                single local point of contact.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { title: "Products", body: `Regional and international products available for distribution into ${market.name} across DFX's core categories.` },
                { title: "Suppliers", body: `Local suppliers in ${market.name} can be onboarded to DFX's network for regional distribution.` },
                { title: "Buyers", body: `DFX maintains relationships with retailers, distributors and institutional buyers in ${market.name}.` },
                { title: "Distribution", body: `Local and regional distribution coverage, coordinated with DFX's logistics partners serving ${market.name}.` },
                { title: "Logistics", body: `Freight, warehousing and customs coordination for shipments into and out of ${market.name}.` },
                { title: "Investment Opportunities", body: `Businesses and projects in ${market.name} seeking capital are tracked through DFX's investment portal.` },
              ].map((block) => (
                <div key={block.title} className="border-t-2 border-teal pt-4">
                  <h3 className="text-[16px] mb-1.5">{block.title}</h3>
                  <p className="text-[14px] text-ink-soft">{block.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-parchment-line p-8 h-fit">
            <p className="text-[13px] font-semibold text-teal mb-2">DFX Local Contact</p>
            <h2 className="font-serif text-[21px] mb-5">Reach the {market.name} desk</h2>
            <InquiryForm pathway="general" submitLabel="Contact This Market" testIdPrefix="country-contact" />
          </div>
        </div>
      </section>

      <section className="border-t border-parchment-line py-8">
        <div className="max-w-wrap mx-auto px-5 sm:px-8 flex justify-between text-[14px]">
          <Link to={`/network/${prev.slug}`} className="text-teal font-semibold">&larr; {prev.name}</Link>
          <Link to={`/network/${next.slug}`} className="text-teal font-semibold">{next.name} &rarr;</Link>
        </div>
      </section>
    </>
  );
};

export default CountryDetail;
