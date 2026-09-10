import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import { newsCategories, newsItems } from "../data/content";

const News = () => {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <>
      <Seo
        title="News & Insights — Caribbean Trade, Logistics & Investment"
        description="Company news and Caribbean trade insight from across the DFC network — trade, logistics, investment, market expansion and new products."
      />
      <PageHero
        eyebrow="News & Insights"
        title="Company news and Caribbean trade insight"
        lede="Updates from across the DFC network, plus analysis on trade, logistics, investment and market expansion."
      />

      <section className="py-16 sm:py-24">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {["All", ...newsCategories].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-[13px] font-medium border transition-colors ${
                  filter === cat
                    ? "bg-navy text-cream border-navy"
                    : "border-parchment-line text-ink-soft hover:border-teal hover:text-teal"
                }`}
                data-testid={`news-filter-${cat.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ul className="border-t border-parchment-line">
            {visible.map((item) => (
              <li key={item.title} className="py-6 border-b border-parchment-line flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <p className="text-[12.5px] font-semibold text-teal mb-1.5">{item.category}</p>
                  <h3 className="text-[18px] font-serif">{item.title}</h3>
                </div>
                <span className="text-[13px] text-ink-soft">{item.date}</span>
              </li>
            ))}
          </ul>

          <p className="text-[14px] text-ink-soft mt-10">
            Looking for longer-form articles? Visit{" "}
            <Link to="/blog" className="text-teal font-semibold">The Caribbean Business Exchange</Link>.
          </p>
        </div>
      </section>
    </>
  );
};

export default News;
