import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
import { findProduct } from "../data/products";

const Field = ({ label, children }) => {
  if (!children || (Array.isArray(children) && children.length === 0)) return null;
  return (
    <div className="py-4 border-b border-parchment-line grid grid-cols-[130px_1fr] sm:grid-cols-[160px_1fr] gap-4">
      <span className="text-[13px] font-semibold text-ink-soft uppercase tracking-wide">{label}</span>
      <span className="text-[14.5px] text-ink">{children}</span>
    </div>
  );
};

const ProductDetail = () => {
  const { slug } = useParams();
  const p = findProduct(slug);
  if (!p) return <Navigate to="/products" replace />;

  return (
    <>
      <Seo
        title={`${p.name} — ${p.category}`}
        description={p.description}
      />
      <section className="py-14 sm:py-20">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <BackLink to="/products" label="Back to Products" className="text-[13.5px] font-semibold text-teal mb-8 inline-block" />
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
            <div className="bg-white border border-parchment-line p-4 flex items-center justify-center self-start w-full">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-auto object-contain"
              />
            </div>
            <div>
              <p className="label text-teal mb-2">{p.category}</p>
              <h1 className="font-serif text-[30px] sm:text-[36px] mb-2">{p.name}</h1>
              {p.tagline && <p className="text-ink-soft text-[15px] mb-4">{p.tagline}</p>}
              <p className="text-ink-soft text-[15.5px] mb-8 max-w-[56ch]">{p.description}</p>

              <div className="border-t border-parchment-line mb-8">
                <Field label="Brand">{p.brand}</Field>
                <Field label="Pack Size">{p.packSize}</Field>
                <Field label="Country of Origin">{p.countryOfOrigin}</Field>
                <Field label="Manufacturer">{p.manufacturer}</Field>
                {p.attributes?.length > 0 && (
                  <div className="py-4 border-b border-parchment-line">
                    <span className="text-[13px] font-semibold text-ink-soft uppercase tracking-wide block mb-2.5">
                      Product Attributes
                    </span>
                    <ul className="flex flex-wrap gap-2">
                      {p.attributes.map((a) => (
                        <li key={a} className="text-[13px] text-ink border border-parchment-line px-3 py-1.5 bg-white">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <Field label="Available Markets">{p.availableMarkets?.join(", ")}</Field>
                <Field label="MOQ">{p.moq}</Field>
                <Field label="Packaging">{p.packaging}</Field>
                <Field label="Certifications">{p.certifications?.join(", ")}</Field>
                <Field label="Shipping Options">{p.shippingOptions?.join(", ")}</Field>
                <Field label="Distributor Availability">{p.distributorAvailability}</Field>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn btn-coral" data-testid="product-request-quote">Request a Quote</Link>
                <Link to="/business-model" className="btn btn-teal">Become a Distributor</Link>
                <Link to="/business-model" className="btn btn-outline-dark">Request Distribution</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
