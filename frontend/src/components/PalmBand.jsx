import React from "react";

// Decorative Caribbean band shown above the footer: swaying white coconut palms,
// drifting clouds and rolling waves. Pure SVG + CSS (see index.css), no images.

const LEAF = "M0 0 C 18 -26 60 -34 104 -6 C 66 -18 30 -14 0 0 Z";
const LEAF_ANGLES = [-84, -50, -16, 20, 52];

const Palm = ({ x, y, s = 1, flip = false, dur = 7, delay = 0 }) => (
  <g transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}>
    <g className="palm-sway" style={{ animationDuration: `${dur}s`, animationDelay: `-${delay}s` }}>
      <path d="M-5 0 C 0 -90 14 -180 27 -262 L 33 -262 C 22 -180 12 -90 9 0 Z" fill="#fff" fillOpacity="0.92" />
      <g transform="translate(30 -262)">
        <g className="palm-fronds" style={{ animationDuration: `${dur * 0.7}s`, animationDelay: `-${delay}s` }}>
          {[false, true].map((mirror) => (
            <g key={String(mirror)} transform={mirror ? "scale(-1 1)" : undefined}>
              {LEAF_ANGLES.map((a) => (
                <path
                  key={a}
                  d={LEAF}
                  transform={`rotate(${a}) scale(1.15)`}
                  fill="#fff"
                  fillOpacity="0.9"
                />
              ))}
            </g>
          ))}
          <circle cx="-4" cy="8" r="6" fill="#fff" fillOpacity="0.95" />
          <circle cx="7" cy="10" r="6" fill="#fff" fillOpacity="0.95" />
        </g>
      </g>
    </g>
  </g>
);

export const Cluster = ({ className = "", sizeClass = "h-[135px] sm:h-[215px] lg:h-[245px]" }) => (
  <svg
    viewBox="0 0 300 340"
    className={`absolute bottom-0 ${sizeClass} w-auto overflow-visible ${className}`}
    aria-hidden="true"
  >
    <Palm x={95} y={345} s={1.05} dur={7.5} delay={0} />
    <Palm x={215} y={345} s={0.7} flip dur={6} delay={2} />
  </svg>
);

const WAVE =
  "M0 40 Q 180 0 360 40 T 720 40 T 1080 40 T 1440 40 T 1800 40 T 2160 40 T 2520 40 T 2880 40 V 80 H 0 Z";

const PalmBand = () => {
  return (
  <section
    className="relative overflow-hidden h-[260px] sm:h-[380px] select-none"
    aria-hidden="true"
    data-testid="palm-band"
  >
    {/* sky: fades in from the page background so the band blends in */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, #0B2A5B 0%, #0A5BC0 55%, #4DA6FF 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 42%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, #000 42%)",
      }}
    />

    {/* sun glow */}
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[18px] w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] rounded-full bg-white/15 blur-2xl" />

    {/* drifting clouds */}
    <div className="cloud absolute top-[48%] left-0 w-28 h-6 rounded-full bg-white/25 blur-md" style={{ animationDuration: "70s" }} />
    <div className="cloud absolute top-[64%] left-0 w-40 h-7 rounded-full bg-white/20 blur-md" style={{ animationDuration: "95s", animationDelay: "-40s" }} />

    <p className="absolute top-[44%] inset-x-0 text-center px-6 font-serif text-white text-[19px] sm:text-[28px] leading-tight">
      Connecting the Caribbean to do more business.
    </p>

    <Cluster className="left-0 sm:left-[4%]" />
    <Cluster className="right-0 sm:right-[4%] -scale-x-100" />

    {/* waves: back layer translucent, front layer white to meet the footer */}
    <div className="absolute bottom-[10px] left-0 w-[200%] wave-a">
      <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="block w-full h-[44px] sm:h-[60px]">
        <path d={WAVE} fill="#fff" fillOpacity="0.35" />
      </svg>
    </div>
    <div className="absolute bottom-[-8px] left-0 w-[200%] wave-b">
      <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="block w-full h-[40px] sm:h-[54px]">
        <path d={WAVE} fill="#fff" />
      </svg>
    </div>
  </section>
  );
};

export default PalmBand;
