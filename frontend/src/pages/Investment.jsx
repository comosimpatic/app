import React from "react";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import InquiryForm from "../components/InquiryForm";
import Seo from "../components/Seo";
import { investmentOpportunities, regionalProjects } from "../data/content";

const Investment = () => (
  <>
    <Seo
      title="Caribbean Investment Opportunities"
      description="Explore Caribbean investment opportunities and regional infrastructure projects from Distribution Factory Caribbean — logistics, medicinal cannabis, renewable energy and agro processing."
    />
    <PageHero
      eyebrow="Investment"
      image="/photos/page-investment.jpg"
      imageAlt="Palm-lined beach at sunset in Bavaro, Dominican Republic"
      imagePosition="center"
      title="Find and develop Caribbean opportunities"
      lede="Commercially viable Caribbean projects seeking strategic partners and capital, tracked across the region."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Investment Portal"
          title="Investment opportunities"
          lede="Businesses and projects currently seeking capital. Full data-room access is available on request."
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
              {op.synopsis && (
                <p className="text-[14px] text-ink-soft mb-5">{op.synopsis}</p>
              )}
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

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHead
            kicker="Regional Projects"
            title="Infrastructure, energy & agriculture"
            lede="Regional-scale projects we are tracking or involved in across core markets."
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
        </div>
        <div className="bg-white border border-parchment-line p-8">
          <h2 className="font-serif text-[22px] mb-2">Request Investment Information</h2>
          <p className="text-ink-soft text-[14.5px] mb-6">
            Tell us about your investment interest and a member of the investment team will follow up.
          </p>
          <InquiryForm pathway="invest" submitLabel="Request Investment Information" testIdPrefix="invest" />
        </div>
      </div>
    </section>
  </>
);

export default Investment;
