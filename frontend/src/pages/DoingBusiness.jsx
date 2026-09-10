import React, { useState } from "react";
import PageHero from "../components/PageHero";
import InquiryForm from "../components/InquiryForm";

const pathways = [
  {
    key: "sell",
    for: "For manufacturers & suppliers",
    title: "Sell Through DFC",
    services: ["Product onboarding", "Market assessment", "Distributor identification", "Sales representation", "Regional distribution & warehousing", "Market reporting"],
    cta: "Submit Your Product",
  },
  {
    key: "buy",
    for: "For Caribbean businesses",
    title: "Buy Through DFC",
    services: ["Supplier sourcing", "Product procurement", "Quotation management", "Consolidation & freight", "Customs coordination", "Distribution"],
    cta: "Submit a Sourcing Request",
  },
  {
    key: "partner",
    for: "For institutions & investors",
    title: "Partner With DFC",
    services: ["Logistics companies & distributors", "Manufacturers & retailers", "Financial institutions", "Investment companies", "Governments & development agencies"],
    cta: "Become a DFC Partner",
  },
];

const DoingBusiness = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <PageHero
        eyebrow="Doing Business with DFC"
        title="Ready to enter the Caribbean market?"
        lede="DFC can become your regional commercial partner through three entry pathways."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <div className="grid lg:grid-cols-3 border border-parchment-line">
            {pathways.map((p, i) => (
              <div key={p.key} className={`p-9 ${i > 0 ? "border-t lg:border-t-0 lg:border-l border-parchment-line" : ""}`}>
                <p className="text-[13px] font-semibold text-teal mb-2.5">{p.for}</p>
                <h3 className="font-serif text-[22px] mb-4">{p.title}</h3>
                <ul className="mb-6 space-y-1.5">
                  {p.services.map((s) => (
                    <li key={s} className="text-[14px] text-ink-soft pl-4 relative">
                      <span className="absolute left-0 text-parchment-line">—</span>
                      {s}
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  className="btn btn-teal"
                  onClick={() => setActive(active === p.key ? null : p.key)}
                  data-testid={`pathway-toggle-${p.key}`}
                >
                  {p.cta}
                </button>

                {active === p.key && (
                  <div className="mt-8 pt-8 border-t border-parchment-line">
                    <InquiryForm pathway={p.key} submitLabel={p.cta} testIdPrefix={`pathway-${p.key}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DoingBusiness;
