import React from "react";
import { ArrowRightIcon } from "lucide-react";
export const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(0.4)",
        }}></div>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-2">
            Unleashing potential.
          </h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            Creating impact.
          </h1>
          <p className="text-gray-300 text-sm md:text-base mb-12 max-w-xl">
            We help brands dominate the digital world
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
