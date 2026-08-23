import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { hero } from "../mock";

const VideoModal = ({ onClose }) => (
  <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 fuse-reveal">
    <div className="absolute inset-0 bg-black/80" onClick={onClose} />
    <div className="relative w-full max-w-4xl aspect-video">
      <button
        onClick={onClose}
        className="absolute -top-11 right-0 text-white hover:opacity-70 transition-opacity flex items-center gap-1 text-sm"
      >
        Close <X size={20} />
      </button>
      <iframe
        className="w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${hero.videoId}?autoplay=1`}
        title="Fuselab Creative"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="top" className="relative fuse-hero-bg min-h-screen">
      <div className="fuse-guides absolute inset-0 pointer-events-none" />
      <div className="relative px-6 md:px-12 lg:px-20 pt-28 lg:pt-40 pb-14 min-h-screen flex flex-col justify-between">
        <div className="max-w-[640px] fuse-reveal">
          <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.08] font-normal text-[#0e1b2a] tracking-tight">
            {hero.title}
            <br />
            <span>{hero.subtitle}</span>
          </h1>
        </div>

        <div className="flex flex-wrap items-end gap-5 mt-16">
          <a
            href="#contact"
            className="w-[200px] rounded-[10px] bg-[#1fdd7a] hover:bg-[#10c968] transition-colors p-5"
          >
            <p className="text-[15px] leading-tight text-[#05261a]">
              Book
              <br />
              <span className="font-medium">a discovery call</span>
            </p>
            <div className="mt-6 w-9 h-9 rounded-full bg-[#05261a] flex items-center justify-center">
              <Play size={15} className="text-[#1fdd7a] ml-0.5" fill="currentColor" />
            </div>
          </a>

          <button
            onClick={() => setShowVideo(true)}
            className="fuse-card relative w-[360px] max-w-full h-[130px] rounded-[10px] overflow-hidden group"
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60"
              alt="Team at work"
              className="fuse-card-img w-full h-full object-cover"
            />
            <span className="absolute inset-0 bg-black/10" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play size={20} className="text-[#0e1b2a] ml-1" fill="currentColor" />
              </span>
            </span>
          </button>
        </div>
      </div>

      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </section>
  );
}
