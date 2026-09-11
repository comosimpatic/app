import React from "react";
import PageHero from "../components/PageHero";
import InquiryForm from "../components/InquiryForm";
import Seo from "../components/Seo";

const offices = [
  { city: "Miami, USA", role: "Regional trade gateway" },
  { city: "Kingston, Jamaica", role: "Northern Caribbean desk" },
  { city: "Bridgetown, Barbados", role: "Eastern Caribbean desk" },
  { city: "Port of Spain, Trinidad & Tobago", role: "Southern Caribbean desk" },
];

const routing = [
  { label: "Sell", email: "sell@dfxcaribbean.com" },
  { label: "Buy", email: "buy@dfxcaribbean.com" },
  { label: "Partner", email: "partner@dfxcaribbean.com" },
  { label: "Invest", email: "invest@dfxcaribbean.com" },
  { label: "Press", email: "press@dfxcaribbean.com" },
];

const Contact = () => (
  <>
    <Seo
      title="Contact DFX Caribbean"
      description="Reach DFX Caribbean's regional office directory or route your inquiry directly to the sell, buy, partner, invest or press desk."
    />
    <PageHero
      eyebrow="Contact"
      title="Talk to DFX"
      lede="Send a general inquiry below, or reach the desk closest to your pathway."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_0.8fr] gap-14">
        <div>
          <h2 className="font-serif text-[24px] mb-6">General inquiry</h2>
          <InquiryForm
            pathwayOptions={["general", "sell", "buy", "partner", "invest", "press"]}
            submitLabel="Send Inquiry"
            testIdPrefix="contact"
          />
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-ink-soft mb-4">
              Regional Office Directory
            </h3>
            <ul className="border-t border-parchment-line">
              {offices.map((o) => (
                <li key={o.city} className="py-3.5 border-b border-parchment-line flex justify-between text-[14.5px]">
                  <span>{o.city}</span>
                  <span className="text-ink-soft text-[13px]">{o.role}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[15px] font-semibold uppercase tracking-wide text-ink-soft mb-4">
              Pathway-Specific Routing
            </h3>
            <ul className="space-y-2 text-[14.5px]">
              {routing.map((r) => (
                <li key={r.label} className="flex justify-between">
                  <span className="text-ink-soft">{r.label}</span>
                  <span>{r.email}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Contact;
