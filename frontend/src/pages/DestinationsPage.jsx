import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard.jsx';
import CategoryPills from '../components/CategoryPills.jsx';

export default function DestinationsPage({
  destinations,
  savedIds,
  onToggleSaved,
  onSelectDestination
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured'); // 'featured' | 'price-asc' | 'price-desc' | 'rating'

  // Filtering
  let filtered = destinations.filter((item) => {
    const matchCat =
      selectedCategory === 'all' ||
      item.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchSearch =
      !searchTerm ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.overview.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCat && matchSearch;
  });

  // Sorting
  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.startingPrice - b.startingPrice);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.startingPrice - a.startingPrice);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="flex flex-col w-full px-gutter-sm max-w-7xl mx-auto py-space-md">
      {/* Header Banner */}
      <div className="mb-space-md">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest block">
          CURATED PORTFOLIO
        </span>
        <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
          Destinations & Expeditions
        </h1>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-2xl mt-1">
          Explore our complete collection of privately chartered coastlines, alpine sanctuaries, and ancient UNESCO heritage locations.
        </p>
      </div>

      {/* Search & Sort Controls */}
      <div className="bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm border border-surface-container-high/40 flex flex-col sm:flex-row gap-3 items-center justify-between mb-space-md">
        {/* Search */}
        <div className="flex items-center gap-2 w-full sm:w-80 bg-surface-container-low px-3 py-2 rounded-xl">
          <span className="material-symbols-outlined text-secondary text-xl">search</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search regions, countries..."
            className="w-full bg-transparent font-label-md text-on-surface focus:outline-none"
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} className="text-outline hover:text-on-surface">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          )}
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="font-label-sm text-on-surface-variant text-xs font-medium">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-surface-container-low font-label-sm text-on-surface px-3 py-2 rounded-xl focus:outline-none cursor-pointer border-none"
          >
            <option value="featured">Featured Curations</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="-mx-gutter-sm mb-space-md">
        <CategoryPills
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-label-sm text-on-surface-variant">
          Showing <span className="font-bold text-on-surface">{filtered.length}</span> luxury destinations
        </span>
      </div>

      {/* Destinations Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {filtered.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isSaved={savedIds.includes(dest.id)}
              onToggleSaved={onToggleSaved}
              onSelect={onSelectDestination}
            />
          ))}
        </div>
      ) : (
        <div className="bg-surface-container-lowest p-12 rounded-2xl text-center border border-surface-container-high/50 my-8">
          <span className="material-symbols-outlined text-5xl text-outline mb-2">
            travel_explore
          </span>
          <h3 className="font-headline-sm font-bold text-on-surface mb-1">
            No Destinations Found
          </h3>
          <p className="font-body-sm text-on-surface-variant mb-4">
            We couldn't find any journeys matching "{searchTerm}". Try clearing your filters.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchTerm('');
            }}
            className="px-6 h-10 rounded-full bg-secondary text-on-secondary font-label-md font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}

