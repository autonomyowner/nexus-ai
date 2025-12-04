"use client";

import { useState } from "react";
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
    <div className="min-h-screen bg-white">
      <Navbar
        onOpenStudentModal={() => setIsStudentModalOpen(true)}
        onOpenCompanyModal={() => setIsCompanyModalOpen(true)}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="relative min-h-screen flex items-center pt-20 hero-bg">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="badge-vision mb-6">
                Aligned with Saudi Vision 2030
              </div>

              <h1 className="heading-xl mb-5">
                De-Risking Hiring.
                <br />
                <span className="hero-highlight">Accelerating Innovation.</span>
              </h1>

              <p className="body-lg max-w-xl mb-8">
                Nexus is the operating system for the next generation of Saudi talent.
                We connect companies with vetted, AI-augmented student teams for structured
                8-week consulting missions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={() => setIsStudentModalOpen(true)}
                  className="btn-primary"
                >
                  For Students
                </button>
                <a href="#how-it-works" className="btn-secondary">
                  How it works
                </a>
              </div>

              {/* Stats - Static Numbers */}
              <p className="text-[#6b6b6b] text-sm mb-3 uppercase tracking-wider">Our Vision</p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#006C35]">
                    500+
                  </div>
                  <p className="text-[#6b6b6b] text-sm mt-1">Students</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    50+
                  </div>
                  <p className="text-[#6b6b6b] text-sm mt-1">Companies</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#006C35]">
                    100+
                  </div>
                  <p className="text-[#6b6b6b] text-sm mt-1">Missions</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-[#e5e5e5]">
                <p className="text-[#6b6b6b] text-sm mb-3 tracking-wider uppercase">Trusted by</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2 bg-[#fafafa] border border-[#e5e5e5]">
                    <div className="w-8 h-8 bg-[#006C35]/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#006C35]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[#1a1a1a] text-sm font-semibold">RWAS Award</p>
                      <p className="text-[#6b6b6b] text-xs">Top 2nd - Saudi Entrepreneurship</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Dashboard Preview */}
            <div>
              <div className="relative">
                {/* Main Dashboard Card */}
                <div className="feature-card p-6 relative overflow-hidden border border-[#e5e5e5]">
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-10 h-10 bg-[#006C35] flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h6 className="font-semibold text-[#1a1a1a]">Mission Status</h6>
                        <p className="text-[#006C35] text-sm flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#006C35] rounded-full" />
                          On Track - AI Augmented
                        </p>
                      </div>
                    </div>

                    {/* Progress Items - Static */}
                    <div className="space-y-4">
                      <StaticProgressBar label="Market Analysis" percentage={100} color="#006C35" />
                      <StaticProgressBar label="Data Cleaning (AI Assist)" percentage={85} color="#1a1a1a" />
                      <StaticProgressBar label="Report Generation" percentage={45} color="#6b6b6b" />
                    </div>

                    {/* Squad Info */}
                    <div className="mt-5 pt-5 border-t border-[#e5e5e5] flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {[1, 2, 3, 4].map((i) => (
                          <div key={i} className="w-8 h-8 bg-[#e5e5e5] border-2 border-white flex items-center justify-center">
                            <span className="text-xs text-[#6b6b6b]">S{i}</span>
                          </div>
                        ))}
                      </div>
                      <span className="text-xs text-[#6b6b6b]">Squad Alpha - Week 6 of 8</span>
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
      <section id="how-it-works" className="py-16 md:py-20 relative section-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            {/* Segment Switcher */}
            <div className="segment-switcher mb-10">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {activeSegment === "company" ? (
              <>
                <FeatureCard
                  title="AI-Augmented Output"
                  description="Teams equipped with enterprise AI tools to clean data, synthesize reports, and code faster than traditional juniors."
                />
                <FeatureCard
                  title="De-Risked Hiring"
                  description='Watch a team perform on a real project for 8 weeks before making a full-time offer. "Try before you buy."'
                />
                <FeatureCard
                  title="Cost-Effective"
                  description="Get high-quality outputs at ~1/10th the cost of traditional consulting firms."
                />
              </>
            ) : (
              <>
                <FeatureCard
                  title="Real Experience"
                  description='Work on live "Backlog Challenges" for top Saudi companies and build a real portfolio.'
                />
                <FeatureCard
                  title="Career Fast-Track"
                  description="Top performers get fast-tracked for hiring interviews. Free for students."
                />
                <FeatureCard
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
      <section className="py-16 md:py-20 relative overflow-hidden section-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-vision mb-5">Process</span>
              <h2 className="heading-lg mb-5">
                The 8-Week Mission Cycle
              </h2>
              <p className="body-lg mb-8">
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

            <div className="space-y-5">
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
                <div key={item.step} className="relative pl-14">
                  {/* Connecting Line */}
                  {index < 3 && (
                    <div className="absolute left-[18px] top-12 w-px h-full bg-[#e5e5e5]" />
                  )}
                  {/* Step Number */}
                  <div className="step-number absolute left-0 top-0">
                    {item.step}
                  </div>
                  <div className="feature-card p-5">
                    <h5 className="font-semibold text-[#1a1a1a] mb-2">{item.title}</h5>
                    <p className="text-[#6b6b6b] text-sm">{item.desc}</p>
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
      <section id="pricing" className="py-16 md:py-20 section-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-vision mb-5">Pricing</span>
            <h2 className="heading-lg mb-4">
              Transparent Engagement Models
            </h2>
            <p className="body-lg max-w-2xl mx-auto">
              Designed for sustainability and ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Consulting Mission */}
            <div className="pricing-card">
              <span className="inline-block px-3 py-1 bg-[#006C35]/10 text-[#006C35] text-xs font-bold mb-5">
                Project Basis
              </span>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Consulting Mission</h3>
              <div className="font-bold text-2xl text-[#006C35] mb-2">Schedule a call</div>
              <p className="text-[#6b6b6b] text-sm mb-5">Per 8-week structured project.</p>

              <div className="h-px bg-[#e5e5e5] mb-5" />

              <ul className="space-y-3">
                {["Dedicated squad of 4-5 students", "Managed Project Lead", "Final Deliverables & IP Transfer"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                    <svg className="w-4 h-4 text-[#006C35] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Success Fee */}
            <div className="pricing-card featured">
              <span className="inline-block px-3 py-1 bg-[#1a1a1a]/10 text-[#1a1a1a] text-xs font-bold mb-5">
                Recruitment
              </span>
              <h3 className="font-bold text-xl text-[#1a1a1a] mb-2">Success Fee</h3>
              <div className="font-bold text-2xl gradient-text mb-2">10% - 15%</div>
              <p className="text-[#6b6b6b] text-sm mb-5">Of First Year Salary (Standard Headhunter Model).</p>

              <div className="h-px bg-[#e5e5e5] mb-5" />

              <ul className="space-y-3">
                {["Only pay if you hire", '8-week "Interview" period included', "Pre-vetted, culturally aligned talent"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                    <svg className="w-4 h-4 text-[#006C35] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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
      <section id="expertise" className="py-16 md:py-20 relative section-light">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-vision mb-5">Capabilities</span>
            <h2 className="heading-lg mb-4">Our Expertise</h2>
            <p className="body-lg max-w-2xl mx-auto">
              Specialized skills that drive your business forward.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { title: "Market Research" },
              { title: "Data Cleaning" },
              { title: "Python Scripting" },
              { title: "Product Strategy" },
            ].map((item) => (
              <div
                key={item.title}
                className="feature-card p-6 text-center"
              >
                <h6 className="font-semibold text-[#1a1a1a]">{item.title}</h6>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          JOURNAL SECTION
          ============================================ */}
      <section id="journal" className="py-16 md:py-20 section-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-10">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Article Card 1 */}
            <div className="feature-card overflow-hidden">
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-[#006C35]/10 text-[#006C35] text-xs font-bold mb-4">
                  Featured
                </span>
                <h5 className="font-semibold text-[#1a1a1a] mb-2">
                  Automating Data Cleanup with Python
                </h5>
                <p className="text-[#6b6b6b] text-sm mb-4">
                  How our squad processed 50k rows of messy retail data in under 48 hours using AI scripts.
                </p>
                <div className="text-sm">
                  <span className="text-[#6b6b6b]">By Sarah A. (KSU)</span>
                </div>
              </div>
            </div>

            {/* Article Card 2 */}
            <div className="feature-card overflow-hidden">
              <div className="p-5">
                <span className="inline-block px-3 py-1 bg-[#1a1a1a]/10 text-[#1a1a1a] text-xs font-bold mb-4">
                  Opinion
                </span>
                <h5 className="font-semibold text-[#1a1a1a] mb-2">
                  Why I Chose a Mission Over an Internship
                </h5>
                <p className="text-[#6b6b6b] text-sm mb-4">
                  The difference between fetching coffee and solving real corporate backlog challenges.
                </p>
                <div className="text-sm">
                  <span className="text-[#6b6b6b]">By Faisal M. (KFUPM)</span>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="feature-card border-dashed border-2 flex flex-col items-center justify-center p-6 text-center">
              <h5 className="font-semibold text-[#1a1a1a] mb-2">Have insights to share?</h5>
              <p className="text-[#6b6b6b] text-sm mb-5">
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

// Feature Card Component - Simplified
function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="feature-card p-6">
      <h4 className="font-semibold text-lg text-[#1a1a1a] mb-3">{title}</h4>
      <p className="text-[#6b6b6b]">{description}</p>
    </div>
  );
}

// Static Progress Bar - No Animation
function StaticProgressBar({
  label,
  percentage,
  color,
}: {
  label: string;
  percentage: number;
  color: string;
}) {
  return (
    <div className="p-3 bg-[#fafafa] border border-[#e5e5e5]">
      <div className="flex justify-between text-sm mb-2">
        <span className="text-[#6b6b6b]">{label}</span>
        <span style={{ color }} className="font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-[#e5e5e5] overflow-hidden">
        <div
          className="h-full"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
