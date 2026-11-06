import React, { useState } from 'react';
import { api } from '../services/api.js';

export default function DestinationDetailPage({
  destination,
  isSaved,
  onToggleSaved,
  onBack,
  onNavigate
}) {
  const [activeDay, setActiveDay] = useState(1);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryGuests, setInquiryGuests] = useState(2);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!destination) {
    return (
      <div className="py-20 text-center max-w-md mx-auto px-4">
        <h2 className="font-headline-md font-bold mb-2">Destination Not Found</h2>
        <p className="font-body-sm text-on-surface-variant mb-4">Please return to the destinations catalog.</p>
        <button
          onClick={onBack}
          className="px-6 h-11 rounded-full bg-secondary text-white font-label-md font-semibold"
        >
          Back to Destinations
        </button>
      </div>
    );
  }

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!inquiryEmail) return;

    setLoading(true);
    try {
      await api.submitInquiry({
        name: inquiryName,
        email: inquiryEmail,
        destination: destination.title,
        tier: destination.tier,
        guests: inquiryGuests,
        type: 'destination_booking'
      });
      setBookingSuccess(true);
    } catch {
      setBookingSuccess(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full pb-16">
      {/* Top Banner & Hero */}
      <div className="relative h-[420px] md:h-[500px] w-full bg-cover bg-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${destination.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-primary-container/40 to-black/50" />

        {/* Back and Wishlist Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-gutter-sm pt-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-full bg-surface-container-lowest/20 backdrop-blur-md text-white font-label-md font-semibold hover:bg-surface-container-lowest/30 transition-all border border-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            <span>Back</span>
          </button>

          <button
            onClick={() => onToggleSaved(destination.id)}
            className={`w-11 h-11 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center transition-transform active:scale-90 ${
              isSaved ? 'text-error' : 'text-on-surface hover:text-error'
            }`}
          >
            <span
              className="material-symbols-outlined text-2xl"
              style={{ fontVariationSettings: `'FILL' ${isSaved ? 1 : 0}` }}
            >
              {isSaved ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </div>

        {/* Bottom Hero Info */}
        <div className="absolute bottom-6 inset-x-0 z-10 max-w-7xl mx-auto px-gutter-sm text-white">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container/80 backdrop-blur-md text-white font-label-caps text-[11px] uppercase tracking-wider mb-2 border border-white/10">
            {destination.region}
          </div>
          <h1 className="font-display-hero-mobile md:font-headline-xl font-bold leading-tight drop-shadow-md">
            {destination.title}
          </h1>
          <p className="font-headline-sm text-surface-container-highest/95 drop-shadow-sm mt-1">
            {destination.subtitle}
          </p>

          <div className="flex items-center gap-4 mt-3 flex-wrap">
            <div className="flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span
                className="material-symbols-outlined text-sm text-secondary-fixed fill-current"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                star
              </span>
              <span className="font-label-md font-bold">{destination.rating}</span>
              <span className="font-label-sm text-surface-container-highest">
                ({destination.reviewsCount} reviews)
              </span>
            </div>

            <div className="flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm text-secondary-fixed">
                schedule
              </span>
              <span className="font-label-sm">{destination.duration}</span>
            </div>

            <div className="flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
              <span className="material-symbols-outlined text-sm text-secondary-fixed">
                villa
              </span>
              <span className="font-label-sm">{destination.tier}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-gutter-sm mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (Details & Itinerary) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          {/* Overview */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/40">
            <h2 className="font-headline-sm font-bold text-on-surface mb-3">
              Expedition Overview
            </h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed mb-4">
              {destination.overview}
            </p>
            <div className="p-space-md bg-surface-container-low rounded-xl border-l-4 border-secondary flex items-start gap-3">
              <span className="material-symbols-outlined text-secondary text-2xl shrink-0">
                auto_awesome
              </span>
              <div>
                <span className="font-label-caps text-[10px] uppercase text-secondary font-bold tracking-wider block">
                  SIGNATURE HIGHLIGHT
                </span>
                <p className="font-label-md font-semibold text-on-surface mt-0.5">
                  {destination.highlight}
                </p>
              </div>
            </div>
          </div>

          {/* Curated Day-by-Day Itinerary */}
          {destination.itinerary && destination.itinerary.length > 0 && (
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/40">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-headline-sm font-bold text-on-surface">
                  Curated Itinerary
                </h2>
                <span className="font-label-sm text-secondary font-semibold">
                  {destination.itinerary.length} Days Experience
                </span>
              </div>

              {/* Day Selector Buttons */}
              <div className="flex gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
                {destination.itinerary.map((item) => (
                  <button
                    key={item.day}
                    onClick={() => setActiveDay(item.day)}
                    className={`px-4 py-2 rounded-xl font-label-md font-semibold whitespace-nowrap transition-all cursor-pointer ${
                      activeDay === item.day
                        ? 'bg-primary-container text-white shadow-md'
                        : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
                    }`}
                  >
                    Day {item.day}
                  </button>
                ))}
              </div>

              {/* Active Day Card */}
              {destination.itinerary
                .filter((d) => d.day === activeDay)
                .map((dayPlan) => (
                  <div
                    key={dayPlan.day}
                    className="p-space-md bg-surface-container-low rounded-xl border border-surface-container-high/50"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-8 h-8 rounded-full bg-secondary text-white font-bold text-xs flex items-center justify-center">
                        D{dayPlan.day}
                      </span>
                      <h3 className="font-label-md font-bold text-on-surface text-base">
                        {dayPlan.title}
                      </h3>
                    </div>
                    <p className="font-body-sm text-on-surface-variant leading-relaxed">
                      {dayPlan.description}
                    </p>
                  </div>
                ))}
            </div>
          )}

          {/* Inclusions */}
          {destination.inclusions && (
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm border border-surface-container-high/40">
              <h2 className="font-headline-sm font-bold text-on-surface mb-3">
                Bespoke Inclusions
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {destination.inclusions.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-xl shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-sm text-on-surface font-medium">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column: Booking Box & Concierge Card */}
        <div className="flex flex-col gap-6">
          {/* Reservation Card */}
          <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-lg border border-surface-container-high/60 sticky top-24">
            <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-surface-container-low">
              <div>
                <span className="font-label-caps text-[10px] uppercase text-outline block">
                  FROM
                </span>
                <span className="font-headline-md font-bold text-on-surface">
                  ${destination.startingPrice.toLocaleString()}
                </span>
                <span className="font-body-sm text-on-surface-variant"> / guest</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-caps text-[10px] uppercase font-bold">
                Ultra-Exclusive
              </span>
            </div>

            {bookingSuccess ? (
              <div className="bg-surface-container-low p-4 rounded-xl text-center border border-secondary/30">
                <span className="material-symbols-outlined text-4xl text-secondary mb-2">
                  task_alt
                </span>
                <h4 className="font-headline-sm text-base font-bold text-on-surface mb-1">
                  Inquiry Dispatched!
                </h4>
                <p className="font-body-sm text-xs text-on-surface-variant">
                  A senior expedition curator from the NOVA Concierge team will reach out to you within 4 hours.
                </p>
                <button
                  onClick={() => setBookingSuccess(false)}
                  className="mt-3 text-xs font-semibold text-secondary hover:underline cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="flex flex-col gap-3">
                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Elena Rostova"
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md placeholder:text-outline/70 focus:outline-none border border-surface-container-high"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="name@exclusive.com"
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md placeholder:text-outline/70 focus:outline-none border border-surface-container-high"
                  />
                </div>

                <div>
                  <label className="block font-label-caps text-[10px] uppercase text-on-surface-variant font-semibold mb-1">
                    Number of Guests
                  </label>
                  <select
                    value={inquiryGuests}
                    onChange={(e) => setInquiryGuests(Number(e.target.value))}
                    className="w-full h-11 px-3 rounded-xl bg-surface-container-low text-on-surface font-label-md focus:outline-none border border-surface-container-high cursor-pointer"
                  >
                    <option value={1}>1 Guest (Solo Odyssey)</option>
                    <option value={2}>2 Guests (Couple Private)</option>
                    <option value={4}>4 Guests (Private Villa)</option>
                    <option value={8}>8+ Guests (Full Charter)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 w-full h-12 rounded-xl bg-secondary text-on-secondary font-label-md font-semibold flex items-center justify-center gap-2 hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-md shadow-secondary/20 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  <span>{loading ? 'Reserving...' : 'Request Bespoke Itinerary'}</span>
                </button>

                <p className="font-body-sm text-[11px] text-center text-outline mt-1">
                  No commitment. Includes 24/7 dedicated native liaison & cancellation guarantee.
                </p>
              </form>
            )}
          </div>

          {/* Concierge Assurance */}
          <div className="bg-primary-container text-white p-space-md rounded-2xl border border-white/10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-2xl">support_agent</span>
            </div>
            <div>
              <h4 className="font-label-md font-bold text-white">Direct Concierge Service</h4>
              <p className="font-body-sm text-[12px] text-surface-container-highest/80">
                Call: +1 (800) 555-NOVA for instant jet and villa availability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

