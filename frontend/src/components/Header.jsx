import React from 'react';

export default function Header({ onOpenDrawer, onNavigate, currentPage }) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-container-lowest/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-16 px-gutter-sm flex items-center justify-between max-w-7xl mx-auto">
        {/* Left: Menu trigger & Logo */}
        <div className="flex items-center gap-space-sm">
          <button
            type="button"
            aria-label="Open Menu"
            onClick={onOpenDrawer}
            className="w-11 h-11 flex items-center justify-center rounded-full text-primary-container hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>

          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="flex items-center gap-space-xs text-left cursor-pointer focus:outline-none"
          >
            {/* Compass Emblem SVG / Icon */}
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed shadow-sm">
              <span className="material-symbols-outlined text-xl">explore</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary-container">
              NOVA
            </span>
          </button>
        </div>

        {/* Desktop Quick Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => onNavigate('home')}
            className={`font-label-md text-label-md font-medium transition-colors ${
              currentPage === 'home' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('destinations')}
            className={`font-label-md text-label-md font-medium transition-colors ${
              currentPage === 'destinations' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            Destinations
          </button>
          <button
            onClick={() => onNavigate('experiences')}
            className={`font-label-md text-label-md font-medium transition-colors ${
              currentPage === 'experiences' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`font-label-md text-label-md font-medium transition-colors ${
              currentPage === 'about' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className={`font-label-md text-label-md font-medium transition-colors ${
              currentPage === 'contact' ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-primary-container'
            }`}
          >
            Contact
          </button>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-space-xs">
          <button
            type="button"
            aria-label="Search"
            onClick={() => onNavigate('destinations')}
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">search</span>
          </button>

          <button
            type="button"
            aria-label="Saved Wishlist"
            onClick={() => onNavigate('saved')}
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low hover:text-secondary transition-colors"
          >
            <span className="material-symbols-outlined text-xl">bookmark</span>
          </button>

          <button
            type="button"
            aria-label="Profile"
            onClick={() => onNavigate('login')}
            className="w-11 h-11 flex items-center justify-center cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xs ring-2 ring-surface-container-lowest shadow-[0_2px_8px_rgba(10,25,47,0.12)]">
              ER
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

