import React from "react";

// Custom nautical-chart illustration — dotted trade routes connecting
// island nodes. Purely illustrative, not a literal geographic map.
const HeroRouteMap = () => (
  <div className="relative pb-3">
    <svg
      viewBox="0 0 460 380"
      width="100%"
      role="img"
      aria-label="Route map connecting Caribbean trade markets"
    >
      <defs>
        <style>{`.port-label{font-family:'IBM Plex Sans',sans-serif; font-size:11px; fill:rgba(251,249,244,0.65);}`}</style>
      </defs>

      {/* faint chart grid */}
      <g opacity="0.08" stroke="#FBF9F4">
        {[0, 76, 152, 228, 304, 380].map((y) => (
          <line key={`h-${y}`} x1="0" y1={y} x2="460" y2={y} strokeWidth="1" />
        ))}
        {[0, 92, 184, 276, 368, 460].map((x) => (
          <line key={`v-${x}`} x1={x} y1="0" x2={x} y2="380" strokeWidth="1" />
        ))}
      </g>

      {/* route lines */}
      <path className="route-path" d="M40,300 C90,260 120,220 150,190 C180,160 210,140 230,120" stroke="#4C948F" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path className="route-path" style={{ animationDelay: ".3s" }} d="M230,120 C260,150 280,180 300,200 C330,225 360,235 400,250" stroke="#4C948F" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path className="route-path" style={{ animationDelay: ".6s" }} d="M150,190 C160,230 165,270 180,300 C195,325 210,335 235,340" stroke="#4C948F" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <path className="route-path" style={{ animationDelay: ".9s" }} d="M230,120 C220,90 215,65 220,40" stroke="#4C948F" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.6" />
      <path className="route-path" style={{ animationDelay: ".5s" }} d="M300,200 C320,175 335,150 345,120" stroke="#4C948F" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />

      {/* nodes */}
      <g className="route-dot" style={{ animationDelay: ".2s" }}>
        <circle cx="40" cy="300" r="5" fill="#D9643A" />
        <text className="port-label" x="50" y="304">Miami</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "1s" }}>
        <circle cx="150" cy="190" r="4" fill="#F1E9D8" />
        <text className="port-label" x="158" y="188">Jamaica</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "1.2s" }}>
        <circle cx="230" cy="120" r="4" fill="#F1E9D8" />
        <text className="port-label" x="238" y="118">Puerto Rico</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "1.4s" }}>
        <circle cx="220" cy="40" r="4" fill="#F1E9D8" />
        <text className="port-label" x="228" y="38">Bahamas</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "1.6s" }}>
        <circle cx="345" cy="120" r="4" fill="#F1E9D8" />
        <text className="port-label" x="322" y="105">Antigua</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "1.8s" }}>
        <circle cx="300" cy="200" r="4" fill="#F1E9D8" />
        <text className="port-label" x="308" y="198">Barbados</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "2s" }}>
        <circle cx="400" cy="250" r="4" fill="#F1E9D8" />
        <text className="port-label" x="352" y="266">Trinidad &amp; Tobago</text>
      </g>
      <g className="route-dot" style={{ animationDelay: "2.2s" }}>
        <circle cx="235" cy="340" r="4" fill="#F1E9D8" />
        <text className="port-label" x="243" y="345">Guyana</text>
      </g>
    </svg>
    <p className="text-[12.5px] text-cream/45 mt-2.5">
      Illustrative trade route network — 15 core Caribbean markets at launch
    </p>
  </div>
);

export default HeroRouteMap;
