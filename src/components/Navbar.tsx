"use client";

import { useState } from "react";
import Link from "next/link";

interface NavbarProps {
  onOpenStudentModal: () => void;
  onOpenCompanyModal: () => void;
}

export default function Navbar({ onOpenStudentModal, onOpenCompanyModal }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-6xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-[#1a1a1a]" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>
              Nexus<span className="text-[#006C35]">AI</span>
            </span>
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
                className="px-4 py-2 text-sm font-medium text-[#4a4a4a]"
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
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`block w-6 h-0.5 bg-[#1a1a1a] ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1a1a1a] ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-[#1a1a1a] ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="py-4 border-t border-[#e5e5e5]">
              <div className="flex flex-col gap-1">
                {[
                  { href: "#how-it-works", label: "How it Works" },
                  { href: "#expertise", label: "Capabilities" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#journal", label: "Journal" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-[#4a4a4a] text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-[#e5e5e5]">
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
        )}
      </div>
    </nav>
  );
}
