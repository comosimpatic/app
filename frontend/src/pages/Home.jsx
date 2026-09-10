import React from "react";
import { Link } from "react-router-dom";
import {
  Handshake, Package, Ship, MapPinned, Users, TrendingUp,
} from "lucide-react";
import SectionHead from "../components/SectionHead";
import Seo from "../components/Seo";
import { categories as productCategories } from "../data/products";
import { categoryPhotos } from "../data/categoryPhotos";
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
  { code: "01", icon: Handshake, title: "Trade", desc: "Connecting buyers and sellers across Caribbean markets." },
  { code: "02", icon: Package, title: "Distribution", desc: "Getting products into the right markets through local and regional distribution networks." },
  { code: "03", icon: Ship, title: "Logistics", desc: "Coordinating freight, warehousing, consolidation, last-mile delivery and supply-chain services." },
  { code: "04", icon: MapPinned, title: "Market Entry", desc: "Helping businesses establish commercial presence in new Caribbean territories." },
  { code: "05", icon: Users, title: "Commercial Representation", desc: "Providing local market support, sales development and partner relationships." },
  { code: "06", icon: TrendingUp, title: "Investment", desc: "Connecting investment capital with commercially viable Caribbean opportunities." },
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
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/photos/hero-port.jpg"
          alt="Container ship and cargo at a Caribbean port"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-navy-deep/85 to-navy-deep/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 pt-20 sm:pt-28 pb-12">
        <div className="max-w-[36ch]">
          <p className="text-[14px] text-coral font-semibold mb-4 uppercase tracking-wide">
            Pan-Caribbean Trade &amp; Distribution Platform
          </p>
          <h1 className="font-serif text-cream text-[34px] sm:text-[46px] lg:text-[54px] max-w-[12.5ch] mb-5">
            Connecting Caribbean markets. Moving Caribbean business.
          </h1>
          <p className="text-[17.5px] text-cream/85 max-w-[46ch] mb-8">
            DFC links suppliers, buyers, investors and logistics providers across the region — so
            businesses can move from local opportunity to regional scale.
          </p>
          <div className="flex flex-wrap gap-3.5 mb-16">
            <Link to="/doing-business" className="btn btn-coral" data-testid="home-hero-cta-primary">
              Do Business with DFC
            </Link>
            <Link to="/network" className="btn btn-outline-light" data-testid="home-hero-cta-secondary">
              Explore Our Network
            </Link>
          </div>
        </div>

        <div className="relative border-t border-cream/20 py-7 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="font-serif text-[26px] text-coral block">15</span>
            <span className="text-[13px] text-cream/70">Core Caribbean markets</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-coral block">4</span>
            <span className="text-[13px] text-cream/70">Pillars: Source, Move, Sell, Invest</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-coral block">1</span>
            <span className="text-[13px] text-cream/70">Regional commercial relationship</span>
          </div>
          <div>
            <span className="font-serif text-[26px] text-coral block">3</span>
            <span className="text-[13px] text-cream/70">Ways to do business with DFC</span>
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

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="What We Do"
          title="Six functions, one platform"
          lede="DFC connects the commercial functions that Caribbean trade actually depends on — rather than treating them as separate vendors."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 border-t border-parchment-line pt-10">
          {functions.map((fn) => (
            <div key={fn.code}>
              <div className="w-11 h-11 rounded-full bg-teal/10 flex items-center justify-center mb-4">
                <fn.icon size={20} strokeWidth={1.75} className="text-teal" />
              </div>
              <h3 className="text-[17px] sm:text-[19px] mb-1.5">{fn.title}</h3>
              <p className="text-[14px] sm:text-[15px] text-ink-soft">{fn.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white text-ink py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Our Business Model"
          title="A regional commercial platform"
          lede="DFC operates across four interconnected pillars — from finding a product to putting capital behind it."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 relative">
          <div className="hidden lg:block absolute top-[38px] left-0 right-0 h-px bg-parchment-line" />
          {modelSteps.map((step) => (
            <div key={step.num} className="relative pt-20 pr-6">
              <div className="absolute top-0 left-0 w-[70px] h-[70px] rounded-full border border-parchment-line flex items-center justify-center font-serif text-[14px] text-teal bg-white">
                {step.num}
              </div>
              <h3 className="text-[20px] mb-2.5">{step.title}</h3>
              <p className="text-[14.5px] text-ink-soft">{step.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/business-model" className="inline-block mt-12 text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal">
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

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHead
            kicker="Our Products"
            title="Products moving through the DFC network"
          />
          <Link to="/products" className="text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal shrink-0">
            View the full catalogue &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {productCategories
            .filter((c) => categoryPhotos[c.slug])
            .map((c) => (
              <Link key={c.slug} to="/products" className="group">
                <div className="aspect-[4/3] overflow-hidden border border-parchment-line mb-3">
                  <img
                    src={categoryPhotos[c.slug]}
                    alt={c.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-[14.5px] font-medium group-hover:text-teal transition-colors">{c.name}</h3>
              </Link>
            ))}
        </div>
      </div>
    </section>

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <SectionHead
            kicker="News & Insights"
            title="What's moving across the network"
          />
          <Link to="/news" className="text-teal text-[14.5px] font-semibold border-b border-teal/50 hover:border-teal shrink-0">
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

    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/photos/cta-coastline.jpg"
          alt="Caribbean coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/70" />
      </div>
      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-serif text-cream text-[26px] sm:text-[36px] max-w-[22ch] mx-auto mb-8">
          Let's build a stronger Caribbean, together
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <Link to="/network" className="btn btn-coral" data-testid="home-cta-network">
            View Country Network
          </Link>
          <Link to="/contact" className="btn btn-outline-light" data-testid="home-cta-contact">
            Contact DFC
          </Link>
        </div>
      </div>
    </section>
  </>
);

export default Home;
