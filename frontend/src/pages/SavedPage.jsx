import React from 'react';
import DestinationCard from '../components/DestinationCard.jsx';

export default function SavedPage({
  destinations,
  savedIds,
  onToggleSaved,
  onSelectDestination,
  onNavigate
}) {
  const savedDestinations = destinations.filter((dest) =>
    savedIds.includes(dest.id)
  );

  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-7xl mx-auto py-space-md">
      <div className="mb-space-md">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
          PERSONAL VAULT
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
          Saved Wishlist & Expeditions
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
          Review your shortlisted sanctuaries, compare private charters, and dispatch your collection to our concierge liaisons.
        </p>
      </div>

      {savedDestinations.length > 0 ? (
        <div>
          <div className="flex items-center justify-between mb-space-sm">
            <span className="font-label-sm text-on-surface-variant">
              You have <span className="font-bold text-on-surface">{savedDestinations.length}</span> destinations in your vault
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
            {savedDestinations.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                isSaved={true}
                onToggleSaved={onToggleSaved}
                onSelect={onSelectDestination}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-surface-container-lowest p-12 rounded-2xl text-center border border-surface-container-high/50 my-8">
          <span className="material-symbols-outlined text-5xl text-outline mb-2">
            bookmark_border
          </span>
          <h3 className="font-headline-sm font-bold text-on-surface mb-1">
            Your Wishlist is Empty
          </h3>
          <p className="font-body-sm text-on-surface-variant mb-4">
            Explore our curated destinations and tap the bookmark or heart icon to save itineraries to your vault.
          </p>
          <button
            onClick={() => onNavigate('destinations')}
            className="px-6 h-10 rounded-full bg-secondary text-on-secondary font-label-md font-semibold cursor-pointer"
          >
            Explore Destinations
          </button>
        </div>
      )}
    </div>
  );
}

