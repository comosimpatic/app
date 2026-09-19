import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/PageHero";
import SectionHead from "../components/SectionHead";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { servicesDetail } from "../data/servicesDetail";

const services = [
  { num: "01", title: "Market Entry", desc: "Helping manufacturers and brands establish a presence in Caribbean markets." },
  { num: "02", title: "Sales & Distribution", desc: "Developing distributors, agents, buyers and sales channels." },
  { num: "03", title: "Import, Export & Logistics", desc: "Coordinating the movement of products from supplier to market." },
  { num: "04", title: "Regional Business Development", desc: "Identifying new markets, customers, partners and commercial opportunities." },
  {
    num: "05",
    title: "Projects & Investment",
    desc: "Developing and connecting commercially viable Caribbean projects.",
    link: { to: "/investment", label: "See current investment projects" },
  },
];

const Flow = ({ steps }) => (
  <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
    {steps.map((s, i) => (
      <React.Fragment key={s + i}>
        <span className={`px-4 py-2.5 border text-[14px] font-bold ${i === 1 ? "bg-navy-deep text-cream border-navy-deep" : "border-ink text-ink"}`}>
          {s}
        </span>
        {i < steps.length - 1 && <ArrowRight size={16} className="text-teal shrink-0" />}
      </React.Fragment>
    ))}
  </div>
);

const Services = () => (
  <>
    <Seo
      title="Our Services — Distribution, Sales Representation, Logistics & Investment"
      description="Distribution Factory Caribbean's services for manufacturers and Caribbean buyers: distributor development, regional sales representation, import/export coordination, regional distribution, product launch, private label, procurement, hospitality supply, institutional markets and market intelligence."
    />
    <PageHero
      eyebrow="Our Services"
      title="Five commercial service lines"
      lede="Everything Distribution Factory Caribbean does, organized around how businesses actually move: get in, sell, move product, grow, and invest."
    />

    <section className="py-16 sm:py-20">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="border-t-2 border-ink">
          {services.map((s) => (
            <div
              key={s.num}
              className="grid grid-cols-[52px_1fr] sm:grid-cols-[90px_360px_1fr] gap-x-4 gap-y-1 items-baseline py-6 border-b border-parchment-line"
              data-testid={`service-${s.num}`}
            >
              <span className="text-[15px] font-bold text-teal">{s.num}</span>
              <h2 className="text-[22px] sm:text-[26px] text-ink">{s.title}</h2>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-[16px] text-ink font-medium">{s.desc}</p>
                {s.link && (
                  <Link to={s.link.to} className="inline-block mt-3 text-teal text-[14.5px] font-bold border-b-2 border-teal/40 hover:border-teal">
                    {s.link.label} &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-16 sm:py-24 border-t border-parchment-line">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <SectionHead
          kicker="Detailed services breakdown"
          title="What we do for manufacturers and Caribbean buyers"
          lede="Ten ways Distribution Factory Caribbean turns a product into a Caribbean business."
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2 mb-16 border-t-2 border-ink pt-6">
          {servicesDetail.map((d) => (
            <li key={d.num}>
              <a href={`#service-${d.num}`} className="flex gap-3 py-1.5 text-[15px] font-bold text-ink hover:text-teal transition-colors">
                <span className="text-teal w-6 shrink-0">{d.num}</span>
                {d.title}
              </a>
            </li>
          ))}
        </ul>

        <div>
          {servicesDetail.map((d) => (
            <article
              key={d.num}
              id={`service-${d.num}`}
              className="grid lg:grid-cols-[0.8fr_1.2fr] gap-x-16 gap-y-6 py-14 border-t-2 border-ink scroll-mt-24"
              data-testid={`service-detail-${d.num}`}
            >
              <header>
                <p className="text-[15px] font-bold text-teal mb-3">{d.num}</p>
                <h3 className="text-[28px] sm:text-[36px] leading-[1.08] text-ink mb-4">{d.title}</h3>
                {d.tagline && <p className="text-[19px] sm:text-[21px] font-bold text-ink leading-snug">{d.tagline}</p>}
              </header>

              <div className="space-y-5 text-[16.5px] text-ink">
                {d.intro?.map((p) => <p key={p}>{p}</p>)}
                {d.quote && (
                  <blockquote className="border-l-4 border-coral pl-5 text-[20px] font-bold text-ink leading-snug">
                    {d.quote}
                  </blockquote>
                )}
                {d.intro2?.map((p) => <p key={p}>{p}</p>)}
                {d.flows && (
                  <div className="space-y-3 py-1">
                    {d.flows.map((f, i) => (
                      <React.Fragment key={i}>
                        {i > 0 && <p className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-soft">or</p>}
                        <Flow steps={f} />
                      </React.Fragment>
                    ))}
                  </div>
                )}
                {d.bullets && (
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5 py-1">
                    {d.bullets.map((b) => (
                      <li key={b} className="pl-5 relative font-semibold">
                        <span className="absolute left-0 text-coral">&bull;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
                {d.after?.map((p) => <p key={p}>{p}</p>)}
                {d.closing && (
                  <p className="text-[19px] sm:text-[21px] font-bold text-ink leading-snug border-t border-parchment-line pt-5">
                    {d.closing}
                  </p>
                )}
              </div>
            </article>
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
