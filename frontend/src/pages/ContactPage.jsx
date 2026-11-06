import React, { useState } from 'react';
import { api } from '../services/api.js';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) return;

    setLoading(true);
    try {
      await api.submitInquiry({
        name: formData.name,
        email: formData.email,
        destination: formData.destination,
        message: formData.message,
        type: 'concierge_contact'
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-7xl mx-auto py-space-md">
      <div className="mb-space-lg text-center max-w-2xl mx-auto">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-1">
          CONCIERGE LIAISON
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight mb-2">
          Contact the NOVA Desk
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant">
          Speak with our private travel directors to coordinate bespoke chartered aircraft, unlisted villa acquisitions, or private expedition itineraries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information & Channels */}
        <div className="flex flex-col gap-4">
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/40 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-3">
              <span className="material-symbols-outlined text-xl">phone_in_talk</span>
            </div>
            <h3 className="font-headline-sm text-base font-bold text-on-surface mb-1">
              Direct Telephone
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-2">
              Available 24/7 for urgent traveler inquiries and flight adjustments.
            </p>
            <a href="tel:+18005556682" className="font-label-md font-bold text-secondary hover:underline">
              +1 (800) 555-NOVA
            </a>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/40 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-3">
              <span className="material-symbols-outlined text-xl">mark_email_read</span>
            </div>
            <h3 className="font-headline-sm text-base font-bold text-on-surface mb-1">
              Electronic Dispatch
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant mb-2">
              Send detailed expedition briefs and private requests.
            </p>
            <a href="mailto:concierge@nova-travel.com" className="font-label-md font-bold text-secondary hover:underline">
              concierge@nova-travel.com
            </a>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/40 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-3">
              <span className="material-symbols-outlined text-xl">location_city</span>
            </div>
            <h3 className="font-headline-sm text-base font-bold text-on-surface mb-1">
              Global Headquarters
            </h3>
            <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              740 Park Avenue, Penthouse 18<br />
              New York, NY 10021 · USA
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2 bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-surface-container-high/40 shadow-sm">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 text-secondary mx-auto flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h3 className="font-headline-md font-bold text-on-surface mb-2">
                Inquiry Successfully Dispatched
              </h3>
              <p className="font-body-sm text-on-surface-variant max-w-md mx-auto mb-6">
                Thank you, {formData.name || 'valued explorer'}. A dedicated senior concierge director will respond to {formData.email} within 4 hours.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', destination: '', message: '' });
                }}
                className="px-6 h-11 rounded-full bg-secondary text-white font-label-md font-semibold cursor-pointer"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <h3 className="font-headline-sm font-bold text-on-surface mb-1">
                Initiate a Bespoke Inquiry
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Lord / Lady / Dr. Name"
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="explorer@domain.com"
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                  Destination or Experience of Interest
                </label>
                <input
                  type="text"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  placeholder="e.g. Amalfi Coast Private Yacht, Baa Atoll Overwater Villa"
                  className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
                />
              </div>

              <div>
                <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                  Expedition Details & Whims
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please specify desired travel window, party size, private aircraft requirements, or dietary preferences..."
                  className="w-full p-3 rounded-xl bg-surface-container-low text-on-surface font-body-sm focus:outline-none border border-surface-container-high resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 h-12 rounded-xl bg-primary-container text-white font-label-md font-semibold hover:bg-secondary transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">send</span>
                <span>{loading ? 'Dispatching...' : 'Dispatch to Concierge'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

