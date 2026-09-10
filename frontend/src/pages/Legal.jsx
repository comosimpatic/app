import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
import { findLegalDoc } from "../data/legal";

const Legal = () => {
  const { slug } = useParams();
  const doc = findLegalDoc(slug);
  if (!doc) return <Navigate to="/" replace />;

  return (
    <>
      <Seo title={doc.title} description={doc.intro} />
      <PageHero eyebrow="Legal" title={doc.title} lede={`Last updated ${doc.lastUpdated}`}>
        <BackLink
          to="/"
          label="Back"
          className="mt-6 inline-block text-[13.5px] text-teal font-medium"
        />
      </PageHero>

      <section className="py-16 sm:py-20">
        <div className="max-w-[68ch] mx-auto px-5 sm:px-8 space-y-8 text-[15.5px] text-ink-soft leading-relaxed">
          <p>{doc.intro}</p>
          {doc.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-serif text-[20px] text-ink mb-3">{s.heading}</h2>
              <div className="space-y-3">
                {s.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
          <p className="text-[13px] text-ink-soft/70 pt-6 border-t border-parchment-line">
            This document is a general template and does not constitute legal advice. It should be
            reviewed by qualified legal counsel before being relied on as a binding policy.{" "}
            <Link to="/contact" className="text-teal font-semibold">Contact DFC</Link> with any questions.
          </p>
        </div>
      </section>
    </>
  );
};

export default Legal;
