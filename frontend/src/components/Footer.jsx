import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import { footer } from "../mock";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0e1b2a] text-white px-6 md:px-12 lg:px-20 pt-20 pb-10">
      <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-16">
        {/* Brand + CTA */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <span className="relative inline-block w-7 h-7">
              <span className="absolute inset-0 rounded-full bg-white" />
              <span className="absolute right-0 top-0 w-3.5 h-3.5 rounded-full bg-[#1fdd7a] border-2 border-[#0e1b2a]" />
            </span>
            <span className="font-bold text-[22px]">fuselab <span className="font-light">creative</span></span>
          </div>
          <p className="text-[28px] md:text-[34px] font-medium leading-tight max-w-[420px]">
            Let's build your next data product.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 mt-6 rounded-full bg-[#1fdd7a] hover:bg-[#10c968] text-[#05261a] font-medium text-[15px] px-6 py-3 transition-colors"
          >
            Book a discovery call <ArrowUpRight size={18} />
          </a>

          <div className="mt-10 space-y-3 text-[14px] text-white/70">
            <p className="flex items-center gap-2"><MapPin size={16} className="text-[#1fdd7a]" /> {footer.address}</p>
            <p className="flex items-center gap-2"><Mail size={16} className="text-[#1fdd7a]" /> {footer.email}</p>
            <p className="flex items-center gap-2"><Phone size={16} className="text-[#1fdd7a]" /> {footer.phone}</p>
          </div>
        </div>

        {/* Link columns */}
        {footer.columns.map((col) => (
          <div key={col.title}>
            <h4 className="text-[13px] uppercase tracking-[0.15em] text-white/50 mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a href={`#${l}`} className="text-[14.5px] text-white/80 hover:text-[#1fdd7a] transition-colors">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[13px] text-white/50">
        <p>© {new Date().getFullYear()} Fuselab Creative. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-white/80 transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white/80 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
