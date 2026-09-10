import React from "react";
import { Link } from "react-router-dom";
import HeroRouteMap from "../components/HeroRouteMap";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { categories as productCategories } from "../data/products";
import { newsItems } from "../data/content";

const frictionPoints = [
  "Finding reliable buyers",
  "Entering new Caribbean markets",
  "Distribution & warehousing",
  "Freight & customs",
  "Local commercial representation",
  "Payments & market intelligence",
  "Regulatory requirements",
  "Regional partnerships",
];

const functions = [
  { code: "01", title: "Trade", desc: "Connecting buyers and sellers across Caribbean markets." },
  { code: "02", title: "Distribution", desc: "Getting products into the right markets through local and regional distribution networks." },
  { code: "03", title: "Logistics", desc: "Coordinating freight, warehousing, consolidation, last-mile delivery and supply-chain services." },
  { code: "04", title: "Market Entry", desc: "Helping businesses establish commercial presence in new Caribbean territories." },
  { code: "05", title: "Commercial Representation", desc: "Providing local market support, sales development and partner relationships." },
  { code: "06", title: "Investment", desc: "Connecting investment capital with commercially viable Caribbean opportunities." },
];

const modelSteps = [
  { num: "01", title: "Source", desc: "Find products, suppliers and commercial opportunities." },
  { num: "02", title: "Move", desc: "Coordinate logistics, warehousing, freight and distribution." },
  { num: "03", title: "Sell", desc: "Connect products with distributors, retailers, businesses and consumers." },
  { num: "04", title: "Invest", desc: "Identify and facilitate investment into businesses, infrastructure and regional opportunities." },
];

const whyDfc = [
  { title: "One Regional Network", desc: "Access multiple Caribbean markets through one commercial relationship." },
  { title: "Local Market Knowledge", desc: "Regional partners who understand local commercial environments." },
  { title: "Integrated Logistics", desc: "Trade and logistics connected, not treated as separate activities." },
  { title: "Commercial Execution", desc: "DFC doesn't just provide information — it helps businesses execute." },
  { title: "Scalable", desc: "Start in one market and expand across the region on your timeline." },
  { title: "Investment Connected", desc: "Trade opportunities can become investment opportunities." },
];

const Home = () => (
  <>
    <Seo
      title="Pan-Caribbean Trade, Distribution & Investment Platform"
      description="Distribution Factory Caribbean connects suppliers, buyers, investors and logistics providers across 15 Caribbean markets — trade, distribution, logistics and investment through one regional platform."
    />
    <section className="bg-gradient-to-b from-navy to-navy-deep text-cream pt-20 sm:pt-24 overflow-hidden">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <p className="text-[14px] text-teal-light font-medium mb-4">
              Pan-Caribbean Trade &amp; Distribution Platform
            </p>
            <h1 className="font-serif text-[34px] sm:text-[46px] lg:text-[54px] max-w-[12.5ch] mb-5">
              Connecting Caribbean markets. Moving Caribbean business.
            </h1>
            <p className="text-[17.5px] text-cream/82 max-w-[46ch] mb-8">
              DFC links suppliers, buyers, investors and logistics providers across the region — so
              businesses can move from local opportunity to regional scale.
            </p>
            <div className="flex flex-wrap gap-3.5 mb-12">
              <Link to="/doing-business" className="btn btn-coral" data-testid="home-hero-cta-primary">
                Do Business with DFC
              </Link>
              <Link to="/network" className="btn btn-outline-light" data-testid="home-hero-cta-secondary">
                Explore Our Network
              </Link>
            </div>
          </div>
          <HeroRouteMap />
        </div>

        <div className="border-t border-white/10 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="font-serif text-[26px] text-teal-light block">15</span>
            <span className="text-[13px] text-cream/62">Core Caribbean markets</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-teal-light block">4</span>
            <span className="text-[13px] text-cream/62">Pillars: Source, Move, Sell, Invest</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-teal-light block">1</span>
            <span className="text-[13px] text-cream/62">Regional commercial relationship</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-teal-light block">3</span>
            <span className="text-[13px] text-cream/62">Ways to do business with DFC</span>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
        <div>
          <p className="text-[14px] font-semibold text-coral mb-3.5">Why a regional platform</p>
          <h2 className="font-serif text-[24px] sm:text-[32px] mb-5">
            The Caribbean is not 14 separate opportunities. It is one interconnected commercial region.
          </h2>
          <p className="text-ink-soft max-w-[42ch]">
            Businesses trying to move products, capital or services across the region usually solve
            the same problems over and over, market by market. DFC brings those functions together
            through a single regional relationship.
          </p>
        </div>
        <ul className="border-t border-parchment-line">
          {frictionPoints.map((point, i) => (
            <li
              key={point}
              className="flex justify-between py-3.5 border-b border-parchment-line text-[15px]"
            >
              <span>{point}</span>
              <span className="text-ink-soft text-[13px] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-parchment py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="What We Do"
          title="Six functions, one platform"
          lede="DFC connects the commercial functions that Caribbean trade actually depends on — rather than treating them as separate vendors."
        />
        <div className="border-t border-parchment-line">
          {functions.map((fn) => (
            <div
              key={fn.code}
              className="grid grid-cols-[50px_1fr] sm:grid-cols-[80px_200px_1fr] gap-2 sm:gap-7 items-baseline py-6 border-b border-parchment-line"
            >
              <span className="font-serif text-[14px] text-teal">{fn.code}</span>
              <h3 className="text-[19px] col-span-2 sm:col-span-1">{fn.title}</h3>
              <p className="text-[15px] text-ink-soft col-span-2 sm:col-span-1">{fn.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-navy text-cream py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          dark
          kicker="Our Business Model"
          title="A regional commercial platform"
          lede="DFC operates across four interconnected pillars — from finding a product to putting capital behind it."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">
          <div className="hidden lg:block absolute top-[38px] left-0 right-0 h-px bg-white/15" />
          {modelSteps.map((step) => (
            <div key={step.num} className="relative pt-20 pr-6">
              <div className="absolute top-0 left-0 w-[70px] h-[70px] rounded-full border border-white/25 flex items-center justify-center font-serif text-[14px] text-teal-light bg-navy">
                {step.num}
              </div>
              <h3 className="text-[20px] mb-2.5">{step.title}</h3>
              <p className="text-[14.5px] text-cream/70">{step.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/business-model" className="inline-block mt-12 text-teal-light text-[14.5px] font-semibold border-b border-teal-light/50 hover:border-teal-light">
          See the full business model &rarr;
        </Link>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead kicker="Why DFC" title="One relationship, a full region" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {whyDfc.map((item) => (
            <div key={item.title} className="border-t-2 border-teal pt-[18px]">
              <h3 className="text-[17px] mb-2">{item.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-parchment py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHead
            kicker="Our Products"
            title="Products moving through the DFC network"
            className="mb-0"
          />
          <Link to="/products" className="text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal shrink-0 mb-14">
            View the full catalogue &rarr;
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment-line border border-parchment-line">
          {productCategories.slice(0, 8).map((c) => (
            <Link key={c.slug} to="/products" className="bg-white p-6 hover:bg-parchment transition-colors">
              <h3 className="text-[15.5px] mb-1.5">{c.name}</h3>
              <p className="text-[13.5px] text-ink-soft">{c.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <SectionHead
            kicker="News & Insights"
            title="What's moving across the network"
            className="mb-0"
          />
          <Link to="/news" className="text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal shrink-0 mb-14">
            Read all news &amp; insights &rarr;
          </Link>
        </div>
        <ul className="border-t border-parchment-line">
          {newsItems.slice(0, 4).map((item) => (
            <li key={item.title} className="py-5 border-b border-parchment-line flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <p className="text-[12.5px] font-semibold text-teal mb-1.5">{item.category}</p>
                <h3 className="text-[16.5px] font-serif">{item.title}</h3>
              </div>
              <span className="text-[13px] text-ink-soft">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <CtaBand
      title="Explore the DFC Caribbean network"
      primary={{ label: "View Country Network", to: "/network" }}
      secondary={{ label: "Contact DFC", to: "/contact" }}
    />
  </>
);

export default Home;
