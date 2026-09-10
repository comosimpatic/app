import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import CtaBand from "../components/CtaBand";
import { blogPosts } from "../data/content";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post || !post.published) return <Navigate to="/blog" replace />;

  return (
    <>
      <section className="bg-gradient-to-b from-navy to-navy-deep text-cream pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <Link to="/blog" className="text-[13.5px] text-teal-light font-medium mb-4 inline-block">
            &larr; The Caribbean Business Exchange
          </Link>
          <h1 className="font-serif text-[30px] sm:text-[40px] max-w-[24ch]">{post.title}</h1>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="max-w-[68ch] mx-auto px-5 sm:px-8 space-y-6 text-[16px] text-ink-soft leading-relaxed">
          <p className="text-[18px] text-ink font-medium">{post.excerpt}</p>

          <p>
            Most brands that try to expand across the Caribbean make the same mistake: they treat
            regional expansion as fourteen separate market-entry projects, run in parallel or in
            sequence, each with its own distributor search, freight relationships and regulatory
            homework. The businesses that scale fastest do the opposite — they sequence deliberately,
            and they build the relationship once.
          </p>

          <h2 className="font-serif text-[22px] text-ink pt-4">Start with one anchor market, not five</h2>
          <p>
            The instinct to launch everywhere at once is understandable — the region looks small on a
            map — but it multiplies operational complexity for very little early return. A single
            well-chosen anchor market, ideally one with strong logistics connectivity to the rest of
            the region, gives you a proof point: a working distribution relationship, real sell-through
            data, and a template for the commercial terms you'll use elsewhere.
          </p>

          <h2 className="font-serif text-[22px] text-ink pt-4">Separate the freight problem from the distribution problem</h2>
          <p>
            Brands often conflate "getting the product there" with "getting the product sold." They're
            different problems with different partners. Freight, consolidation and customs coordination
            can be centralized early, even before every market has a distribution partner in place.
            Distribution — the retail relationships, the sales representation, the market-specific
            positioning — has to be built market by market, but it moves faster once the logistics
            backbone already exists.
          </p>

          <h2 className="font-serif text-[22px] text-ink pt-4">Let trade success surface investment opportunities</h2>
          <p>
            The most efficient regional operators treat trade and investment as connected, not
            separate tracks. A distribution relationship that proves out in one market is also the
            strongest evidence for an investment case in adjacent markets — infrastructure, local
            manufacturing, or a joint venture with a regional partner. Sequencing trade first gives
            you the operating data an investment case actually needs.
          </p>

          <h2 className="font-serif text-[22px] text-ink pt-4">The one-relationship model</h2>
          <p>
            This is the thesis DFC is built on: rather than a brand rebuilding sourcing, freight,
            customs and distributor relationships in every market it enters, one regional relationship
            can carry all of it — sourcing, movement, sales and, eventually, investment — across the
            full network. It doesn't remove the need for market-specific work. It removes the need to
            rebuild the infrastructure underneath it every time.
          </p>
        </div>
      </article>

      <CtaBand title="Ready to plan your regional expansion?" primary={{ label: "Doing Business with DFC", to: "/doing-business" }} />
    </>
  );
};

export default BlogPost;
