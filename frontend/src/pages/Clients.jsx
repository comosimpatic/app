import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";

const segments = [
  { title: "Manufacturers", need: "Enter and expand across Caribbean markets.", link: "/doing-business" },
  { title: "Importers & Distributors", need: "Find products and new supply relationships.", link: "/doing-business" },
  { title: "Retailers", need: "Access regional and international products.", link: "/products" },
  { title: "Hotels & Hospitality", need: "Source food, beverage, amenities and equipment.", link: "/products" },
  { title: "Government & Public Sector", need: "Support procurement and regional commercial initiatives.", link: "/trade-investment" },
  { title: "SMEs & Entrepreneurs", need: "Turn local products into regional businesses.", link: "/doing-business" },
  { title: "Investors", need: "Discover businesses and projects requiring capital.", link: "/trade-investment" },
  { title: "International Companies", need: "Use DFC as a gateway into Caribbean markets.", link: "/network" },
];

const Clients = () => (
  <>
    <PageHero
      eyebrow="Clients"
      title="Built for every side of Caribbean trade"
      lede="Whatever side of a transaction you sit on, DFC gives you one regional relationship instead of fourteen local ones."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-parchment-line border border-parchment-line">
          {segments.map((s) => (
            <Link
              key={s.title}
              to={s.link}
              className="bg-white p-7 hover:bg-parchment transition-colors group"
              data-testid={`client-segment-${s.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
            >
              <h3 className="text-[16.5px] mb-2 text-ink">{s.title}</h3>
              <p className="text-[14px] text-ink-soft mb-4">{s.need}</p>
              <span className="text-[13px] font-semibold text-teal group-hover:text-coral">
                Relevant service &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </>
);

export default Clients;
