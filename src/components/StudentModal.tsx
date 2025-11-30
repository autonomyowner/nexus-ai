"use client";

import Modal from "./Modal";

interface StudentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function StudentModal({ isOpen, onClose }: StudentModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <div className="badge-premium mb-4">Free for Students</div>
          <h2 className="font-display font-bold text-2xl text-white mb-2">Student Application</h2>
          <p className="text-[#64748b]">
            Join the elite Nexus talent pool. No fees required.
          </p>
        </div>

        <form className="space-y-8">
          {/* Section 1: Personal */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">01</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Personal Information</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">Full Name</label>
                <input type="text" placeholder="e.g. Faisal Al-Saud" className="form-input" />
              </div>
              <div>
                <label className="form-label">Email Address</label>
                <input type="email" placeholder="student@ksu.edu.sa" className="form-input" />
              </div>
              <div>
                <label className="form-label">Phone Number</label>
                <input type="tel" placeholder="+966 5..." className="form-input" />
              </div>
              <div>
                <label className="form-label">LinkedIn URL</label>
                <input type="url" placeholder="linkedin.com/in/..." className="form-input" />
              </div>
            </div>
          </div>

          {/* Section 2: Academic */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">02</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Academic Profile</h6>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label">University</label>
                <select className="form-select">
                  <option value="">Select University...</option>
                  <option>King Saud University (KSU)</option>
                  <option>King Fahd University (KFUPM)</option>
                  <option>Princess Nourah University (PNU)</option>
                  <option>Al-Faisal University</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="form-label">Major / Concentration</label>
                <input type="text" placeholder="e.g. Computer Science, Finance" className="form-input" />
              </div>
              <div>
                <label className="form-label">Expected Graduation Year</label>
                <select className="form-select">
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>Alumni / Graduated</option>
                </select>
              </div>
              <div>
                <label className="form-label">GPA (Optional)</label>
                <input type="text" placeholder="e.g. 4.5/5.0" className="form-input" />
              </div>
            </div>
          </div>

          {/* Section 3: Skills */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-[#00d4aa]/10 border border-[#00d4aa]/20 rounded-lg flex items-center justify-center">
                <span className="text-[#00d4aa] font-display font-bold text-sm">03</span>
              </div>
              <h6 className="text-sm font-semibold text-white uppercase tracking-wider">Skills & CV</h6>
            </div>
            <div className="mb-4">
              <label className="form-label mb-3">Primary Areas of Interest</label>
              <div className="flex flex-wrap gap-3">
                {["Data Analysis/AI", "Strategy/Consulting", "Market Research", "Development"].map((skill) => (
                  <label key={skill} className="flex items-center gap-2 px-4 py-2 bg-[#111827] border border-white/10 rounded-xl cursor-pointer hover:border-[#00d4aa]/30 transition-all group">
                    <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-transparent text-[#00d4aa] focus:ring-[#00d4aa] focus:ring-offset-0" />
                    <span className="text-sm text-[#94a3b8] group-hover:text-white transition-colors">{skill}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="form-label mb-3">Upload CV / Resume (PDF)</label>
              <div className="file-upload group">
                <svg className="w-10 h-10 text-[#64748b] group-hover:text-[#00d4aa] transition-colors mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-sm text-[#64748b]">Drag & drop or click to upload CV</p>
                <input type="file" accept=".pdf" className="hidden" />
              </div>
            </div>
          </div>

          <button type="submit" className="btn-primary w-full justify-center">
            <span>Submit Application</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </form>
      </div>
    </Modal>
  );
}
