import {
  initialDestinations,
  initialExperiences,
  initialTestimonials
} from '../data/mockData.js';

const API_BASE_URL = 'http://localhost:5000/api';

/**
 * Robust fetch wrapper with automatic fallback to local mock data
 */
async function fetchWithFallback(endpoint, options = {}, fallbackData) {
  try {
    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options.headers || {})
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.warn(`[API] Fallback active for ${endpoint}:`, error.message);
    if (typeof fallbackData === 'function') {
      return fallbackData();
    }
    return fallbackData;
  }
}

export const api = {
  // Destinations
  async getDestinations(category = 'all', search = '') {
    return fetchWithFallback(
      `/destinations?category=${encodeURIComponent(category)}&search=${encodeURIComponent(search)}`,
      { method: 'GET' },
      () => {
        let results = [...initialDestinations];
        if (category && category !== 'all') {
          results = results.filter((d) => d.category.toLowerCase() === category.toLowerCase());
        }
        if (search) {
          const q = search.toLowerCase();
          results = results.filter(
            (d) =>
              d.title.toLowerCase().includes(q) ||
              d.subtitle.toLowerCase().includes(q) ||
              d.region.toLowerCase().includes(q)
          );
        }
        return { success: true, data: results };
      }
    );
  },

  async getDestinationById(id) {
    return fetchWithFallback(
      `/destinations/${encodeURIComponent(id)}`,
      { method: 'GET' },
      () => {
        const item = initialDestinations.find((d) => d.id === id || d.slug === id);
        return { success: !!item, data: item };
      }
    );
  },

  // Experiences
  async getExperiences() {
    return fetchWithFallback('/experiences', { method: 'GET' }, {
      success: true,
      data: initialExperiences
    });
  },

  // Testimonials
  async getTestimonials() {
    return fetchWithFallback('/testimonials', { method: 'GET' }, {
      success: true,
      data: initialTestimonials
    });
  },

  // Saved / Wishlist
  async getSaved() {
    return fetchWithFallback('/saved', { method: 'GET' }, {
      success: true,
      savedIds: ['amalfi', 'kyoto'],
      data: initialDestinations.filter((d) => ['amalfi', 'kyoto'].includes(d.id))
    });
  },

  async toggleSaved(destinationId) {
    return fetchWithFallback(
      '/saved/toggle',
      {
        method: 'POST',
        body: JSON.stringify({ destinationId })
      },
      () => ({
        success: true,
        destinationId,
        message: 'Saved state updated locally.'
      })
    );
  },

  // Newsletter
  async subscribeNewsletter(email) {
    return fetchWithFallback(
      '/newsletter',
      {
        method: 'POST',
        body: JSON.stringify({ email })
      },
      {
        success: true,
        message: 'Thank you for subscribing to the Wanderer Dispatch.'
      }
    );
  },

  // Inquiries / Trip Planner
  async submitInquiry(inquiryData) {
    return fetchWithFallback(
      '/inquiries',
      {
        method: 'POST',
        body: JSON.stringify(inquiryData)
      },
      {
        success: true,
        message: 'Your bespoke inquiry has been received by the NOVA Concierge.',
        data: inquiryData
      }
    );
  },

  // Auth
  async login(email, password) {
    return fetchWithFallback(
      '/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password })
      },
      {
        success: true,
        token: 'mock-session-token',
        user: {
          name: 'Elena Rostova',
          email,
          membershipTier: 'Explorer Club Black'
        }
      }
    );
  }
};

