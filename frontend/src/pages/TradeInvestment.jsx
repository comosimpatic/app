import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import InquiryForm from "../components/InquiryForm";
import Seo from "../components/Seo";
import { investmentOpportunities, regionalProjects } from "../data/content";
import { coreMarkets } from "../data/countries";

const TradeInvestment = () => (
  <>
    <Seo
      title="Caribbean Trade & Investment Opportunities"
      description="Explore Caribbean trade opportunities, investment opportunities and regional infrastructure projects tracked across DFC's network of 15 core markets."
    />
    <PageHero
      eyebrow="Trade & Investment"
      title="Where Caribbean trade meets Caribbean capital"
      lede="Market opportunities, investment opportunities and regional projects — tracked in one place across the DFC network."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Market Opportunities"
          title="Opportunities by market"
          lede="Every core market carries its own overview, products, suppliers, buyers and investment opportunities."
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

    <section className="bg-parchment py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Investment Portal"
          title="Investment opportunities"
          lede="Businesses and projects across the network currently seeking capital. Full data-room access is available on request."
        />
        <div className="grid sm:grid-cols-2 gap-6 mb-6">
          {investmentOpportunities.map((op) => (
            <div key={op.sector + op.location} className="bg-white border border-parchment-line p-7" data-testid="investment-card">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[18px]">{op.sector}</h3>
                <span
                  className={`text-[11.5px] font-semibold px-2.5 py-1 ${
                    op.status === "Open" ? "bg-teal/10 text-teal" : "bg-coral/10 text-coral"
                  }`}
                >
                  {op.status}
                </span>
              </div>
              <dl className="text-[14px] space-y-1.5 text-ink-soft">
                <div className="flex justify-between"><dt>Location</dt><dd className="text-ink">{op.location}</dd></div>
                <div className="flex justify-between"><dt>Investment requirement</dt><dd className="text-ink">{op.requirement}</dd></div>
                <div className="flex justify-between"><dt>Expected returns</dt><dd className="text-ink text-right">{op.returns}</dd></div>
                <div className="flex justify-between"><dt>Structure</dt><dd className="text-ink text-right">{op.structure}</dd></div>
                <div className="flex justify-between"><dt>Sponsor</dt><dd className="text-ink text-right">{op.sponsor}</dd></div>
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHead
            kicker="Regional Projects"
            title="Infrastructure, energy & agriculture"
            lede="Regional-scale projects DFC is tracking or involved in across core markets."
            className="mb-8"
          />
          <ul className="border-t border-parchment-line">
            {regionalProjects.map((proj) => (
              <li key={proj.name} className="py-4 border-b border-parchment-line flex justify-between text-[15px]">
                <span>{proj.name}</span>
                <span className="text-ink-soft text-[13px]">{proj.sector}</span>
              </li>
            ))}
          </ul>
          <p className="text-[13.5px] text-ink-soft mt-8">
            <span className="font-semibold text-ink">Trade Intelligence: </span>
            Reports on tariffs, regulations and market conditions are in development as part of DFC's
            phase 2 trade intelligence offering.
          </p>
        </div>
        <div className="bg-parchment border border-parchment-line p-8">
          <h2 className="font-serif text-[22px] mb-2">Request Investment Information</h2>
          <p className="text-ink-soft text-[14.5px] mb-6">
            Tell us about your investment interest and a member of the DFC investment team will follow up.
          </p>
          <InquiryForm pathway="invest" submitLabel="Request Investment Information" testIdPrefix="invest" />
        </div>
      </div>
    </section>
  </>
);

export default TradeInvestment;
