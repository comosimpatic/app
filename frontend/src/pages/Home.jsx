import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHead from "../components/SectionHead";
import Seo from "../components/Seo";
import HeroRouteMap from "../components/HeroRouteMap";

const whatWeDo = [
  { title: "Market Access", desc: "Enter and expand into Caribbean markets.", photo: "/photos/food-beverage.jpg" },
  { title: "Distribution", desc: "Build relationships with distributors, agents and buyers.", photo: "/photos/consumer-goods.jpg" },
  { title: "Logistics", desc: "Coordinate the movement of products across markets.", photo: "/photos/industrial.jpg" },
  { title: "Investment", desc: "Connect projects and opportunities with strategic partners and capital.", photo: "/photos/energy.jpg" },
];

const dfxAudiences = [
  { who: "For manufacturers", line: "Sell into the Caribbean." },
  { who: "For buyers", line: "Source products and suppliers." },
  { who: "For distributors", line: "Find new products and markets." },
  { who: "For investors", line: "Discover Caribbean opportunities." },
  { who: "For partners", line: "Build the network with us." },
];

const why = [
  { title: "Connect", desc: "Find the right people and opportunities." },
  { title: "Coordinate", desc: "Build the commercial and logistics pathway." },
  { title: "Grow", desc: "Develop repeat business across the region." },
];

const services = [
  { num: "01", title: "Market Entry", desc: "Helping manufacturers and brands establish a presence in Caribbean markets." },
  { num: "02", title: "Sales & Distribution", desc: "Developing distributors, agents, buyers and sales channels." },
  { num: "03", title: "Import, Export & Logistics", desc: "Coordinating the movement of products from supplier to market." },
  { num: "04", title: "Regional Business Development", desc: "Identifying new markets, customers, partners and commercial opportunities." },
  { num: "05", title: "Projects & Investment", desc: "Developing and connecting commercially viable Caribbean projects." },
];

const manufacturerHelp = [
  "Market identification",
  "Distributor recruitment",
  "Sales representation",
  "Product launches",
  "Logistics",
  "Regional expansion",
];

const marketGroups = [
  "Eastern Caribbean",
  "Barbados",
  "Trinidad & Tobago",
  "Jamaica",
  "Guyana",
  "CARICOM",
  "Wider Caribbean",
];

const partners = [
  "Manufacturers",
  "Distributors",
  "Importers",
  "Retailers",
  "Logistics providers",
  "Country representatives",
  "Investors",
  "Project owners",
];

const finalActions = [
  { title: "Sell", desc: "Bring your products to Caribbean markets." },
  { title: "Source", desc: "Find products and suppliers." },
  { title: "Distribute", desc: "Build your regional distribution business." },
  { title: "Move", desc: "Coordinate logistics and fulfilment." },
  { title: "Invest", desc: "Find and develop Caribbean opportunities." },
];

const Home = () => (
  <>
    <Seo
      title="Connecting the Caribbean to do more business"
      description="Distribution Factory Caribbean connects manufacturers, suppliers, businesses, logistics providers and investors with opportunities across Caribbean markets — trade, distribution, logistics, market access and investment."
    />

    {/* 1. Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/photos/hero-port.jpg"
          alt="Aerial view of Freeport Harbour, Bahamas, with cargo vessels and container cranes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/55 to-navy-deep/20" />
      </div>

      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="max-w-[54ch]">
          <h1 className="font-serif text-cream text-[42px] sm:text-[60px] lg:text-[76px] max-w-[15ch] mb-6 leading-[1.04]">
            Connecting the Caribbean to do more business.
          </h1>
          <p className="text-[17.5px] text-cream/85 max-w-[52ch] mb-6">
            Distribution Factory Caribbean connects manufacturers, suppliers, businesses, logistics
            providers and investors with opportunities across Caribbean markets.
          </p>
          <p className="label text-coral mb-9">
            Trade &bull; Distribution &bull; Logistics &bull; Market Access &bull; Investment
          </p>
          <div className="flex flex-wrap gap-3.5">
            <Link to="/business-model#doing-business" className="btn btn-coral" data-testid="home-hero-cta-primary">
              Work With Us
            </Link>
            <Link to="/dfx-caribbean" className="btn btn-outline-light" data-testid="home-hero-cta-secondary">
              Explore DFX Caribbean
            </Link>
          </div>
        </div>
      </div>
    </section>

    {/* What we do */}
    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="What we do"
          title="We connect business across the Caribbean."
          lede="Distribution Factory Caribbean helps companies bring products to market, establish distribution, coordinate logistics, develop new territories and identify commercial opportunities."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {whatWeDo.map((w) => (
            <div key={w.title} className="relative aspect-[3/4] overflow-hidden group">
              <img
                src={w.photo}
                alt=""
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/35 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <h3 className="label text-coral mb-2">
                  {w.title}
                </h3>
                <p className="text-[14px] sm:text-[15.5px] text-cream leading-snug">{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Link to="/services" className="btn btn-teal">View Our Services</Link>
      </div>
    </section>

    {/* 2. The big DFX section */}
    <section className="relative bg-navy-deep text-cream overflow-hidden">
      <span
        aria-hidden="true"
        className="absolute -right-8 -bottom-24 font-serif text-[300px] sm:text-[460px] leading-none text-white/[0.04] select-none pointer-events-none"
      >
        DFX
      </span>
      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <p className="label text-coral mb-6">
          A major project of Distribution Factory Caribbean
        </p>
        <h2 className="font-serif text-[46px] sm:text-[72px] leading-[1.04] mb-4">
          DFX <span className="text-teal-light">Caribbean</span>
        </h2>
        <p className="font-serif text-[22px] sm:text-[30px] text-cream/90 max-w-[26ch] mb-6">
          One Caribbean-wide approach to trade and investment.
        </p>
        <p className="text-[16.5px] text-cream/75 max-w-[60ch] mb-12">
          DFX Caribbean is our regional commercial platform, connecting manufacturers, suppliers,
          buyers, distributors, logistics providers and investors across Caribbean markets.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {dfxAudiences.map((a) => (
            <div key={a.who} className="border border-white/15 p-6">
              <p className="label text-teal-light mb-2.5">{a.who}</p>
              <p className="font-serif text-[19px] leading-snug">{a.line}</p>
            </div>
          ))}
        </div>
        <Link to="/dfx-caribbean" className="btn btn-coral" data-testid="home-dfx-cta">
          Enter DFX Caribbean <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>

    {/* 3. Why */}
    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Why Distribution Factory Caribbean"
          title="Regional reach. Local relationships. Commercial execution."
        />
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-start">
          <div className="space-y-4 text-ink-soft text-[16px] max-w-[52ch]">
            <p>
              The Caribbean is made up of individual markets, but many commercial opportunities
              extend beyond a single island.
            </p>
            <p>
              Distribution Factory Caribbean brings together the relationships, services and
              coordination required to help businesses operate across those markets.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-6">
            {why.map((w) => (
              <div key={w.title} className="border-t-2 border-teal pt-4">
                <h3 className="text-[18px] mb-1">{w.title}</h3>
                <p className="text-[14.5px] text-ink-soft">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* 4. Services */}
    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead kicker="Our Services" title="Five commercial service lines" />
        <div className="border-t border-parchment-line mb-10">
          {services.map((s) => (
            <div
              key={s.num}
              className="grid grid-cols-[52px_1fr] sm:grid-cols-[80px_320px_1fr] gap-x-4 gap-y-1 items-baseline py-6 border-b border-parchment-line"
            >
              <span className="font-serif text-[14px] text-teal">{s.num}</span>
              <h3 className="text-[18px] sm:text-[20px]">{s.title}</h3>
              <p className="text-[14.5px] sm:text-[15px] text-ink-soft col-span-2 sm:col-span-1">{s.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/services" className="btn btn-teal">Explore Services</Link>
      </div>
    </section>

    {/* 5. Manufacturers */}
    <section className="py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <p className="label text-coral mb-3.5">For Manufacturers</p>
          <h2 className="font-serif text-[32px] sm:text-[44px] leading-[1.1] mb-5">
            You make it. We help move it.
          </h2>
          <p className="text-ink-soft text-[16px] max-w-[46ch] mb-3">
            Looking to enter or expand across the Caribbean?
          </p>
          <p className="font-serif text-[20px] mb-8">Your products. Our Caribbean network.</p>
          <Link to="/business-model#doing-business" className="btn btn-coral" data-testid="home-manufacturers-cta">
            Sell Into The Caribbean <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        <div className="border border-parchment-line p-8 sm:p-10">
          <p className="label text-teal mb-5">
            Distribution Factory Caribbean can help with
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {manufacturerHelp.map((m) => (
              <li key={m} className="text-[15px] pl-5 relative">
                <span className="absolute left-0 text-teal">&bull;</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* 6. Markets */}
    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
        <div>
          <p className="label text-coral mb-3.5">Markets</p>
          <h2 className="font-serif text-[30px] sm:text-[40px] leading-[1.12] mb-6">
            One Caribbean network. Multiple markets.
          </h2>
          <ul className="flex flex-wrap gap-2.5 mb-7">
            {marketGroups.map((m) => (
              <li key={m} className="px-4 py-2 border border-parchment-line text-[14px] text-ink">
                {m}
              </li>
            ))}
          </ul>
          <p className="text-ink-soft text-[15.5px] max-w-[46ch] mb-8">
            Our model combines regional coordination with local market relationships.
          </p>
          <Link to="/network" className="btn btn-teal">Explore Our Markets</Link>
        </div>
        <HeroRouteMap />
      </div>
    </section>

    {/* 7. Partner network */}
    <section className="py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Partner Network"
          title="The network is the business."
          lede="We are building relationships with:"
        />
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-parchment-line border border-parchment-line mb-10">
          {partners.map((p) => (
            <li key={p} className="bg-white px-5 py-6 font-serif text-[18px]">{p}</li>
          ))}
        </ul>
        <p className="font-serif text-[22px] mb-6">Become part of the network.</p>
        <Link to="/business-model#doing-business" className="btn btn-coral" data-testid="home-partner-cta">
          Become a Partner <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </section>

    {/* 8. Final call to action */}
    <section className="relative pt-20 pb-44 sm:pt-28 sm:pb-56 overflow-hidden">
      <div className="absolute inset-0" style={{ WebkitMaskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)" }}>
        <img src="/photos/cta-coastline.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-navy-deep/80" />
      </div>
      <div className="relative max-w-wrap mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-serif text-cream text-[28px] sm:text-[42px] max-w-[22ch] mx-auto mb-10 leading-[1.15]">
          What do you want to do in the Caribbean?
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-10 text-left">
          {finalActions.map((a) => (
            <div key={a.title} className="border border-white/25 bg-white/5 p-5">
              <p className="label text-coral mb-2">{a.title}</p>
              <p className="text-[14px] text-cream/85 leading-snug">{a.desc}</p>
            </div>
          ))}
        </div>
        <Link to="/contact" className="btn btn-coral" data-testid="home-final-cta">
          Start a Conversation
        </Link>
      </div>
    </section>
  </>
);

export default Home;
