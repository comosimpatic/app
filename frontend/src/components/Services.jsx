import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services, teamPhotos } from "../mock";

const ServiceRow = ({ s, index }) => {
  const reverse = index % 2 === 1;
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center py-12 border-t border-black/10">
      <div className={reverse ? "md:order-2" : ""}>
        <a
          href="#services"
          className="group inline-flex items-center gap-2 text-[26px] md:text-[32px] font-medium text-[#0e1b2a] hover:text-[#10c968] transition-colors"
        >
          {s.title}
          <ArrowUpRight size={26} className="text-[#1fdd7a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
        <p className="mt-4 text-[#4a5561] text-[15px] leading-relaxed max-w-[520px]">{s.desc}</p>
      </div>
      <div className={`fuse-card overflow-hidden rounded-[8px] ${reverse ? "md:order-1" : ""}`}>
        <img src={s.img} alt={s.title} loading="lazy" className="fuse-card-img w-full h-[260px] md:h-[320px] object-cover" />
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24">
      <div className="mb-4">
        <span className="text-[13px] uppercase tracking-[0.2em] text-[#1fdd7a] font-medium">
          What we do
        </span>
        <h2 className="text-[34px] md:text-[44px] font-medium leading-[1.05] text-[#0e1b2a] mt-2 max-w-[720px]">
          Specialized UX for data-heavy, high-stakes products.
        </h2>
      </div>

      <div>
        {services.map((s, i) => (
          <ServiceRow key={s.title} s={s} index={i} />
        ))}
      </div>

      {/* Team marquee */}
      <div className="mt-20 -mx-6 md:-mx-12 lg:-mx-20 overflow-hidden">
        <div className="flex w-max fuse-marquee gap-4 px-4">
          {[...teamPhotos, ...teamPhotos].map((src, i) => (
            <div key={i} className="w-[220px] h-[150px] rounded-[8px] overflow-hidden flex-shrink-0 bg-[#f4f5f6]">
              <img src={src} alt="Team" loading="lazy" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
