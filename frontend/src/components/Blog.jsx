import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import { blogPosts, faqs } from "../mock";

const BlogCard = ({ post }) => (
  <a href="#article" className="fuse-card group block">
    <div className="overflow-hidden rounded-[8px] aspect-[16/10]">
      <img src={post.img} alt={post.title} loading="lazy" className="fuse-card-img w-full h-full object-cover" />
    </div>
    <h3 className="mt-4 text-[16px] font-medium text-[#0e1b2a] leading-snug group-hover:text-[#10c968] transition-colors flex items-start gap-1">
      {post.title}
      <ArrowUpRight size={16} className="text-[#1fdd7a] flex-shrink-0 mt-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
    </h3>
  </a>
);

const FaqItem = ({ f, open, onToggle }) => (
  <div className="border-b border-black/10">
    <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 py-5 text-left group">
      <span className="text-[17px] md:text-[19px] font-medium text-[#0e1b2a] group-hover:text-[#10c968] transition-colors">
        {f.q}
      </span>
      <span className="text-[#1fdd7a] flex-shrink-0">
        {open ? <Minus size={20} /> : <Plus size={20} />}
      </span>
    </button>
    <div
      className="overflow-hidden transition-all duration-300 ease-out"
      style={{ maxHeight: open ? "320px" : "0px" }}
    >
      <p className="pb-6 text-[15px] text-[#4a5561] leading-relaxed max-w-[820px]">{f.a}</p>
    </div>
  </div>
);

export default function Blog() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Blog */}
      <section id="latest" className="bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#1fdd7a] font-medium">Latest</span>
            <h2 className="text-[32px] md:text-[42px] font-medium text-[#0e1b2a] mt-2">From the blog</h2>
          </div>
          <a href="#blog" className="fuse-link-underline text-[15px] font-medium text-[#0e1b2a]">
            View all articles
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((p) => (
            <BlogCard key={p.title} post={p} />
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-[#f4f5f6] px-6 md:px-12 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-3 gap-10">
          <div>
            <span className="text-[13px] uppercase tracking-[0.2em] text-[#1fdd7a] font-medium">FAQ</span>
            <h2 className="text-[32px] md:text-[42px] font-medium text-[#0e1b2a] mt-2 leading-tight">
              Frequently asked questions
            </h2>
          </div>
          <div className="lg:col-span-2">
            {faqs.map((f, i) => (
              <FaqItem key={i} f={f} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
