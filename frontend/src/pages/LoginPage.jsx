import React, { useState } from 'react';
import { api } from '../services/api.js';

export default function LoginPage({ onNavigate }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [email, setEmail] = useState('elena.rostova@wanderer.com');
  const [password, setPassword] = useState('••••••••••••');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.login(email, password);
      setIsLoggedIn(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-4xl mx-auto py-space-md">
      {isLoggedIn ? (
        /* Member Dashboard */
        <div className="flex flex-col gap-6">
          {/* Profile Card */}
          <div className="bg-primary-container text-white p-space-lg md:p-space-xl rounded-3xl relative overflow-hidden shadow-xl border border-white/10">
            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-2xl shadow-lg ring-4 ring-white/10">
                  ER
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 backdrop-blur-md text-secondary-fixed font-label-caps text-[10px] uppercase font-bold mb-1 border border-white/10">
                    Explorer Club · Tier 1 Black
                  </div>
                  <h1 className="font-headline-md font-bold text-white">Elena Rostova</h1>
                  <p className="font-body-sm text-surface-container-highest/80 text-xs">
                    Member since 2023 · ID: #NV-88421
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsLoggedIn(false)}
                className="self-start md:self-auto px-5 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white font-label-sm font-semibold transition-colors border border-white/10 cursor-pointer"
              >
                Sign Out
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-white/10">
              <div className="text-center">
                <span className="font-headline-sm font-bold text-white block">4</span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest">
                  Completed Odysseys
                </span>
              </div>
              <div className="text-center">
                <span className="font-headline-sm font-bold text-secondary-fixed block">120k</span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest">
                  Tier Miles
                </span>
              </div>
              <div className="text-center">
                <span className="font-headline-sm font-bold text-white block">24/7</span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest">
                  VIP Direct Line
                </span>
              </div>
            </div>
          </div>

          {/* Exclusive Member Benefits */}
          <div className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-high/40 shadow-sm">
            <h3 className="font-headline-sm text-base font-bold text-on-surface mb-4">
              Your Explorer Privileges
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary text-2xl">flight</span>
                <div>
                  <h4 className="font-label-md font-bold text-on-surface">Private Jet Co-Sharing</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Exclusive empty-leg flight opportunities to Mediterranean and Alpine hubs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-surface-container-low rounded-xl">
                <span className="material-symbols-outlined text-secondary text-2xl">key</span>
                <div>
                  <h4 className="font-label-md font-bold text-on-surface">Unlisted Sanctuaries</h4>
                  <p className="font-body-sm text-xs text-on-surface-variant">
                    Access to off-market Italian villas, Scottish castles, and Kyoto tea estates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-4">
            <button
              onClick={() => onNavigate('saved')}
              className="flex-1 h-12 rounded-xl bg-secondary text-white font-label-md font-semibold hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">bookmark</span>
              <span>View Saved Vault</span>
            </button>
            <button
              onClick={() => onNavigate('destinations')}
              className="flex-1 h-12 rounded-xl bg-primary-container text-white font-label-md font-semibold hover:bg-secondary transition-colors shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">public</span>
              <span>Browse All Sanctuaries</span>
            </button>
          </div>
        </div>
      ) : (
        /* Sign-In Card */
        <div className="max-w-md mx-auto w-full bg-surface-container-lowest p-8 rounded-3xl border border-surface-container-high/60 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary-container text-secondary-fixed flex items-center justify-center mx-auto mb-2">
              <span className="material-symbols-outlined text-2xl">explore</span>
            </div>
            <h2 className="font-headline-md font-bold text-on-surface">
              Explorer Club Sign In
            </h2>
            <p className="font-body-sm text-xs text-on-surface-variant mt-1">
              Enter your privileged credentials to access private itineraries and bookings.
            </p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div>
              <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                Explorer Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
              />
            </div>

            <div>
              <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                Passphrase
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 h-12 rounded-xl bg-primary-container text-white font-label-md font-semibold hover:bg-secondary transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">login</span>
              <span>{loading ? 'Authenticating...' : 'Sign In to Portal'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsLoggedIn(true)}
              className="text-xs text-secondary font-semibold hover:underline text-center mt-2 cursor-pointer"
            >
              Demo: Quick Sign In as Elena Rostova
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

