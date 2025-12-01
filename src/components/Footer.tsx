import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-white">
                Nexus<span className="text-[#10b981]">AI</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Bridging the gap between KSA&apos;s emerging talent and corporate needs through AI-augmented consulting missions.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  href: "#"
                },
                {
                  icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                  href: "#"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#10b981] hover:bg-white/20 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
              <a
                href="mailto:abderahmanenedjadi@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/70 hover:text-[#10b981] hover:bg-white/20 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="font-semibold text-white text-lg mb-6">Company</h5>
            <div className="flex flex-col gap-4">
              {[
                { href: "#how-it-works", label: "How it Works" },
                { href: "#pricing", label: "Pricing" },
                { href: "#", label: "About Us" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Talent Links */}
          <div>
            <h5 className="font-semibold text-white text-lg mb-6">Talent</h5>
            <div className="flex flex-col gap-4">
              {[
                { href: "#", label: "Join a Squad" },
                { href: "#", label: "Student Benefits" },
                { href: "#journal", label: "Journal" },
                { href: "#", label: "Success Stories" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div>
            <h5 className="font-semibold text-white text-lg mb-6">Get Started</h5>
            <p className="text-white/70 text-sm mb-6">
              Ready to transform your hiring pipeline or launch your career?
            </p>
            <a
              href="mailto:abderahmanenedjadi@gmail.com"
              className="btn-accent w-full justify-center text-sm"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            &copy; 2025 Nexus AI. All rights reserved.
          </p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
            </svg>
            Proudly contributing to the Digital Economy of Saudi Arabia
          </p>
        </div>
      </div>
    </footer>
  );
}
