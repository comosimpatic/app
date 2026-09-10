import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { categories, sampleProduct } from "../data/products";

const Products = () => (
  <>
    <Seo
      title="Caribbean Product Distribution — Browse the Catalogue"
      description="Browse products moving through the DFC network across the Caribbean — food & beverage, hospitality, construction, energy, technology and more, organized by category."
    />
    <PageHero
      eyebrow="Products"
      title="The DFC product catalogue"
      lede="Products moving through the DFC network today, organized by category. Each listing links to sourcing, distribution and quote requests."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-parchment-line border border-parchment-line mb-16">
          {categories.map((c) => (
            <div key={c.slug} className="bg-white p-7" data-testid={`category-${c.slug}`}>
              <h3 className="text-[16.5px] mb-2">{c.name}</h3>
              <p className="text-[14px] text-ink-soft">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-parchment-line pt-14">
          <p className="text-[14px] font-semibold text-coral mb-3.5">Product Detail Template</p>
          <h2 className="font-serif text-[24px] sm:text-[30px] mb-8">Sample listing</h2>
          <Link
            to={`/products/${sampleProduct.slug}`}
            className="grid sm:grid-cols-[220px_1fr] gap-8 border border-parchment-line p-7 hover:border-teal transition-colors"
            data-testid="sample-product-link"
          >
            <div className="aspect-square bg-parchment border border-parchment-line flex items-center justify-center">
              <span className="font-serif text-[13px] text-ink-soft text-center px-4">
                Product image placeholder
              </span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-teal mb-1.5">{sampleProduct.category}</p>
              <h3 className="font-serif text-[21px] mb-2">{sampleProduct.name}</h3>
              <p className="text-[14.5px] text-ink-soft mb-4">
                {sampleProduct.manufacturer} &middot; {sampleProduct.countryOfOrigin}
              </p>
              <span className="text-[13px] font-semibold text-coral">View product detail &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </section>

    <CtaBand
      title="Have a product to place across the region?"
      primary={{ label: "Sell Through DFC", to: "/doing-business" }}
    />
  </>
);

export default Products;
