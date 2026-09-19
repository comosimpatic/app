import React from "react";

// Caribbean scene used behind the footer: sky that fades in from the page
// background, swaying white coconut palms, drifting clouds and rolling waves.
// Pure SVG + CSS (keyframes in index.css), no images.

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

const WaveLayer = ({ className, height, opacity, bottom }) => (
  <div className={`absolute left-0 w-[200%] ${className}`} style={{ bottom }}>
    <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="block w-full" style={{ height }}>
      <path d={WAVE} fill="#fff" fillOpacity={opacity} />
    </svg>
  </div>
);

// Absolutely-positioned background: place inside a `relative overflow-hidden` parent.
const PalmScene = ({ palms = true }) => (
  <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true" data-testid="palm-scene">
    {/* sky: fades in from the page background so the scene blends in */}
    <div
      className="absolute inset-0"
      style={{
        background: "linear-gradient(180deg, #4DA6FF 0%, #0A5BC0 32%, #0B2A5B 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 30%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, #000 30%)",
      }}
    />

    <div className="absolute left-1/2 -translate-x-1/2 top-[30%] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-white/10 blur-3xl" />

    <div className="cloud absolute top-[34%] left-0 w-28 h-6 rounded-full bg-white/20 blur-md" style={{ animationDuration: "70s" }} />
    <div className="cloud absolute top-[52%] left-0 w-40 h-7 rounded-full bg-white/15 blur-md" style={{ animationDuration: "95s", animationDelay: "-40s" }} />

    {palms && (
      <>
      <Cluster sizeClass="h-[240px] sm:h-[340px] lg:h-[400px]" className="left-[-8%] sm:left-[2%] opacity-30" />
      <Cluster sizeClass="h-[240px] sm:h-[340px] lg:h-[400px]" className="right-[-8%] sm:right-[2%] -scale-x-100 opacity-30" />
      </>
    )}

    <WaveLayer className="wave-a" height="clamp(44px, 7vw, 80px)" opacity={0.1} bottom="24px" />
    <WaveLayer className="wave-b" height="clamp(38px, 6vw, 66px)" opacity={0.16} bottom="-8px" />
  </div>
);

export default PalmScene;
