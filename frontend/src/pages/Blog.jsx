import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { blogPosts } from "../data/content";

const Blog = () => (
  <>
    <PageHero
      eyebrow="Blog"
      title="The Caribbean Business Exchange"
      lede="Practical writing on regional expansion, distribution and doing business across the Caribbean."
    />

    <section className="py-16 sm:py-24">
      <div className="max-w-wrap mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 gap-px bg-parchment-line border border-parchment-line">
          {blogPosts.map((post) =>
            post.published ? (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="bg-white p-7 hover:bg-parchment transition-colors"
                data-testid={`blog-post-${post.slug}`}
              >
                <h3 className="font-serif text-[19px] mb-2">{post.title}</h3>
                <p className="text-[14px] text-ink-soft mb-4">{post.excerpt}</p>
                <span className="text-[13px] font-semibold text-coral">Read the article &rarr;</span>
              </Link>
            ) : (
              <div key={post.slug} className="bg-white p-7 opacity-60">
                <h3 className="font-serif text-[19px] mb-2">{post.title}</h3>
                <span className="text-[12px] font-semibold text-ink-soft uppercase tracking-wide">Coming soon</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  </>
);

export default Blog;
