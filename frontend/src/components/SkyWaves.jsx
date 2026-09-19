import React from "react";

// Animated Caribbean sky + rolling waves, used as a full-bleed hero background.
// Pure SVG + CSS (keyframes in index.css), no images.

const WAVE =
  "M0 40 Q 180 0 360 40 T 720 40 T 1080 40 T 1440 40 T 1800 40 T 2160 40 T 2520 40 T 2880 40 V 80 H 0 Z";

const Layer = ({ className, height, fill, opacity = 1, bottom }) => (
  <div className={`absolute left-0 w-[200%] ${className}`} style={{ bottom }}>
    <svg viewBox="0 0 2880 80" preserveAspectRatio="none" className="block w-full" style={{ height }}>
      <path d={WAVE} fill={fill} fillOpacity={opacity} />
    </svg>
  </div>
);

const SkyWaves = ({ waves = true, fadeBottom = false }) => (
  <div
    className="absolute inset-0 overflow-hidden"
    style={{
      background: "linear-gradient(180deg, #0B2A5B 0%, #0A5BC0 55%, #4DA6FF 100%)",
      ...(fadeBottom && {
        WebkitMaskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, #000 88%, transparent 100%)",
      }),
    }}
    aria-hidden="true"
    data-testid="sky-waves"
  >
    <div className="absolute right-[8%] bottom-[60px] w-[320px] h-[320px] sm:w-[520px] sm:h-[520px] rounded-full bg-white/15 blur-3xl" />

    <div className="cloud absolute top-[14%] left-0 w-36 h-7 rounded-full bg-white/25 blur-md" style={{ animationDuration: "70s" }} />
    <div className="cloud absolute top-[38%] left-0 w-52 h-8 rounded-full bg-white/20 blur-md" style={{ animationDuration: "95s", animationDelay: "-40s" }} />
    <div className="cloud absolute top-[24%] left-0 w-28 h-6 rounded-full bg-white/20 blur-md" style={{ animationDuration: "120s", animationDelay: "-85s" }} />

    {waves && (
      <>
        <Layer className="wave-a" height="clamp(70px, 12vw, 130px)" fill="#fff" opacity={0.22} bottom="34px" />    
        <Layer className="wave-c" height="clamp(60px, 10vw, 110px)" fill="#fff" opacity={0.4} bottom="14px" />    
        <Layer className="wave-b" height="clamp(50px, 8vw, 90px)" fill="#fff" bottom="-10px" />
      </>
    )}
  </div>
);

export default SkyWaves;
