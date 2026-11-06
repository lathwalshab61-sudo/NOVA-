import React, { useState } from 'react';

export default function PlannerSearch({ onSearch, onBook }) {
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('Oct 12 – 22');
  const [tier, setTier] = useState('2 · Luxury Villa');
  const [submitted, setSubmitted] = useState(false);

  const quickPicks = [
    { label: 'Amalfi', val: 'Amalfi Coast, Italy' },
    { label: 'Santorini', val: 'Santorini, Greece' },
    { label: 'Kyoto', val: 'Kyoto & Arashiyama' },
    { label: 'Maldives', val: 'Baa Atoll, Maldives' },
    { label: 'Patagonia', val: 'Patagonia, Chile' },
    { label: 'Zermatt', val: 'Zermatt & Matterhorn' },
  ];

  const handleExecute = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(destination);
    }
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="relative px-gutter-sm -mt-6 z-20 max-w-4xl mx-auto">
      <div className="bg-surface-container-lowest rounded-2xl p-space-md shadow-xl shadow-primary-container/10 border border-surface-container-high/40">
        <div className="flex items-center justify-between mb-space-sm">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary text-lg">flight_takeoff</span>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-wider">
              Bespoke Planner
            </span>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
            Step 1 of 3
          </span>
        </div>

        <form onSubmit={handleExecute} className="flex flex-col gap-space-xs">
          {/* Destination Autocomplete Field */}
          <div className="relative bg-surface-container-low rounded-xl p-space-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-xl">location_on</span>
              <div className="flex-1 min-w-0">
                <label
                  className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold"
                  htmlFor="search-input"
                >
                  Where to?
                </label>
                <input
                  id="search-input"
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="e.g. Amalfi, Positano, Kyoto, Maldives"
                  className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold placeholder:text-outline/70 focus:outline-none truncate"
                />
              </div>
            </div>

            {/* Quick Picks chips */}
            <div className="flex gap-1.5 overflow-x-auto pt-2 pb-0.5 no-scrollbar">
              {quickPicks.map((pick) => (
                <button
                  key={pick.label}
                  type="button"
                  onClick={() => setDestination(pick.val)}
                  className={`px-2.5 py-1 rounded-full font-label-sm text-[11px] whitespace-nowrap transition-colors ${
                    destination === pick.val
                      ? 'bg-secondary text-on-secondary font-bold'
                      : 'bg-surface-container-highest/60 text-on-surface-variant hover:bg-secondary/20'
                  }`}
                >
                  {pick.label}
                </button>
              ))}
            </div>
          </div>

          {/* Date & Style Row */}
          <div className="grid grid-cols-2 gap-space-xs">
            {/* Travel Dates */}
            <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">calendar_month</span>
              <div className="min-w-0 flex-1">
                <span className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold">
                  Dates
                </span>
                <input
                  type="text"
                  value={dates}
                  onChange={(e) => setDates(e.target.value)}
                  className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold truncate focus:outline-none"
                />
              </div>
            </div>

            {/* Style & Tier */}
            <div className="bg-surface-container-low rounded-xl p-space-sm flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">villa</span>
              <div className="min-w-0 flex-1">
                <span className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold">
                  Tier
                </span>
                <input
                  type="text"
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full bg-transparent font-label-md text-label-md text-on-surface font-semibold truncate focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            className="w-full mt-1 h-12 rounded-xl bg-primary-container text-on-primary font-label-md text-label-md font-semibold flex items-center justify-center gap-2 active:bg-secondary hover:bg-secondary transition-colors shadow-md shadow-primary-container/20 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">
              {submitted ? 'check' : 'search'}
            </span>
            <span>{submitted ? 'Preferences Applied' : 'Find Experiences'}</span>
          </button>
        </form>
      </div>
    </section>
  );
}

