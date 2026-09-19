import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import BrandHierarchy from "../components/BrandHierarchy";

const audiences = [
  { who: "For Manufacturers", line: "Enter Caribbean markets.", to: "/business-model#doing-business" },
  { who: "For Buyers", line: "Find products and suppliers.", to: "/products" },
  { who: "For Distributors", line: "Access new brands and territories.", to: "/products" },
  { who: "For Logistics Partners", line: "Move regional commerce.", to: "/business-model#doing-business" },
  { who: "For Investors", line: "Find Caribbean projects and opportunities.", to: "/trade-investment" },
  { who: "For Market Representatives", line: "Become part of the DFX network.", to: "/business-model#doing-business" },
];

const steps = [
  { title: "Source", desc: "Products, manufacturers, projects and opportunities." },
  { title: "Connect", desc: "Buyers, distributors, agents, logistics providers and investors." },
  { title: "Coordinate", desc: "Commercial arrangements and market-entry requirements." },
  { title: "Execute", desc: "Sales, distribution, logistics and investment." },
  { title: "Grow", desc: "Repeat business and expansion into additional markets." },
];

const platformPages = [
  { title: "Business Model", desc: "How DFX Caribbean works — four pillars, and three ways to do business with us.", to: "/business-model" },
  { title: "Clients", desc: "Who we serve across the Caribbean, from manufacturers to investors.", to: "/clients" },
  { title: "Products", desc: "Products moving through the DFX network now.", to: "/products" },
  { title: "Trade & Investment", desc: "Live Caribbean projects and investment opportunities.", to: "/trade-investment" },
];

const DfxCaribbean = () => (
  <>
    <Seo
      title="DFX Caribbean — The Caribbean's Commercial Connection Platform"
      description="DFX Caribbean is the commercial connection platform of Distribution Factory Caribbean — linking manufacturers, buyers, distributors, logistics providers and investors across Caribbean markets."
    />

    <section className="relative bg-navy-deep text-cream overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -right-6 -bottom-20 font-serif text-[280px] sm:text-[420px] leading-none text-white/[0.04] select-none pointer-events-none"
      >
        DFX
      </span>
      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24">
        <p className="text-[12.5px] tracking-[0.18em] uppercase text-coral font-semibold mb-6">
          A major project of Distribution Factory Caribbean
        </p>
        <h1 className="font-serif text-[48px] sm:text-[76px] leading-[1.04] mb-5">
          DFX <span className="text-teal-light">Caribbean</span>
        </h1>
        <p className="font-serif text-[22px] sm:text-[30px] text-cream/90 max-w-[24ch] mb-10">
          The Caribbean's commercial connection platform.
        </p>
        <ul className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[15px] font-semibold tracking-wide mb-10">
          {["Discover", "Connect", "Move", "Grow"].map((w, i, arr) => (
            <li key={w} className="flex items-center gap-3">
              <span className="text-cream">{w}</span>
              {i < arr.length - 1 && <ArrowRight size={16} className="text-teal-light" />}
            </li>
          ))}
        </ul>
        <Link to="/business-model#doing-business" className="btn btn-coral">
          Work With DFX
        </Link>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Who DFX is for"
          title="One platform, six ways in"
          lede="Whatever side of Caribbean trade you sit on, DFX gives you a route into the network."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment-line border border-parchment-line">
          {audiences.map((a) => (
            <Link
              key={a.who}
              to={a.to}
              className="bg-white p-8 hover:bg-parchment transition-colors group"
              data-testid={`dfx-audience-${a.who.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <p className="text-[13px] font-semibold uppercase tracking-wide text-teal mb-3">{a.who}</p>
              <p className="font-serif text-[22px] mb-5">{a.line}</p>
              <span className="text-[13px] font-semibold text-coral group-hover:underline">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
        <SectionHead kicker="How DFX works" title="From opportunity to repeat business" className="mb-0" />
        <ol>
          {steps.map((s, i) => (
            <li key={s.title}>
              <div className="flex gap-5 items-baseline">
                <span className="font-serif text-[15px] text-teal w-6 shrink-0">{i + 1}</span>
                <div>
                  <h3 className="text-[19px] uppercase tracking-wide mb-1">{s.title}</h3>
                  <p className="text-[15px] text-ink-soft">{s.desc}</p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="pl-[9px] py-3 text-parchment-line">
                  <ArrowDown size={18} className="text-teal/60" />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Inside the platform"
          title="Explore DFX Caribbean"
          lede="Everything that makes up the DFX platform, in one place."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {platformPages.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              className="border border-parchment-line p-8 hover:border-teal transition-colors"
              data-testid={`dfx-platform-${p.to.replace("/", "")}`}
            >
              <h3 className="font-serif text-[22px] mb-2">{p.title}</h3>
              <p className="text-[14.5px] text-ink-soft mb-4">{p.desc}</p>
              <span className="text-[13px] font-semibold text-coral">Open &rarr;</span>
            </Link>
          ))}
        </div>
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

    <CtaBand
      title="What do you want to do in the Caribbean?"
      primary={{ label: "Start a Conversation", to: "/contact" }}
      secondary={{ label: "Explore Our Markets", to: "/network" }}
    />
  </>
);

export default DfxCaribbean;
