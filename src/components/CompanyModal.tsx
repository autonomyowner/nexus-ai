"use client";

import { useState } from "react";
import Modal from "./Modal";

interface CompanyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CompanyModal({ isOpen, onClose }: CompanyModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website: '',
    contactName: '',
    jobTitle: '',
    workEmail: '',
    phone: '',
    lookingFor: 'I have a specific project/mission in mind',
    projectDescription: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'company', data: formData }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit request. Please try again or contact us directly.');
      }
    } catch {
      setError('Failed to submit request. Please try again or contact us directly.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({
      companyName: '',
      industry: '',
      website: '',
      contactName: '',
      jobTitle: '',
      workEmail: '',
      phone: '',
      lookingFor: 'I have a specific project/mission in mind',
      projectDescription: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#d4a574]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Request Received!</h2>
            <p className="text-[#94a3b8] mb-8 max-w-sm mx-auto">
              Thank you for your interest in partnering with Nexus. Our team will contact you within 1-2 business days to schedule a consultation.
            </p>
            <button
              onClick={handleClose}
              className="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#00d4aa] text-[#0a0f1a] font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              <span>Close</span>
            </button>
          </div>
        ) : (
          <>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-full text-[#d4a574] text-xs font-semibold mb-4">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
            </svg>
            Enterprise
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Partner Registration</h2>
          <p className="text-[#64748b]">
            Schedule a consultation or submit a Backlog Challenge.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Section 1: Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#d4a574] font-display font-bold text-sm">01</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Organization Details</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">Industry Sector</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="">Select...</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Retail / E-commerce">Retail / E-commerce</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Government / Public Sector">Government / Public Sector</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="form-label">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://..."
                  className="form-input"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Contact */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#d4a574] font-display font-bold text-sm">02</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Point of Contact</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Contact Name</label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g. HR Manager, CTO"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">Work Email</label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+966..."
                  className="form-input"
                  required
                />
              </div>
            </div>
          </div>

          {/* Section 3: Needs */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#d4a574]/10 border border-[#d4a574]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#d4a574] font-display font-bold text-sm">03</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Partnership Needs</h6>
            </div>
            <div className="space-y-4">
              <div>
                <label className="form-label">What are you looking for?</label>
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="I have a specific project/mission in mind">I have a specific project/mission in mind</option>
                  <option value="I want to hire students (Recruitment)">I want to hire students (Recruitment)</option>
                  <option value="I need a consultation to identify use cases">I need a consultation to identify use cases</option>
                </select>
              </div>
              <div>
                <label className="form-label">Project Description</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Briefly describe your challenge or project needs..."
                  className="form-input resize-none"
                  required
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#00d4aa] text-[#0a0f1a] font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Submitting...</span>
              </>
            ) : (
              <>
                <span>Request Consultation</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>
        </form>
          </>
        )}
      </div>
    </Modal>
  );
}
