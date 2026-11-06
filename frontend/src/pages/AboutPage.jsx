import React from 'react';

export default function AboutPage({ onNavigate }) {
  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-7xl mx-auto py-space-md">
      {/* Hero Intro */}
      <div className="mb-space-lg text-center max-w-3xl mx-auto">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block mb-1">
          OUR MISSION & ETHOS
        </span>
        <h1 className="font-display-hero-mobile md:font-headline-xl font-bold text-on-surface tracking-tight mb-3">
          Redefining the Frontiers of Luxury Travel
        </h1>
        <p className="font-body-md text-on-surface-variant leading-relaxed">
          NOVA was born in 2021 to dismantle the homogenization of modern luxury tourism. We believe travel should be an architectural art form—intimate, unexpected, and restorative.
        </p>
      </div>

      {/* Narrative Section with Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-space-xl">
        <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-[420px] bg-cover bg-center" style={{ backgroundImage: `url('/images/kyoto.png')` }}>
          <div className="w-full h-full bg-gradient-to-t from-primary-container/80 via-transparent to-transparent flex items-end p-6">
            <span className="text-white font-label-md font-semibold">
              Kansai Sanctuary, Kyoto · Preserved Ryokan Grounds
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-label-caps text-xs uppercase text-secondary font-bold">
            ARCHITECTURAL EXCLUSIVITY
          </span>
          <h2 className="font-headline-md font-bold text-on-surface leading-tight">
            Every journey is sculpted by human connoisseurs, not algorithms.
          </h2>
          <p className="font-body-sm text-on-surface-variant leading-relaxed">
            In an era of mass aggregation, NOVA operates on the principle of bespoke regional intimacy. Our team maintains personal relationships with fifth-generation Venetian gondola builders, Bedouin stargazers, and private island conservationists.
          </p>
          <p className="font-body-sm text-on-surface-variant leading-relaxed">
            We vet every single estate, catamaran, and cliffside sanctuary against rigorous aesthetic, safety, and sustainable standards before it enters our curated catalog.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('destinations')}
              className="px-6 h-11 rounded-full bg-primary-container text-white font-label-md font-semibold hover:bg-secondary transition-colors cursor-pointer"
            >
              Discover Our Sanctuaries
            </button>
          </div>
        </div>
      </div>

      {/* 3 Pillars */}
      <div className="bg-primary-container text-white rounded-3xl p-space-lg md:p-space-xl mb-space-lg">
        <div className="text-center max-w-2xl mx-auto mb-space-lg">
          <span className="font-label-caps text-secondary-fixed uppercase tracking-wider font-bold">
            FOUNDATIONAL PILLARS
          </span>
          <h2 className="font-headline-lg font-bold text-white mt-1">
            The NOVA Standard of Perfection
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <span className="font-display-hero-mobile text-secondary-fixed font-bold block mb-2">
              01
            </span>
            <h3 className="font-headline-sm font-bold text-white mb-2">
              Handcrafted Precision
            </h3>
            <p className="font-body-sm text-surface-container-highest/80 leading-relaxed">
              Every detail of your itinerary—from private helicopter corridors to unlisted temple garden keys—is designed by a dedicated master specialist.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <span className="font-display-hero-mobile text-secondary-fixed font-bold block mb-2">
              02
            </span>
            <h3 className="font-headline-sm font-bold text-white mb-2">
              Verified Sanctuaries
            </h3>
            <p className="font-body-sm text-surface-container-highest/80 leading-relaxed">
              We reject 94% of properties reviewed. We only list private residences and suites that provide transcendent architectural and natural privacy.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
            <span className="font-display-hero-mobile text-secondary-fixed font-bold block mb-2">
              03
            </span>
            <h3 className="font-headline-sm font-bold text-white mb-2">
              24/7 Dedicated Concierge
            </h3>
            <p className="font-body-sm text-surface-container-highest/80 leading-relaxed">
              From last-minute table reservations at 3-star Michelin venues to seamless private medical transfers, your native concierge is always on hand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

