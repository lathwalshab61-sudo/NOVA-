import React, { useState } from 'react';
import { api } from '../services/api.js';

export default function ExperiencesPage({ experiences, onNavigate }) {
  const [selectedExp, setSelectedExp] = useState(null);
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquiry = async (e) => {
    e.preventDefault();
    if (!inquiryEmail) return;

    try {
      await api.submitInquiry({
        email: inquiryEmail,
        destination: selectedExp?.title,
        type: 'experience_charter'
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setSelectedExp(null);
        setInquiryEmail('');
      }, 2500);
    } catch {
      setSubmitted(true);
    }
  };

  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-7xl mx-auto py-space-md">
      {/* Page Title */}
      <div className="mb-space-lg">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
          UNRIVALED ADVENTURES
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
          Curated Experiences & Masterclasses
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
          From private tea masterclasses with 16th-generation abbots in Kyoto to night astrophotography deep inside Jordan's Wadi Rum.
        </p>
      </div>

      {/* Grid of Experiences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/40 flex flex-col justify-between hover:shadow-md transition-shadow"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div>
                  <span className="font-label-caps text-[11px] uppercase text-secondary font-bold tracking-wider">
                    {exp.location} · {exp.duration}
                  </span>
                  <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-1">
                    {exp.title}
                  </h2>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-2xl">{exp.icon}</span>
                </div>
              </div>

              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-4">
                {exp.tagline}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-surface-container-low font-label-sm text-[11px] text-on-surface-variant font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-surface-container-low flex items-center justify-between">
              <div>
                <span className="font-label-caps text-[10px] uppercase text-outline block">
                  EXPEDITION CHARTER
                </span>
                <span className="font-label-md font-bold text-on-surface">
                  From ${exp.price?.toLocaleString()}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setSelectedExp(exp)}
                className="h-10 px-5 rounded-full bg-secondary text-on-secondary font-label-md font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer shadow-sm"
              >
                Inquire Experience
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Inquiry Modal */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary-container/60 backdrop-blur-sm">
          <div className="bg-surface-container-lowest rounded-2xl p-6 max-w-md w-full shadow-2xl border border-surface-container-high relative">
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <span className="font-label-caps text-[10px] uppercase text-secondary font-bold">
              {selectedExp.location}
            </span>
            <h3 className="font-headline-sm font-bold text-on-surface mt-1 mb-2">
              {selectedExp.title}
            </h3>
            <p className="font-body-sm text-on-surface-variant text-xs mb-4">
              {selectedExp.tagline}
            </p>

            {submitted ? (
              <div className="bg-surface-container-low p-4 rounded-xl text-center">
                <span className="material-symbols-outlined text-3xl text-secondary mb-1">
                  check_circle
                </span>
                <p className="font-label-md font-bold text-on-surface">Inquiry Dispatched!</p>
                <p className="font-body-sm text-[11px] text-on-surface-variant">
                  We will contact you with private charter arrangements.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquiry} className="flex flex-col gap-3">
                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Your Email for Confirmation
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="explorer@sanctuary.com"
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
                  />
                </div>
                <button
                  type="submit"
                  className="h-11 rounded-xl bg-primary-container text-white font-label-md font-semibold hover:bg-secondary transition-colors cursor-pointer"
                >
                  Send Direct Request
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

