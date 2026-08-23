import React from "react";
import { Star } from "lucide-react";
import { testimonials, clutch } from "../mock";

const Stars = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="text-[#1fdd7a]" fill="#1fdd7a" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0e1b2a] px-6 md:px-12 lg:px-20 py-20 lg:py-28 text-white">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        {/* Left: Clutch summary */}
        <div>
          <span className="text-[13px] uppercase tracking-[0.2em] text-[#1fdd7a] font-medium">Testimonials</span>
          <h2 className="text-[32px] md:text-[40px] font-medium leading-tight mt-3">
            What clients say about working with us.
          </h2>
          <div className="mt-8 p-6 rounded-[10px] bg-white/[0.06] border border-white/10">
            <div className="flex items-center gap-3">
              <span className="text-[#1fdd7a] font-semibold text-lg">Clutch</span>
              <Stars />
            </div>
            <p className="text-sm text-white/70 mt-2">{clutch.rating} out of 5 on Clutch</p>
            <p className="text-sm text-white/60 mt-3 leading-relaxed">
              Clutch is a trusted independent platform that connects businesses with verified client reviews and ratings.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-6 text-center">
              <div>
                <p className="text-2xl font-semibold text-[#1fdd7a]">{clutch.reviews}</p>
                <p className="text-[11px] text-white/60 mt-1">Verified Reviews</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#1fdd7a]">{clutch.rating}</p>
                <p className="text-[11px] text-white/60 mt-1">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-[#1fdd7a]">{clutch.recommend}</p>
                <p className="text-[11px] text-white/60 mt-1">Clients Recommend</p>
              </div>
            </div>
            <a href="#reviews" className="inline-block mt-6 text-[13px] font-medium text-[#1fdd7a] hover:underline">
              Read all reviews →
            </a>
          </div>
        </div>

        {/* Right: testimonial cards */}
        <div className="lg:col-span-2 grid md:grid-cols-2 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-[10px] bg-white/[0.06] border border-white/10 hover:border-[#1fdd7a]/40 transition-colors flex flex-col">
              <Stars />
              <p className="text-[15px] text-white/85 leading-relaxed mt-4 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-6">
                <img src={t.avatar} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                <div>
                  <p className="text-[14px] font-medium">{t.name}</p>
                  <p className="text-[12px] text-white/55">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
