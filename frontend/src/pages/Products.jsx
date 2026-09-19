import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import { categories, products } from "../data/products";
import { categoryPhotos } from "../data/categoryPhotos";

const Products = () => (
  <>
    <Seo
      title="Caribbean Product Distribution — Browse the Catalogue"
      description="Browse products moving through the DFX network across the Caribbean — food & beverage, hospitality, construction, energy, technology and more, organized by category."
    />
    <PageHero
      eyebrow="Products"
      image="/photos/food-beverage.jpg"
      imageAlt="Fresh banana and coconut fruit stall"
      imagePosition="center"
      title="The DFX product catalogue"
      lede="Products moving through the DFX network today, organized by category. Each listing links to sourcing, distribution and quote requests."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {categories.map((c) => (
            <div key={c.slug} className="border border-parchment-line" data-testid={`category-${c.slug}`}>
              {categoryPhotos[c.slug] && (
                <div className="aspect-[16/9] overflow-hidden border-b border-parchment-line">
                  <img src={categoryPhotos[c.slug]} alt={c.name} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-[16.5px] mb-2">{c.name}</h3>
                <p className="text-[14px] text-ink-soft">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-parchment-line pt-14">
          <p className="label text-coral mb-3.5">Featured Listings</p>
          <h2 className="font-serif text-[24px] sm:text-[30px] mb-8">Products moving through the network now</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/products/${p.slug}`}
                className="border border-parchment-line hover:border-teal transition-colors"
                data-testid={`product-link-${p.slug}`}
              >
                <div className="aspect-[5/2] overflow-hidden border-b border-parchment-line bg-white">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="label text-teal mb-1.5">{p.category}</p>
                  <h3 className="font-serif text-[19px] mb-1.5">{p.name}</h3>
                  <p className="text-[13.5px] text-ink-soft mb-3">
                    {p.brand}{p.packSize ? ` · ${p.packSize}` : ""}
                  </p>
                  <span className="text-[13px] font-semibold text-coral">View product detail &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>

    <CtaBand
      title="Have a product to place across the region?"
      primary={{ label: "Sell Through DFX", to: "/business-model" }}
    />
  </>
);

export default Products;
