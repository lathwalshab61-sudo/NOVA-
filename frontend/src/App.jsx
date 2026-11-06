import React, { useState, useEffect } from 'react';
import Header from './components/Header.jsx';
import DrawerMenu from './components/DrawerMenu.jsx';
import BottomNav from './components/BottomNav.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import DestinationsPage from './pages/DestinationsPage.jsx';
import DestinationDetailPage from './pages/DestinationDetailPage.jsx';
import ExperiencesPage from './pages/ExperiencesPage.jsx';
import SavedPage from './pages/SavedPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

import { api } from './services/api.js';
import {
  initialDestinations,
  initialExperiences,
  initialTestimonials
} from './data/mockData.js';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [savedIds, setSavedIds] = useState(['amalfi', 'kyoto']);
  const [destinations, setDestinations] = useState(initialDestinations);
  const [experiences, setExperiences] = useState(initialExperiences);
  const [testimonials, setTestimonials] = useState(initialTestimonials);

  // Load live data from backend API if available
  useEffect(() => {
    async function loadData() {
      try {
        const destRes = await api.getDestinations();
        if (destRes?.data) setDestinations(destRes.data);

        const expRes = await api.getExperiences();
        if (expRes?.data) setExperiences(expRes.data);

        const testRes = await api.getTestimonials();
        if (testRes?.data) setTestimonials(testRes.data);

        const savedRes = await api.getSaved();
        if (savedRes?.savedIds) setSavedIds(savedRes.savedIds);
      } catch (err) {
        console.log('Using local dataset:', err);
      }
    }
    loadData();
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDestination = (destination) => {
    setSelectedDestination(destination);
    setCurrentPage('destination-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSaved = async (destinationId) => {
    setSavedIds((prev) => {
      const isAlreadySaved = prev.includes(destinationId);
      return isAlreadySaved
        ? prev.filter((id) => id !== destinationId)
        : [...prev, destinationId];
    });

    try {
      await api.toggleSaved(destinationId);
    } catch (err) {
      console.warn('Saved sync failed:', err);
    }
  };

  return (
    <div className="bg-surface min-h-screen flex flex-col text-on-surface">
      {/* Top Header */}
      <Header
        onOpenDrawer={() => setIsDrawerOpen(true)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Navigation Drawer Menu */}
      <DrawerMenu
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 pt-16 pb-16 md:pb-0">
        {currentPage === 'home' && (
          <HomePage
            destinations={destinations}
            experiences={experiences}
            testimonials={testimonials}
            savedIds={savedIds}
            onToggleSaved={handleToggleSaved}
            onSelectDestination={handleSelectDestination}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            destinations={destinations}
            savedIds={savedIds}
            onToggleSaved={handleToggleSaved}
            onSelectDestination={handleSelectDestination}
          />
        )}

        {currentPage === 'destination-detail' && (
          <DestinationDetailPage
            destination={selectedDestination}
            isSaved={savedIds.includes(selectedDestination?.id)}
            onToggleSaved={handleToggleSaved}
            onBack={() => handleNavigate('destinations')}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'experiences' && (
          <ExperiencesPage
            experiences={experiences}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'saved' && (
          <SavedPage
            destinations={destinations}
            savedIds={savedIds}
            onToggleSaved={handleToggleSaved}
            onSelectDestination={handleSelectDestination}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && (
          <ContactPage />
        )}

        {currentPage === 'login' && (
          <LoginPage onNavigate={handleNavigate} />
        )}
      </main>

      {/* Luxury Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Bottom Floating Navigation Dock (Mobile) */}
      <BottomNav
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
