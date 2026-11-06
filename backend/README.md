# NOVA Travel Exploration Platform - Backend API

A lightweight, high-performance Node.js & Express RESTful API server powering the NOVA luxury travel and expedition platform.

## Architecture & Features

- **Express.js API Engine**: Fast and modular routing structure.
- **CORS Enabled**: Configured for seamless communication with the Vite/React frontend.
- **RESTful Endpoints**:
  - `GET /api/destinations`: List all destinations with filtering by category, search query, and budget.
  - `GET /api/destinations/:id`: Complete destination itinerary, inclusions, and tier pricing.
  - `GET /api/experiences`: Curated masterclasses, private charters, and expeditions.
  - `GET /api/testimonials`: Verified traveler reviews and ratings.
  - `GET /api/saved` & `POST /api/saved/toggle`: In-memory explorer wishlist management.
  - `POST /api/inquiries`: Handles bespoke trip planner bookings and concierge contact.
  - `POST /api/newsletter`: Wanderer Dispatch email subscription.
  - `POST /api/auth/login` & `GET /api/auth/profile`: Explorer club authentication and profile data.

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Or start in production:
```bash
npm start
```

The API will run on `http://localhost:5000`.

