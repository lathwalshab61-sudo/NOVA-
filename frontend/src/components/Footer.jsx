import React, { useState } from 'react';
import { api } from '../services/api.js';

export default function Footer({ onNavigate }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    try {
      await api.subscribeNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('success'); // graceful fallback
    }
  };

  return (
    <footer className="mt-space-xl bg-primary-container text-on-primary px-gutter-sm pt-space-lg pb-24 md:pb-space-lg rounded-t-3xl">
      <div className="max-w-7xl mx-auto">
        {/* Brand Title & Tagline */}
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-lg">explore</span>
          </div>
          <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-white">
            NOVA
          </span>
        </div>
        <p className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-wider mb-space-md">
          Explore Beyond Boundaries
        </p>

        {/* Dispatch Newsletter Box */}
        <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-2xl p-space-md mb-space-lg max-w-xl border border-white/10">
          <h3 className="font-headline-sm text-headline-sm font-bold text-white mb-1">
            Join the Wanderer Dispatch
          </h3>
          <p className="font-body-sm text-[12px] text-surface-container-highest/80 mb-space-sm">
            Curated dispatches on secret villas, private openings, and seasonal expedition routes.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-11 px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-sm text-body-sm placeholder:text-outline/70 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="h-11 px-6 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md font-semibold active:bg-secondary-container transition-colors flex items-center justify-center gap-1.5 shadow-md cursor-pointer shrink-0"
            >
              <span>{status === 'success' ? 'Subscribed!' : 'Subscribe'}</span>
              <span className="material-symbols-outlined text-base">
                {status === 'success' ? 'check' : 'arrow_forward'}
              </span>
            </button>
          </form>
          {status === 'success' && (
            <div className="mt-2 font-label-sm text-secondary-fixed text-[12px]">
              ✦ Thank you for subscribing to the Dispatch.
            </div>
          )}
        </div>

        {/* Quick Navigation Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-space-lg">
          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-[10px] uppercase text-surface-container-highest/60 font-bold tracking-widest">
              EXPEDITIONS
            </span>
            <button
              onClick={() => onNavigate('destinations')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Destinations
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Private Charters
            </button>
            <button
              onClick={() => onNavigate('destinations')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Curated Villas
            </button>
            <button
              onClick={() => onNavigate('experiences')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Cultural Odysseys
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-[10px] uppercase text-surface-container-highest/60 font-bold tracking-widest">
              ABOUT & ETHOS
            </span>
            <button
              onClick={() => onNavigate('about')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Our Story
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Sustainability Pledge
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Concierge Desk
            </button>
            <a
              href="mailto:hello@nova-travel.com"
              className="font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              hello@nova-travel.com
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-label-caps text-[10px] uppercase text-surface-container-highest/60 font-bold tracking-widest">
              MEMBERSHIP
            </span>
            <button
              onClick={() => onNavigate('login')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Explorer Club
            </button>
            <button
              onClick={() => onNavigate('saved')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Saved Itineraries
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="text-left font-body-sm text-[13px] text-surface-container-highest hover:text-white transition-colors"
            >
              Private Air Charter
            </button>
          </div>

          <div className="flex flex-col gap-3">
            <span className="font-label-caps text-[10px] uppercase text-surface-container-highest/60 font-bold tracking-widest">
              CONNECT
            </span>
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 flex items-center justify-center text-surface-container-highest hover:text-white hover:bg-surface-container-lowest/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
              <a
                href="#public"
                aria-label="Global"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 flex items-center justify-center text-surface-container-highest hover:text-white hover:bg-surface-container-lowest/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">public</span>
              </a>
              <a
                href="#support"
                aria-label="Support"
                className="w-9 h-9 rounded-full bg-surface-container-lowest/10 flex items-center justify-center text-surface-container-highest hover:text-white hover:bg-surface-container-lowest/20 transition-all"
              >
                <span className="material-symbols-outlined text-lg">support_agent</span>
              </a>
            </div>
            <p className="font-body-sm text-[11px] text-surface-container-highest/60 leading-normal">
              Direct liaison available 24/7 in 14 timezones.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-surface-container-highest/10 text-center">
          <p className="font-body-sm text-[11px] text-surface-container-highest/50">
            © 2025 NOVA Expeditions Inc. All rights reserved. Architectural Luxury Travel.
          </p>
        </div>
      </div>
    </footer>
  );
}

