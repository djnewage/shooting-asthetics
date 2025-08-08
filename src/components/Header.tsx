import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 shadow-md py-4" : "bg-transparent py-6"
      }`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-light tracking-widest text-white">
            Shoot asthetics
          </span>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#services"
            className="text-white/80 hover:text-white transition-colors text-sm">
            Services
          </a>
          <a
            href="#about"
            className="text-white/80 hover:text-white transition-colors text-sm">
            About
          </a>
          <a
            href="#work"
            className="text-white/80 hover:text-white transition-colors text-sm">
            Work
          </a>
          <a
            href="#testimonials"
            className="text-white/80 hover:text-white transition-colors text-sm">
            Testimonials
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-white/30 text-white hover:bg-white/10 transition-colors text-sm">
            Contact Us
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 right-0 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <a
              href="#services"
              className="text-white/80 py-2"
              onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a
              href="#about"
              className="text-white/80 py-2"
              onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a
              href="#work"
              className="text-white/80 py-2"
              onClick={() => setIsMenuOpen(false)}>
              Work
            </a>
            <a
              href="#testimonials"
              className="text-white/80 py-2"
              onClick={() => setIsMenuOpen(false)}>
              Testimonials
            </a>
            <a
              href="#contact"
              className="px-5 py-2 border border-white/30 text-white inline-block"
              onClick={() => setIsMenuOpen(false)}>
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
