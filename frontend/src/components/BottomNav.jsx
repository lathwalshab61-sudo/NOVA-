import React from 'react';

export default function BottomNav({ currentPage, onNavigate }) {
  const tabs = [
    { id: 'home', label: 'Explore', icon: 'explore' },
    { id: 'destinations', label: 'Places', icon: 'travel_explore' },
    { id: 'experiences', label: 'Expeditions', icon: 'hiking' },
    { id: 'saved', label: 'Saved', icon: 'bookmark' },
    { id: 'login', label: 'Profile', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-2px_12px_rgba(10,25,47,0.06)] md:hidden">
      <div className="flex justify-around items-center h-16 px-space-xs">
        {tabs.map((tab) => {
          const isActive = currentPage === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center w-14 h-14 transition-colors ${
                isActive ? 'text-secondary' : 'text-on-surface-variant hover:text-secondary'
              }`}
            >
              <span className="material-symbols-outlined text-2xl">{tab.icon}</span>
              <span className={`font-label-caps text-[10px] ${isActive ? 'font-bold' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

