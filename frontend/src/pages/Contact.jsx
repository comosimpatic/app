import React from "react";
import PageHero from "../components/PageHero";
import InquiryForm from "../components/InquiryForm";
import Seo from "../components/Seo";
import SkyWaves from "../components/SkyWaves";

const offices = [
  { city: "Miami, USA", role: "Regional trade gateway" },
  { city: "Kingston, Jamaica", role: "Northern Caribbean desk" },
  { city: "Bridgetown, Barbados", role: "Eastern Caribbean desk" },
  { city: "Port of Spain, Trinidad & Tobago", role: "Southern Caribbean desk" },
];

const CONTACT_EMAIL = "distributionfactorysvg@gmail.com";

const Contact = () => (
  <>
    <Seo
      title="Contact DFX Caribbean"
      description="Reach DFX Caribbean's regional office directory or route your inquiry directly to the sell, buy, partner, invest or press desk."
    />
    <div className="relative overflow-hidden">
    <SkyWaves waves={false} />
    <PageHero
      eyebrow="Contact"
      scene="bare"
      title="Talk to DFX"
      lede="Send a general inquiry below, or reach the desk closest to your pathway."
    />

    <section className="relative pb-20 sm:pb-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-10">
        <div className="glass bg-navy-deep/25 backdrop-blur-md border border-white/30 p-6 sm:p-9 shadow-xl">
          <h2 className="font-serif text-[24px] mb-6">General inquiry</h2>
          <InquiryForm
            pathwayOptions={["general", "sell", "buy", "partner", "invest", "press"]}
            submitLabel="Send Inquiry"
            testIdPrefix="contact"
          />
        </div>

        <div className="space-y-10 glass bg-navy-deep/25 backdrop-blur-md border border-white/30 p-6 sm:p-9 shadow-xl self-start">
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
              Email Us Directly
            </h3>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[14.5px] font-semibold text-teal hover:underline">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </div>
    </section>
    </div>
  </>
);

export default Contact;
