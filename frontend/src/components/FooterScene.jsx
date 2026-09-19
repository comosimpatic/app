import React from "react";

// Caribbean scene used behind the footer: sky that fades in from the page
// background, drifting clouds and rolling waves.
// Pure SVG + CSS (keyframes in index.css), no images.

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
const FooterScene = () => (
  <div className="absolute inset-0 select-none pointer-events-none" aria-hidden="true" data-testid="footer-scene">
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

    <WaveLayer className="wave-a" height="clamp(44px, 7vw, 80px)" opacity={0.1} bottom="24px" />
    <WaveLayer className="wave-b" height="clamp(38px, 6vw, 66px)" opacity={0.16} bottom="-8px" />
  </div>
);

export default FooterScene;
