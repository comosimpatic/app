import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";

const services = [
  {
    num: "01",
    title: "Market Entry",
    desc: "Helping manufacturers and brands establish a presence in Caribbean markets.",
    points: ["Market identification and assessment", "Entry strategy and go-to-market planning", "Import and regulatory requirements guidance", "Product launch support"],
  },
  {
    num: "02",
    title: "Sales & Distribution",
    desc: "Developing distributors, agents, buyers and sales channels.",
    points: ["Distributor and agent recruitment", "Sales representation", "Buyer and retailer introductions", "Channel development and market reporting"],
  },
  {
    num: "03",
    title: "Import, Export & Logistics",
    desc: "Coordinating the movement of products from supplier to market.",
    points: ["Freight and consolidation coordination", "Customs and documentation support", "Warehousing and fulfilment", "Last-mile delivery"],
  },
  {
    num: "04",
    title: "Regional Business Development",
    desc: "Identifying new markets, customers, partners and commercial opportunities.",
    points: ["New market and customer identification", "Partner and network development", "Commercial opportunity research", "Multi-market expansion planning"],
  },
  {
    num: "05",
    title: "Projects & Investment",
    desc: "Developing and connecting commercially viable Caribbean projects.",
    points: ["Project identification and development", "Investor and partner introductions", "Structuring support", "A pipeline of live opportunities"],
    link: { to: "/trade-investment", label: "See current investment projects" },
  },
];

const Services = () => (
  <>
    <Seo
      title="Our Services — Market Entry, Distribution, Logistics & Investment"
      description="Five commercial service lines from Distribution Factory Caribbean: market entry, sales and distribution, import/export and logistics, regional business development, and projects and investment."
    />
    <PageHero
      eyebrow="Our Services"
      title="Five commercial service lines"
      lede="Everything Distribution Factory Caribbean does, organized around how businesses actually move: get in, sell, move product, grow, and invest."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="border-t border-parchment-line">
          {services.map((s) => (
            <div
              key={s.num}
              className="grid lg:grid-cols-[90px_1fr_1.1fr] gap-x-10 gap-y-4 py-10 border-b border-parchment-line"
              data-testid={`service-${s.num}`}
            >
              <span className="font-serif text-[15px] text-teal">{s.num}</span>
              <div>
                <h2 className="font-serif text-[26px] sm:text-[30px] mb-3">{s.title}</h2>
                <p className="text-ink-soft text-[16px] max-w-[44ch]">{s.desc}</p>
                {s.link && (
                  <Link to={s.link.to} className="inline-block mt-5 text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal">
                    {s.link.label} &rarr;
                  </Link>
                )}
              </div>
              <ul className="space-y-2.5 self-center">
                {s.points.map((p) => (
                  <li key={p} className="text-[14.5px] text-ink-soft pl-4 relative">
                    <span className="absolute left-0 text-teal">—</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand
      title="What do you want to do in the Caribbean?"
      primary={{ label: "Start a Conversation", to: "/contact" }}
      secondary={{ label: "Explore DFX Caribbean", to: "/dfx-caribbean" }}
    />
  </>
);

export default Services;
