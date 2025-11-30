"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenStudentModal: () => void;
  onOpenCompanyModal: () => void;
}

export default function Navbar({ onOpenStudentModal, onOpenCompanyModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#0a0f1a]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Geometric Logo Mark */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4aa] to-[#00a88a] rounded-xl rotate-45 group-hover:rotate-[225deg] transition-transform duration-500" />
              <div className="absolute inset-[3px] bg-[#0a0f1a] rounded-lg rotate-45" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display font-bold text-[#00d4aa] text-lg">N</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Nexus<span className="text-[#00d4aa]">AI</span>
              </span>
              <span className="text-[10px] text-[#64748b] tracking-[0.2em] uppercase -mt-1">
                Saudi Workforce
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {[
              { href: "#how-it-works", label: "How it Works" },
              { href: "#expertise", label: "Capabilities" },
              { href: "#pricing", label: "Pricing" },
              { href: "#journal", label: "Journal" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-5 py-2 text-[15px] font-medium text-[#94a3b8] hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#00d4aa] to-[#00ffcc] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenStudentModal}
              className="px-5 py-2.5 text-[15px] font-semibold text-[#94a3b8] hover:text-[#00d4aa] border border-white/10 hover:border-[#00d4aa]/50 rounded-xl transition-all duration-300 hover:bg-[#00d4aa]/5"
            >
              For Students
            </button>
            <button
              onClick={onOpenCompanyModal}
              className="btn-primary group"
            >
              <span>Hire a Team</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-white/5">
            <div className="flex flex-col gap-2">
              {[
                { href: "#how-it-works", label: "How it Works" },
                { href: "#expertise", label: "Capabilities" },
                { href: "#pricing", label: "Pricing" },
                { href: "#journal", label: "Journal" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-[#94a3b8] hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenStudentModal();
                  }}
                  className="w-full py-3 text-[#94a3b8] border border-white/10 rounded-xl font-semibold hover:border-[#00d4aa]/50 transition-all"
                >
                  For Students
                </button>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenCompanyModal();
                  }}
                  className="btn-primary w-full justify-center"
                >
                  <span>Hire a Team</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
