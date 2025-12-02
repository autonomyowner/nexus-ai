"use client";

import { useState } from "react";
import Modal from "./Modal";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ArticleModal({ isOpen, onClose }: ArticleModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    linkedin: '',
    articleTitle: '',
    category: 'Case Study / Project Review',
    abstract: '',
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
        body: JSON.stringify({ type: 'article', data: formData }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Failed to submit article. Please try again or contact us directly.');
      }
    } catch {
      setError('Failed to submit article. Please try again or contact us directly.');
    }

    setIsLoading(false);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setError(null);
    setFormData({
      fullName: '',
      organization: '',
      email: '',
      linkedin: '',
      articleTitle: '',
      category: 'Case Study / Project Review',
      abstract: '',
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className="p-8">
        {isSubmitted ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-[#00d4aa]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-[#00d4aa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-display font-bold text-2xl text-white mb-3">Article Submitted!</h2>
            <p className="text-[#94a3b8] mb-8 max-w-sm mx-auto">
              Thank you for your submission to Nexus Journal. Our editorial team will review your article and get back to you within 5-7 business days.
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            Nexus Journal
          </div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Submit to Nexus Journal</h2>
          <p className="text-[#64748b]">
            Share your insights. Get featured. Build your brand.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <form className="space-y-8" onSubmit={handleSubmit}>
          {/* Section 1: Author Details */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">01</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Author Details</h6>
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
                <label className="form-label">University / Organization</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="e.g. KSU / Nexus Alumni"
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

          {/* Section 2: Article Content */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">02</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Article Content</h6>
            </div>
            <div className="space-y-4">
              <div>
                <label className="form-label">Article Title</label>
                <input
                  type="text"
                  name="articleTitle"
                  value={formData.articleTitle}
                  onChange={handleInputChange}
                  placeholder="Catchy title for your piece"
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label className="form-label">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="form-select"
                  required
                >
                  <option value="Case Study / Project Review">Case Study / Project Review</option>
                  <option value="Opinion / Student Experience">Opinion / Student Experience</option>
                  <option value="Technical / AI Tutorial">Technical / AI Tutorial</option>
                  <option value="Market Analysis">Market Analysis</option>
                </select>
              </div>
              <div>
                <label className="form-label">Abstract / Summary</label>
                <textarea
                  name="abstract"
                  value={formData.abstract}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Brief summary of what your article is about..."
                  className="form-input resize-none"
                  required
                />
              </div>
            </div>
          </div>

          {/* File Upload Note */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">03</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Upload Draft</h6>
            </div>
            <div className="file-upload group">
              <svg className="w-12 h-12 text-[#00d4aa] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h6 className="font-semibold text-white mb-1">Upload your file</h6>
              <p className="text-sm text-[#64748b] mb-2">Accepted formats: .pdf, .docx, .txt, .doc</p>
              <p className="text-xs text-[#94a3b8]">After submitting, we will email you for the full draft</p>
              <input type="file" accept=".pdf,.doc,.docx,.txt" className="hidden" />
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
                <span>Submit for Review</span>
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
