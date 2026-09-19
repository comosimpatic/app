import React from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import BrandHierarchy from "../components/BrandHierarchy";

const pillars = [
  { title: "Regional, not local", desc: "Distribution Factory Caribbean is built around the Caribbean as one commercial region — not a collection of markets to be entered one at a time." },
  { title: "Private-sector execution", desc: "where regional institutions set policy and facilitate dialogue, Distribution Factory Caribbean executes: it moves products, closes distribution deals and puts capital to work." },
  { title: "One relationship", desc: "A business works with Distribution Factory Caribbean once — and gains access to sourcing, distribution, logistics, market entry and investment across the network." },
];

const officeSteps = [
  "Market Development",
  "Sales Representation",
  "Distributor Recruitment",
  "Logistics Coordination",
  "Regional Distribution",
  "Customer Development",
  "Market Expansion",
];

const About = () => (
  <>
    <Seo
      title="About Distribution Factory Caribbean"
      description="Distribution Factory Caribbean is a Pan-Caribbean commercial company — the private-sector execution layer for regional trade, distribution, logistics and investment — and the home of the DFX Caribbean platform."
    />
    <PageHero
      eyebrow="About Us"
      title="A private-sector execution layer for Caribbean trade"
      lede="Distribution Factory Caribbean was developed to assist Caribbean businesses, which spend too much time solving the same regional problems market by market."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <p className="text-[14px] font-semibold text-coral mb-3.5">The company story</p>
          <h2 className="font-serif text-[26px] sm:text-[32px] mb-5">
            Built on a simple Caribbean principle
          </h2>
          <div className="space-y-4 text-ink-soft text-[15.5px] max-w-[52ch]">
            <p>
              The 15 core markets Distribution Factory Caribbean serves are geographically fragmented but commercially
              connected — shared languages of trade, overlapping supply chains, and businesses that
              routinely need the same thing: a way to move products, capital and commercial
              relationships across borders without rebuilding infrastructure in every territory.
            </p>
            <p>
              Distribution Factory Caribbean Inc. was created to be that
              infrastructure. Instead of asking a manufacturer to find a distributor in Jamaica, a
              freight partner in Trinidad, and a sales agent in Barbados separately, the company
              brings sourcing, distribution, logistics, market entry, commercial representation and
              investment together — and delivers it through its commercial platform, DFX Caribbean.
            </p>
            <p>
              The result is a company that behaves less like a single-market service provider and
              more like a regional trade and distribution utility — one a business plugs into once,
              and scales through over time.
            </p>
          </div>
        </div>
        <div>
          <p className="text-[14px] font-semibold text-coral mb-3.5">Positioning</p>
          <h2 className="font-serif text-[26px] sm:text-[32px] mb-5">
            Where Distribution Factory Caribbean sits in the regional ecosystem
          </h2>
          <p className="text-ink-soft text-[15.5px] max-w-[52ch] mb-6">
            Regional institutions like CARICOM and Caribbean Export set trade policy, coordinate
            standards and facilitate regional dialogue between governments and industry. Distribution
            Factory Caribbean operates one layer down — as the commercial and operational execution partner businesses use to
            actually act on that regional access.
          </p>
          <ul className="border-t border-parchment-line">
            {pillars.map((p) => (
              <li key={p.title} className="py-5 border-b border-parchment-line">
                <h3 className="text-[16.5px] mb-1.5">{p.title}</h3>
                <p className="text-[14.5px] text-ink-soft">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="bg-navy-deep text-cream py-20 sm:py-28" data-testid="manufacturers-office">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-24 items-start">
        <div>
          <p className="text-[12.5px] font-bold tracking-[0.18em] uppercase text-coral mb-6">
            The Manufacturer's Caribbean Office
          </p>
          <h2 className="text-[38px] sm:text-[58px] leading-[1.05] text-cream mb-8">
            You manufacture. We help build the Caribbean market.
          </h2>
          <p className="text-[18px] sm:text-[20px] text-cream font-medium max-w-[46ch] mb-5">
            A manufacturer does not necessarily need offices, employees and warehouses in every
            Caribbean country to develop a regional presence.
          </p>
          <p className="text-[17px] text-cream/90 max-w-[46ch] mb-10">
            Through Distribution Factory Caribbean, manufacturers can access a coordinated regional
            commercial network encompassing:
          </p>
          <p className="text-[24px] sm:text-[30px] font-bold leading-tight text-teal-light mb-10 max-w-[20ch]">
            One regional relationship. Multiple markets.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link to="/business-model#doing-business" className="btn btn-coral">Sell Into The Caribbean</Link>
            <Link to="/services" className="btn btn-outline-light">Explore Our Services</Link>
          </div>
        </div>
        <ol className="max-w-[420px] w-full lg:ml-auto">
          {officeSteps.map((s, i) => (
            <li key={s}>
              <div className="border border-white/30 bg-white/5 px-6 py-4 text-[18px] font-bold flex items-baseline gap-4">
                <span className="text-[13px] text-teal-light w-5 shrink-0">{i + 1}</span>
                {s}
              </div>
              {i < officeSteps.length - 1 && (
                <div className="flex justify-center py-1.5 text-teal-light">
                  <ArrowDown size={18} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="The brand relationship"
          title="Distribution Factory Caribbean and DFX Caribbean"
          lede="Distribution Factory Caribbean is the company. DFX Caribbean is its major project and commercial platform."
        />
        <BrandHierarchy />
      </div>
    </section>

    <section className="py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Leadership & Team"
          title="A regional team, built for execution"
          lede="Our team combines regional trade, logistics and commercial development experience with on-the-ground representation in core markets. A full leadership profile is in development as the company scales."
        />
        <div className="grid sm:grid-cols-3 gap-8">
          {["Trade & Distribution", "Logistics & Operations", "Investment & Market Entry"].map((role) => (
            <div key={role} className="bg-white border border-parchment-line p-7">
              <p className="text-[13px] font-semibold text-teal mb-2">Leadership function</p>
              <h3 className="text-[17px]">{role}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand title="Meet the platform: DFX Caribbean" primary={{ label: "Explore DFX Caribbean", to: "/dfx-caribbean" }} />
  </>
);

export default About;
