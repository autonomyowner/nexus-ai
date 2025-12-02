"use client";

import { useState } from "react";
import Modal from "./Modal";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentModal({ isOpen, onClose }: StudentModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedin: '',
    university: '',
    major: '',
    graduation: '',
    gpa: '',
    interest: '',
    motivation: '',
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
        body: JSON.stringify({ type: 'student', data: formData }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit application. Please try again or contact us directly.');
      }
    } catch {
      setError('Failed to submit application. Please try again or contact us directly.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      linkedin: '',
      university: '',
      major: '',
      graduation: '',
      gpa: '',
      interest: '',
      motivation: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#10b981]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Application Received!</h2>
            <p className="text-[#94a3b8] mb-8 max-w-sm mx-auto">
              Thank you for applying to join Nexus. We will review your profile and get back to you within 3-5 business days.
            </p>
            <button
              onClick={handleClose}
              className="btn-primary"
            >
              <span>Close</span>
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-8">
              <div className="badge-premium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
                Student Application
              </div>
              <h2 className="font-display font-bold text-2xl text-white mb-2">Join Nexus</h2>
              <p className="text-[#64748b]">
                Apply to work on real corporate projects and accelerate your career.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* Section 1: Personal Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#10b981]/10 border border-[#10b981]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#10b981] font-display font-bold text-sm">01</span>
                  </div>
                  <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Personal Information</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
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
                  <div>
                    <label className="form-label">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      placeholder="linkedin.com/in/..."
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Education */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#10b981]/10 border border-[#10b981]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#10b981] font-display font-bold text-sm">02</span>
                  </div>
                  <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Education</h6>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="form-label">University</label>
                    <select
                      name="university"
                      value={formData.university}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="King Saud University (KSU)">King Saud University (KSU)</option>
                      <option value="King Fahd University (KFUPM)">King Fahd University (KFUPM)</option>
                      <option value="King Abdulaziz University (KAU)">King Abdulaziz University (KAU)</option>
                      <option value="Princess Nourah University (PNU)">Princess Nourah University (PNU)</option>
                      <option value="Imam Muhammad University (IMSIU)">Imam Muhammad University (IMSIU)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Major / Field of Study</label>
                    <input
                      type="text"
                      name="major"
                      value={formData.major}
                      onChange={handleInputChange}
                      placeholder="e.g. Computer Science"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Expected Graduation</label>
                    <select
                      name="graduation"
                      value={formData.graduation}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select...</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="Already Graduated">Already Graduated</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">GPA (Optional)</label>
                    <input
                      type="text"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleInputChange}
                      placeholder="e.g. 4.5 / 5.0"
                      className="form-input"
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Skills */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-[#10b981]/10 border border-[#10b981]/20 rounded-lg flex items-center justify-center">
                    <span className="text-[#10b981] font-display font-bold text-sm">03</span>
                  </div>
                  <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Skills & Interests</h6>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="form-label">Areas of Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="form-select"
                      required
                    >
                      <option value="">Select primary interest...</option>
                      <option value="Data Analysis & Python">Data Analysis & Python</option>
                      <option value="Market Research">Market Research</option>
                      <option value="Product Strategy">Product Strategy</option>
                      <option value="Software Development">Software Development</option>
                      <option value="Business Consulting">Business Consulting</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Why do you want to join Nexus?</label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Tell us about your motivation and what you hope to gain..."
                      className="form-input resize-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center"
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
                    <span>Submit Application</span>
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
