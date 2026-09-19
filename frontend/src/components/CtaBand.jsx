import React from "react";
import { Link } from "react-router-dom";

const CtaBand = ({
  title = "Ready to do business with DFX?",
  primary = { label: "Do Business With DFX", to: "/business-model" },
  secondary = { label: "Contact DFX", to: "/contact" },
}) => (
  <section className="relative text-cream pt-14 pb-28 sm:pt-16 sm:pb-32">
    <div className="absolute inset-0 bg-coral" style={{ WebkitMaskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)", maskImage: "linear-gradient(to bottom, #000 68%, transparent 100%)" }} />
    <div className="relative max-w-wrap mx-auto px-5 sm:px-8 flex flex-wrap items-center justify-between gap-6">
      <h2 className="font-serif text-[24px] sm:text-[30px] max-w-[16ch] text-cream">{title}</h2>
      <div className="flex gap-3 flex-wrap">
        <Link to={primary.to} className="btn btn-outline-light">
          {primary.label}
        </Link>
        <Link to={secondary.to} className="btn bg-navy text-cream hover:bg-navy-deep">
          {secondary.label}
        </Link>
      </div>
    </div>
  </section>
);

export default CtaBand;
