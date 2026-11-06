import React from 'react';

export default function CategoryPills({ selectedCategory, onSelectCategory }) {
  const categories = [
    { id: 'all', label: 'All Journeys', icon: 'explore' },
    { id: 'adventure', label: 'Adventure', icon: 'hiking' },
    { id: 'beaches', label: 'Beaches', icon: 'beach_access' },
    { id: 'mountains', label: 'Mountains', icon: 'landscape' },
    { id: 'historical', label: 'Heritage', icon: 'temple_hindu' },
    { id: 'culture', label: 'Culture', icon: 'local_cafe' },
  ];

  return (
    <section className="mt-space-lg px-gutter-sm max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-space-sm">
        <span className="font-label-caps text-label-caps uppercase text-secondary font-bold tracking-widest">
          DISCOVER CATEGORIES
        </span>
        <span className="font-label-sm text-label-sm text-on-surface-variant">
          6 Genres
        </span>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 -mx-gutter-sm px-gutter-sm no-scrollbar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 h-10 rounded-full font-label-md text-label-md whitespace-nowrap shadow-sm transition-all cursor-pointer ${
                isActive
                  ? 'bg-primary-container text-on-primary font-semibold'
                  : 'bg-surface-container-lowest text-on-surface-variant font-medium hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

