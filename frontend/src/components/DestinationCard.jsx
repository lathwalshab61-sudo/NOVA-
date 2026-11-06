import React from 'react';

export default function DestinationCard({
  destination,
  isSaved,
  onToggleSaved,
  onSelect
}) {
  return (
    <article className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-md shadow-primary-container/5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/10 flex flex-col">
      {/* Image & Overlay Badges */}
      <div
        className="relative h-60 w-full bg-cover bg-center cursor-pointer group"
        style={{ backgroundImage: `url('${destination.image}')` }}
        onClick={() => onSelect(destination)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-primary-container/85 via-transparent to-black/30 group-hover:from-primary-container/90 transition-all" />

        {/* Top Badges & Wishlist Button */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <span className="px-2.5 py-1 rounded-full bg-primary-container/70 backdrop-blur-md text-white font-label-caps text-[10px] uppercase font-bold tracking-wider">
            {destination.region}
          </span>
          <button
            type="button"
            aria-label="Save to wishlist"
            onClick={(e) => {
              e.stopPropagation();
              onToggleSaved(destination.id);
            }}
            className={`w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center transition-transform active:scale-90 ${
              isSaved ? 'text-error' : 'text-on-surface hover:text-error'
            }`}
          >
            <span
              className="material-symbols-outlined text-xl leading-none"
              style={{ fontVariationSettings: `'FILL' ${isSaved ? 1 : 0}` }}
            >
              {isSaved ? 'favorite' : 'favorite_border'}
            </span>
          </button>
        </div>

        {/* Bottom Information on Image */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white z-10">
          <div>
            <h3 className="font-headline-sm text-headline-sm font-bold leading-tight drop-shadow-sm">
              {destination.title}
            </h3>
            <p className="font-label-sm text-label-sm text-surface-container-highest/90">
              {destination.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-lowest/20 backdrop-blur-md px-2 py-0.5 rounded-full shrink-0">
            <span
              className="material-symbols-outlined text-sm text-secondary-fixed fill-current"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              {destination.rating}
            </span>
            <span className="font-label-caps text-[10px] text-surface-container-highest">
              ({destination.reviewsCount})
            </span>
          </div>
        </div>
      </div>

      {/* Card Content & Action */}
      <div className="p-space-md flex-1 flex flex-col justify-between gap-space-sm">
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {destination.overview}
        </p>

        <div className="flex items-center justify-between pt-2 border-t border-surface-container-low">
          <div>
            <span className="font-label-caps text-[10px] uppercase text-outline block">
              CURATED EXPEDITION
            </span>
            <span className="font-label-md text-label-md text-on-surface font-bold">
              From ${destination.startingPrice.toLocaleString()}{' '}
              <span className="font-normal text-on-surface-variant">/ guest</span>
            </span>
          </div>
          <button
            type="button"
            onClick={() => onSelect(destination)}
            className="h-10 px-5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md font-semibold active:scale-95 hover:bg-secondary-container hover:text-on-secondary-container transition-all shadow-sm"
          >
            Explore
          </button>
        </div>
      </div>
    </article>
  );
}

