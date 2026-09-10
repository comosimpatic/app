import React from "react";
import { useParams, Navigate } from "react-router-dom";
import CtaBand from "../components/CtaBand";
import Seo from "../components/Seo";
import BackLink from "../components/BackLink";
import { blogPosts } from "../data/content";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post || !post.published) return <Navigate to="/blog" replace />;

  return (
    <>
      <Seo title={post.title} description={post.excerpt} />

      <section className="bg-gradient-to-b from-navy to-navy-deep text-cream pt-16 pb-14 sm:pt-20 sm:pb-16">
        <div className="max-w-wrap mx-auto px-5 sm:px-8">
          <BackLink to="/blog" label="The Caribbean Business Exchange" className="text-[13.5px] text-teal-light font-medium mb-4 inline-block" />
          <h1 className="font-serif text-[30px] sm:text-[40px] max-w-[24ch]">{post.title}</h1>
        </div>
      </section>

      <article className="py-16 sm:py-20">
        <div className="max-w-[68ch] mx-auto px-5 sm:px-8 space-y-6 text-[16px] text-ink-soft leading-relaxed">
          <p className="text-[18px] text-ink font-medium">{post.excerpt}</p>

          {post.body.map((block, i) =>
            block.h2 ? (
              <h2 key={i} className="font-serif text-[22px] text-ink pt-4">
                {block.h2}
              </h2>
            ) : (
              <p key={i}>{block.p}</p>
            )
          )}
        </div>
      </article>

      <CtaBand title="Ready to plan your regional expansion?" primary={{ label: "Doing Business with DFC", to: "/doing-business" }} />
    </>
  );
};

export default BlogPost;
