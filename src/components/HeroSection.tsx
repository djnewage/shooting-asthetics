import React from "react";
import { ArrowRightIcon } from "lucide-react";
export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background video with overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.4)" }}
      >
        <source src="/videos/Screen print.MOV" type="video/mp4" />
        <source src="/videos/Screen print.MOV" type="video/mov" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-8">
            We get your customers to care about your story.
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-4 max-w-2xl">
            Brand films, weekly social, event recaps.
          </p>
          <p className="text-gray-400 text-base md:text-lg mb-12">
            (Milwaukee‑based. Passport ready.)
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a
              href="#contact"
              className="px-8 py-3 bg-white text-black hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              Get Started <ArrowRightIcon size={18} />
            </a>
            <a
              href="#work"
              className="px-8 py-3 border border-gray-500 text-white hover:border-white transition-colors">
              View Our Work
            </a>
          </div>
        </div>
      </div>
      {/* Optional: Brand name in top left, can be removed if redundant with Header component */}
      {/*
        <div className="absolute top-6 left-6 md:left-12">
          <span className="text-white text-xl tracking-widest">APEX</span>
        </div>
        <div className="absolute top-6 right-6 md:right-12">
          <a href="#contact" className="text-white text-sm flex items-center">
            Contact us <ArrowRightIcon size={14} className="ml-1" />
          </a>
        </div>
        */}
    </section>
  );
};
