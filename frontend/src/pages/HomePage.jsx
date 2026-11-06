import React, { useState } from 'react';
import PlannerSearch from '../components/PlannerSearch.jsx';
import CategoryPills from '../components/CategoryPills.jsx';
import DestinationCard from '../components/DestinationCard.jsx';

export default function HomePage({
  destinations,
  experiences,
  testimonials,
  savedIds,
  onToggleSaved,
  onSelectDestination,
  onNavigate
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filmOpen, setFilmOpen] = useState(false);

  // Filtered popular destinations
  const filteredDestinations = destinations.filter((dest) => {
    const matchesCat =
      selectedCategory === 'all' ||
      dest.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesQuery =
      !searchQuery ||
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.region.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full overflow-hidden bg-primary-container text-on-primary">
        {/* Hero Image Layer */}
        <div
          className="relative w-full h-[540px] md:h-[600px] bg-cover bg-center"
          style={{ backgroundImage: `url('/images/amalfi.png')` }}
        >
          {/* Gradient scrim overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-black/30" />
          <div className="absolute inset-0 bg-radial from-transparent to-primary-container/70" />

          {/* Hero Content */}
          <div className="relative h-full max-w-7xl mx-auto flex flex-col justify-end px-gutter-sm pb-space-lg z-10">
            {/* Floating Pill Badge */}
            <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-surface-container-lowest/20 backdrop-blur-md shadow-sm mb-space-sm border border-white/10">
              <span className="text-secondary-fixed text-xs font-semibold">✦</span>
              <span className="font-label-caps text-label-caps tracking-wider text-surface-container-lowest font-medium uppercase">
                Curated Journeys 2025
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero font-bold tracking-tight text-white mb-space-xs leading-tight">
              Explore <span className="text-secondary-fixed">Beyond</span> Boundaries
            </h1>

            {/* Subtitle */}
            <p className="font-body-sm md:font-body-xl text-body-sm md:text-body-xl text-surface-container-highest/90 max-w-xl mb-space-md leading-relaxed">
              Bespoke expeditions, private hideaways, and immersive cultural odysseys tailored for discerning wanderers.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex items-center gap-space-sm mb-space-lg flex-wrap">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('destinations-gallery');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  else onNavigate('destinations');
                }}
                className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold shadow-lg shadow-secondary/25 active:scale-95 hover:bg-secondary-container hover:text-on-secondary-container transition-all cursor-pointer"
              >
                <span>Explore Destinations</span>
                <span className="material-symbols-outlined text-base">arrow_downward</span>
              </button>

              <button
                type="button"
                onClick={() => setFilmOpen(true)}
                className="inline-flex items-center gap-1.5 h-11 px-4 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-surface-container-lowest font-label-md text-label-md font-medium active:scale-95 hover:bg-surface-container-lowest/25 transition-all cursor-pointer border border-white/10"
              >
                <span className="material-symbols-outlined text-lg text-secondary-fixed">
                  play_circle
                </span>
                <span>Expedition Reel</span>
              </button>
            </div>

            {/* Stat Indicators */}
            <div className="grid grid-cols-3 gap-2 pt-space-sm bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-2.5 max-w-md border border-white/10">
              <div className="text-center">
                <span className="block font-headline-sm text-headline-sm font-bold text-white leading-tight">
                  450+
                </span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest tracking-wider">
                  Destinations
                </span>
              </div>
              <div className="text-center">
                <span className="block font-headline-sm text-headline-sm font-bold text-secondary-fixed leading-tight">
                  98%
                </span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest tracking-wider">
                  Curated Rating
                </span>
              </div>
              <div className="text-center">
                <span className="block font-headline-sm text-headline-sm font-bold text-white leading-tight">
                  12k+
                </span>
                <span className="font-label-caps text-[10px] uppercase text-surface-container-highest tracking-wider">
                  Explorers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expedition Film Modal */}
      {filmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-primary-container text-white rounded-2xl p-6 max-w-lg w-full border border-white/20 shadow-2xl relative">
            <button
              onClick={() => setFilmOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-secondary-fixed text-2xl">
                movie
              </span>
              <h3 className="font-headline-sm text-headline-sm font-bold">
                NOVA 4K Expedition Reel
              </h3>
            </div>
            <p className="font-body-sm text-surface-container-highest/90 mb-4">
              Immerse yourself in high-definition cinematography across the Amalfi clifftops, Oia volcanic calderas, and private Maldivian atolls.
            </p>
            <div className="h-48 rounded-xl bg-black/50 flex flex-col items-center justify-center border border-white/10 relative overflow-hidden">
              <span className="material-symbols-outlined text-5xl text-secondary animate-pulse mb-2">
                play_circle
              </span>
              <span className="font-label-sm text-white/80">Streaming 4K Ultra-HDR</span>
            </div>
            <button
              onClick={() => setFilmOpen(false)}
              className="mt-4 w-full h-11 rounded-full bg-secondary text-on-secondary font-label-md font-semibold cursor-pointer"
            >
              Back to Exploration
            </button>
          </div>
        </div>
      )}

      {/* 2. FLOATING SEARCH & TRIP PLANNER */}
      <PlannerSearch
        onSearch={(query) => {
          setSearchQuery(query);
          const el = document.getElementById('destinations-gallery');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 3. TRAVEL CATEGORIES */}
      <CategoryPills
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* 4. POPULAR DESTINATIONS */}
      <section
        id="destinations-gallery"
        className="mt-space-lg px-gutter-sm scroll-mt-20 max-w-7xl mx-auto w-full"
      >
        <div className="flex items-end justify-between mb-space-sm">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
              HANDPICKED WONDERS
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
              Popular Destinations
            </h2>
          </div>
          <button
            onClick={() => onNavigate('destinations')}
            className="font-label-md text-label-md text-secondary font-semibold inline-flex items-center gap-0.5 mb-1 hover:underline cursor-pointer"
          >
            <span>View All ({destinations.length})</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-space-md">
          {filteredDestinations.slice(0, 4).map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSaved={savedIds.includes(dest.id)}
              onToggleSaved={onToggleSaved}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      </section>

      {/* 5. FEATURED EXPERIENCES */}
      <section className="mt-space-lg px-gutter-sm max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-space-sm">
          <div>
            <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
              IMMERSIVE ITINERARIES
            </span>
            <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
              Featured Experiences
            </h2>
          </div>
          <button
            onClick={() => onNavigate('experiences')}
            className="font-label-md text-label-md text-secondary font-semibold inline-flex items-center gap-0.5 hover:underline cursor-pointer"
          >
            <span>See All</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
          {experiences.slice(0, 3).map((exp) => (
            <div
              key={exp.id}
              className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between border border-surface-container-high/40 hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="font-label-caps text-[10px] uppercase text-secondary font-bold">
                      {exp.location} · {exp.duration}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-bold text-on-surface mt-0.5">
                      {exp.title}
                    </h3>
                  </div>
                  <span className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-xl">{exp.icon}</span>
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-2 leading-relaxed">
                  {exp.tagline}
                </p>
              </div>

              <div className="pt-3">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-surface-container-low font-label-sm text-[11px] text-on-surface-variant"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onNavigate('experiences')}
                  className="w-full h-9 rounded-xl bg-surface-container-low hover:bg-secondary hover:text-white text-primary-container font-label-sm font-semibold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                >
                  <span>Explore Itinerary</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT NOVA SECTION */}
      <section className="mt-space-lg mx-gutter-sm bg-primary-container text-on-primary rounded-2xl p-space-md md:p-space-xl relative overflow-hidden shadow-lg max-w-7xl lg:mx-auto">
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-secondary/15 rounded-full blur-2xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-xs">explore</span>
            </div>
            <span className="font-label-caps text-label-caps uppercase text-secondary-fixed font-bold tracking-widest">
              ABOUT NOVA
            </span>
          </div>
          <h2 className="font-headline-lg text-headline-lg font-bold text-white tracking-tight mb-space-xs leading-tight">
            Crafting journeys you'll carry for a lifetime.
          </h2>
          <p className="font-body-sm md:font-body-md text-body-sm md:text-body-md text-surface-container-highest/85 leading-relaxed mb-space-md">
            Founded in 2021, NOVA was born to dismantle generic mass tourism. We connect curious travelers with hyper-personalized expeditions, unlisted heritage sanctuaries, and sustainable luxury.
          </p>

          {/* 3 Value Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-sm flex items-start gap-3 border border-white/5">
              <span className="font-label-caps text-label-caps text-secondary-fixed font-mono font-bold mt-0.5">
                01
              </span>
              <div>
                <h3 className="font-label-md text-label-md font-bold text-white">
                  Handcrafted Itineraries
                </h3>
                <p className="font-body-sm text-[12px] text-surface-container-highest/80 leading-normal mt-0.5">
                  Zero automated algorithms. 100% human travel connoisseurs with intimate regional mastery.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-sm flex items-start gap-3 border border-white/5">
              <span className="font-label-caps text-label-caps text-secondary-fixed font-mono font-bold mt-0.5">
                02
              </span>
              <div>
                <h3 className="font-label-md text-label-md font-bold text-white">
                  Verified Sanctuaries
                </h3>
                <p className="font-body-sm text-[12px] text-surface-container-highest/80 leading-normal mt-0.5">
                  Every cliffside villa, historic ryokan, and chartered catamaran is personally vetted and sustained.
                </p>
              </div>
            </div>

            <div className="bg-surface-container-lowest/10 backdrop-blur-md rounded-xl p-space-sm flex items-start gap-3 border border-white/5">
              <span className="font-label-caps text-label-caps text-secondary-fixed font-mono font-bold mt-0.5">
                03
              </span>
              <div>
                <h3 className="font-label-md text-label-md font-bold text-white">
                  24/7 Dedicated Concierge
                </h3>
                <p className="font-body-sm text-[12px] text-surface-container-highest/80 leading-normal mt-0.5">
                  On-the-ground native liaisons who smooth transitions, secure reservations, and adapt to whim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS & TRUST BADGES */}
      <section className="mt-space-lg px-gutter-sm max-w-7xl mx-auto w-full">
        <div className="mb-space-sm">
          <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
            REPUTATION
          </span>
          <h2 className="font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
            What Our Explorers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm border border-surface-container-high/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-secondary mb-2">
                  {[...Array(test.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="material-symbols-outlined text-base fill-current"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant italic leading-relaxed mb-space-sm">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-surface-container-low">
                {test.avatar ? (
                  <img
                    src={test.avatar}
                    alt={test.author}
                    className="w-10 h-10 rounded-full object-cover shadow-sm ring-1 ring-surface-container"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-sm">
                    {test.initials}
                  </div>
                )}
                <div>
                  <span className="font-label-md text-label-md font-bold text-on-surface block leading-tight">
                    {test.author}
                  </span>
                  <span className="font-label-sm text-[11px] text-secondary font-medium">
                    {test.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-space-md grid grid-cols-3 gap-2 bg-surface-container-low rounded-xl p-space-sm border border-surface-container-high/50">
          <div className="flex flex-col items-center justify-center text-center p-1">
            <span className="material-symbols-outlined text-secondary text-xl mb-1">
              verified
            </span>
            <span className="font-label-caps text-[9px] uppercase font-bold text-on-surface-variant">
              Forbes Travel
            </span>
            <span className="font-label-sm text-[10px] text-outline">Featured</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-1">
            <span className="material-symbols-outlined text-secondary text-xl mb-1">
              workspace_premium
            </span>
            <span className="font-label-caps text-[9px] uppercase font-bold text-on-surface-variant">
              Condé Nast
            </span>
            <span className="font-label-sm text-[10px] text-outline">Traveler Pick</span>
          </div>
          <div className="flex flex-col items-center justify-center text-center p-1">
            <span className="material-symbols-outlined text-secondary text-xl mb-1">eco</span>
            <span className="font-label-caps text-[9px] uppercase font-bold text-on-surface-variant">
              B-Corp
            </span>
            <span className="font-label-sm text-[10px] text-outline">Certified</span>
          </div>
        </div>
      </section>
    </div>
  );
}

