"use client";

import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentModal from "@/components/StudentModal";
import CompanyModal from "@/components/CompanyModal";
import ArticleModal from "@/components/ArticleModal";

export default function Home() {
  const [isStudentModalOpen, setIsStudentModalOpen] = useState(false);
  const [isCompanyModalOpen, setIsCompanyModalOpen] = useState(false);
  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState<"company" | "student">("company");

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <Navbar
        onOpenStudentModal={() => setIsStudentModalOpen(true)}
        onOpenCompanyModal={() => setIsCompanyModalOpen(true)}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="animate-fadeInLeft">
              {/* Badge */}
              <div className="badge-vision mb-8">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
                Aligned with Saudi Vision 2030
              </div>

              <h1 className="heading-xl mb-6">
                De-Risking Hiring.
                <br />
                <span className="hero-highlight">Accelerating Innovation.</span>
              </h1>

              <p className="body-lg max-w-xl mb-10">
                Nexus is the operating system for the next generation of Saudi talent.
                We connect companies with vetted, AI-augmented student teams for structured
                8-week consulting missions.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => setIsCompanyModalOpen(true)}
                  className="btn-primary"
                >
                  Start a Mission
                </button>
                <a href="#how-it-works" className="btn-secondary">
                  How it works
                </a>
              </div>

              {/* Animated Stats */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#10b981]">
                    <CountUp end={500} duration={2000} suffix="+" />
                  </div>
                  <p className="text-[#64748b] text-sm mt-1">Students</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#003366]">
                    <CountUp end={50} duration={2000} suffix="+" />
                  </div>
                  <p className="text-[#64748b] text-sm mt-1">Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#10b981]">
                    <CountUp end={100} duration={2000} suffix="+" />
                  </div>
                  <p className="text-[#64748b] text-sm mt-1">Missions</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-8 border-t border-[#e2e8f0]">
                <p className="text-[#64748b] text-sm mb-3 tracking-wider uppercase">Trusted by</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2 bg-white rounded-xl border border-[#e2e8f0] shadow-sm">
                    <div className="w-8 h-8 bg-[#10b981]/10 rounded-lg flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#10b981]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#0f172a] text-sm font-semibold">RWAS Award</p>
                      <p className="text-[#64748b] text-xs">Top 2nd - Saudi Entrepreneurship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div className="animate-fadeInRight delay-200">
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="feature-card p-8 relative overflow-hidden shadow-xl">
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-[#10b981] rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="font-semibold text-[#0f172a] text-lg">Mission Status</h6>
                        <p className="text-[#10b981] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse" />
                          On Track - AI Augmented
                        </p>
                      </div>
                    </div>

                    {/* Progress Items */}
                    <div className="space-y-5">
                      <ProgressBar label="Market Analysis" percentage={100} color="#10b981" />
                      <ProgressBar label="Data Cleaning (AI Assist)" percentage={85} color="#003366" />
                      <ProgressBar label="Report Generation" percentage={45} color="#64748b" />
                    </div>

                    {/* Squad Info */}
                    <div className="mt-6 pt-6 border-t border-[#e2e8f0] flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 rounded-full bg-[#e2e8f0] border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-[#64748b]">S{i}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-[#64748b]">Squad Alpha - Week 6 of 8</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          VALUE PROPOSITION SECTION
          ============================================ */}
      <section id="how-it-works" className="py-24 relative section-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Segment Switcher */}
            <div className="segment-switcher mb-12">
              <button
                onClick={() => setActiveSegment("company")}
                className={`segment-btn ${activeSegment === "company" ? "active" : ""}`}
              >
                For Companies
              </button>
              <button
                onClick={() => setActiveSegment("student")}
                className={`segment-btn ${activeSegment === "student" ? "active" : ""}`}
              >
                For Students
              </button>
            </div>

            <h2 className="heading-lg mb-4">
              {activeSegment === "company"
                ? "Why Companies Choose Nexus"
                : "Why Students Join Nexus"}
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              {activeSegment === "company"
                ? "Traditional consulting is too slow and expensive. Hiring fresh grads is a gamble. Nexus bridges the gap."
                : "Don't get stuck in the experience paradox. Work on real projects, master AI tools, and get hired."}
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeSegment === "company" ? (
              <>
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="AI-Augmented Output"
                  description="Teams equipped with enterprise AI tools to clean data, synthesize reports, and code faster than traditional juniors."
                />
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  }
                  title="De-Risked Hiring"
                  description='Watch a team perform on a real project for 8 weeks before making a full-time offer. "Try before you buy."'
                />
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  }
                  title="Cost-Effective"
                  description="Get high-quality outputs at ~1/10th the cost of traditional consulting firms."
                />
              </>
            ) : (
              <>
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  }
                  title="Real Experience"
                  description='Work on live "Backlog Challenges" for top Saudi companies and build a real portfolio.'
                />
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  }
                  title="Career Fast-Track"
                  description="Top performers get fast-tracked for hiring interviews. Free for students."
                />
                <FeatureCard
                  icon={
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  }
                  title="AI Mastery"
                  description='Learn to use Generative AI for professional workflows. Become the "AI-Augmented Consultant."'
                />
              </>
            )}
          </div>
        </div>
      </section>

      {/* ============================================
          8-WEEK MISSION CYCLE
          ============================================ */}
      <section className="py-24 relative overflow-hidden section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge-vision mb-6">Process</span>
              <h2 className="heading-lg mb-6">
                The 8-Week Mission Cycle
              </h2>
              <p className="body-lg mb-10">
                A structured, managed framework ensuring quality deliverables for companies
                and meaningful experience for students.
              </p>
              <button
                onClick={() => setIsCompanyModalOpen(true)}
                className="btn-primary"
              >
                Submit a Challenge
              </button>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: 'Define the "Backlog Challenge"',
                  desc: "Companies submit non-urgent but critical projects (e.g., Competitor Analysis, Data Cleanup, Python Scripting).",
                },
                {
                  step: 2,
                  title: "Squad Assembly",
                  desc: 'Nexus matches 4-5 vetted students based on skills to form a "Mission Squad" tailored to your needs.',
                },
                {
                  step: 3,
                  title: "AI-Powered Execution",
                  desc: "The Squad executes using Nexus-provided AI toolkits under the supervision of a Project Lead.",
                },
                {
                  step: 4,
                  title: "Delivery & Recruitment",
                  desc: "Company receives the solution. Top performers can be hired directly with a placement fee.",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative pl-20 group">
                  {/* Connecting Line */}
                  {index < 3 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-[#10b981]/50 to-transparent" />
                  )}
                  {/* Step Number */}
                  <div className="step-number absolute left-0 top-0">
                    {item.step}
                  </div>
                  <div className="feature-card p-6">
                    <h5 className="font-semibold text-[#0f172a] text-lg mb-2">{item.title}</h5>
                    <p className="text-[#64748b] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION
          ============================================ */}
      <section id="pricing" className="py-24 section-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-vision mb-6">Pricing</span>
            <h2 className="heading-lg mb-4">
              Transparent Engagement Models
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Designed for sustainability and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Consulting Mission */}
            <div className="pricing-card">
              <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#059669] text-xs font-bold rounded-full mb-6">
                Project Basis
              </span>
              <h3 className="font-bold text-2xl text-[#0f172a] mb-2">Consulting Mission</h3>
              <div className="font-bold text-3xl text-[#003366] mb-2">Schedule a call</div>
              <p className="text-[#64748b] text-sm mb-6">Per 8-week structured project.</p>

              <div className="h-px bg-[#e2e8f0] mb-6" />

              <ul className="space-y-3">
                {["Dedicated squad of 4-5 students", "Managed Project Lead", "Final Deliverables & IP Transfer"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#64748b]">
                    <svg className="w-5 h-5 text-[#10b981] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Fee */}
            <div className="pricing-card featured">
              <span className="inline-block px-3 py-1 bg-[#003366]/10 text-[#003366] text-xs font-bold rounded-full mb-6">
                Recruitment
              </span>
              <h3 className="font-bold text-2xl text-[#0f172a] mb-2">Success Fee</h3>
              <div className="font-bold text-3xl gradient-text mb-2">10% - 15%</div>
              <p className="text-[#64748b] text-sm mb-6">Of First Year Salary (Standard Headhunter Model).</p>

              <div className="h-px bg-[#e2e8f0] mb-6" />

              <ul className="space-y-3">
                {["Only pay if you hire", '8-week "Interview" period included', "Pre-vetted, culturally aligned talent"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#64748b]">
                    <svg className="w-5 h-5 text-[#003366] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          EXPERTISE SECTION
          ============================================ */}
      <section id="expertise" className="py-24 relative section-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-vision mb-6">Capabilities</span>
            <h2 className="heading-lg mb-4">Our Expertise</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Specialized skills that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Market Research", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
              { title: "Data Cleaning", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
              { title: "Python Scripting", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Product Strategy", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card p-8 text-center"
              >
                <div className="icon-box mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h6 className="font-semibold text-[#0f172a]">{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          JOURNAL SECTION
          ============================================ */}
      <section id="journal" className="py-24 section-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div>
              <span className="badge-vision mb-4">Nexus Journal</span>
              <h2 className="heading-lg">
                Student Voices & Insights
              </h2>
            </div>
            <button
              onClick={() => setIsArticleModalOpen(true)}
              className="btn-secondary"
            >
              Submit an Article
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Article Card 1 */}
            <div className="feature-card overflow-hidden group">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#10b981]/10 text-[#059669] text-xs font-bold rounded-full mb-4">
                  Featured
                </span>
                <h5 className="font-semibold text-[#0f172a] text-lg mb-2">
                  Automating Data Cleanup with Python
                </h5>
                <p className="text-[#64748b] text-sm mb-4">
                  How our squad processed 50k rows of messy retail data in under 48 hours using AI scripts.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#64748b]">By Sarah A. (KSU)</span>
                  <span className="text-[#10b981] font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="feature-card overflow-hidden group">
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-[#003366]/10 text-[#003366] text-xs font-bold rounded-full mb-4">
                  Opinion
                </span>
                <h5 className="font-semibold text-[#0f172a] text-lg mb-2">
                  Why I Chose a Mission Over an Internship
                </h5>
                <p className="text-[#64748b] text-sm mb-4">
                  The difference between fetching coffee and solving real corporate backlog challenges.
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#64748b]">By Faisal M. (KFUPM)</span>
                  <span className="text-[#10b981] font-semibold cursor-pointer hover:underline">
                    Read More
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="feature-card border-dashed border-2 flex flex-col items-center justify-center p-8 text-center hover:border-[#10b981] transition-all group">
              <div className="w-16 h-16 bg-[#f8fafc] rounded-2xl flex items-center justify-center text-[#10b981] mb-4 group-hover:bg-[#10b981]/10 transition-colors">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h5 className="font-semibold text-[#0f172a] text-lg mb-2">Have insights to share?</h5>
              <p className="text-[#64748b] text-sm mb-6">
                Write about your projects, AI trends, or student experiences. We feature the best stories.
              </p>
              <button
                onClick={() => setIsArticleModalOpen(true)}
                className="btn-accent text-sm"
              >
                Submit Your Draft
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modals */}
      <StudentModal
        isOpen={isStudentModalOpen}
        onClose={() => setIsStudentModalOpen(false)}
      />
      <CompanyModal
        isOpen={isCompanyModalOpen}
        onClose={() => setIsCompanyModalOpen(false)}
      />
      <ArticleModal
        isOpen={isArticleModalOpen}
        onClose={() => setIsArticleModalOpen(false)}
      />
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card p-8">
      <div className="icon-box mb-6">
        {icon}
      </div>
      <h4 className="font-semibold text-xl text-[#0f172a] mb-3">{title}</h4>
      <p className="text-[#64748b]">{description}</p>
    </div>
  );
}

// CountUp Animation Component
function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeOut * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
}

// Animated Progress Bar Component
function ProgressBar({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) {
  const [width, setWidth] = useState(0);
  const [count, setCount] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setWidth(easeOut * percentage);
            setCount(Math.floor(easeOut * percentage));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div ref={barRef} className="p-4 bg-[#f8fafc] rounded-2xl border border-[#e2e8f0]">
      <div className="flex justify-between text-sm mb-3">
        <span className="text-[#64748b]">{label}</span>
        <span style={{ color }} className="font-semibold">{count}%</span>
      </div>
      <div className="h-2 bg-[#e2e8f0] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${width}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
