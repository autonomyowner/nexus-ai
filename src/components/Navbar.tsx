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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-bold text-2xl text-[#003366]">
              Nexus<span className="text-[#10b981]">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {[
              { href: "#how-it-works", label: "How it Works" },
              { href: "#expertise", label: "Capabilities" },
              { href: "#pricing", label: "Pricing" },
              { href: "#journal", label: "Journal" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] font-medium text-[#334155] hover:text-[#003366] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenStudentModal}
              className="btn-secondary"
            >
              For Students
            </button>
            <button
              onClick={onOpenCompanyModal}
              className="btn-primary"
            >
              Hire a Team
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-[#334155] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#334155] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#334155] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 border-t border-[#e2e8f0]">
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
                  className="px-4 py-3 text-[#334155] hover:text-[#003366] hover:bg-[#f8fafc] rounded-xl transition-all"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#e2e8f0]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenStudentModal();
                  }}
                  className="btn-secondary w-full justify-center"
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
                  Hire a Team
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
