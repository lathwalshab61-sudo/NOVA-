import React from 'react';

export default function DrawerMenu({ isOpen, onClose, onNavigate, currentPage }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'explore' },
    { id: 'destinations', label: 'Destinations', icon: 'public' },
    { id: 'experiences', label: 'Experiences', icon: 'surfing' },
    { id: 'saved', label: 'Saved Wishlist', icon: 'bookmark' },
    { id: 'about', label: 'About Us', icon: 'info' },
    { id: 'contact', label: 'Contact', icon: 'mail' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-primary-container/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <aside
        className={`fixed top-0 left-0 bottom-0 z-50 w-72 max-w-[80vw] bg-surface-container-lowest shadow-[0_16px_36px_rgba(10,25,47,0.16)] transform transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-16 px-gutter-sm flex items-center justify-between border-b border-surface-container-high/60">
          <div className="flex items-center gap-space-xs">
            <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
              <span className="material-symbols-outlined text-base">explore</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-bold tracking-tight text-primary-container">
              NOVA
            </span>
          </div>
          <button
            aria-label="Close Menu"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>
        </div>

        <nav className="flex-1 px-space-md py-space-sm flex flex-col gap-space-xs overflow-y-auto">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose();
                }}
                className={`flex items-center gap-space-sm h-12 px-space-md rounded-xl font-label-md text-label-md transition-colors text-left w-full ${
                  isActive
                    ? 'bg-surface-container-low text-primary-container font-semibold shadow-sm'
                    : 'text-on-surface-variant hover:text-primary-container hover:bg-surface-container-low font-medium'
                }`}
              >
                <span
                  className={`material-symbols-outlined text-xl ${
                    isActive ? 'text-secondary' : ''
                  }`}
                >
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-space-md border-t border-surface-container-high/60">
          <button
            onClick={() => {
              onNavigate('login');
              onClose();
            }}
            className="flex items-center justify-center h-12 w-full rounded-full bg-primary-container text-on-primary font-label-md text-label-md font-semibold shadow-[0_4px_12px_rgba(10,25,47,0.15)] hover:bg-secondary transition-colors"
          >
            Explorer Portal / Login
          </button>
        </div>
      </aside>
    </>
  );
}

