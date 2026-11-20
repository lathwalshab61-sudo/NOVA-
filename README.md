# NOVA – Explore Beyond Boundaries

[![React](https://img.shields.io/badge/React-19-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-purple.svg)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green.svg)](https://nodejs.org/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas_Cloud-brightgreen.svg)](https://www.mongodb.com/atlas)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS_3-38B2AC.svg)](https://tailwindcss.com/)

An architectural, editorial luxury travel and expedition web application. Designed for affluent modern adventurers seeking hyper-personalized journeys, private charters, and unlisted heritage sanctuaries.

---

## 🧭 Project Documentation Hub

Detailed technical guides are organized in the [`README/`](./README/) directory:

- 🏛️ [**System Architecture**](./README/ARCHITECTURE.md) — End-to-end fullstack architecture, component tree, and data flow.
- 🗄️ [**Database & MongoDB Atlas**](./README/DATABASE.md) — Mongoose schemas, cloud connection, and auto-seeding.
- 📡 [**REST API Reference**](./README/API.md) — Comprehensive API endpoints, parameters, and payloads.
- 🎨 [**Frontend & UI System**](./README/FRONTEND.md) — React pages, components, design tokens, and typography.
- 🚀 [**Deployment Guide**](./README/DEPLOYMENT.md) — Hosting instructions for Vercel, Render, Railway, and Docker.

---

## ⚡ Quick Start

### 1. Prerequisites
- **Node.js** (v18 or later)
- **npm** (v9 or later)

### 2. Installation
Install dependencies for both frontend and backend:
```bash
# Backend dependencies
cd backend
npm install

# Frontend dependencies
cd ../frontend
npm install

# Return to root
cd ..
```

### 3. Environment Setup
Create a `.env` file in the `backend/` directory:
```env
PORT=5000
NODE_ENV=development
CLIENT_ORIGIN=http://localhost:5173
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.wfjnzya.mongodb.net/nova_travel?retryWrites=true&w=majority
```

### 4. Run Both Servers Together
From the root folder:
```bash
npm run dev
```

- **Frontend Application:** [http://localhost:5173](http://localhost:5173)
- **Backend API:** [http://localhost:5000](http://localhost:5000)
- **API Health Check:** [http://localhost:5000/api/health](http://localhost:5000/api/health)

---

## 📂 Repository Structure

```
NOVA/
├── README.md                                 # Main project landing documentation
├── README/                                   # Dedicated technical documentation folder
│   ├── ARCHITECTURE.md                       # Full-stack design & data flow
│   ├── DATABASE.md                           # MongoDB Atlas schemas & models
│   ├── API.md                                # REST API documentation
│   ├── FRONTEND.md                           # React pages & design system
│   └── DEPLOYMENT.md                         # Production deployment guide
├── RUN_STEPS.md                              # Step-by-step developer guide
├── package.json                              # Root workspace orchestrator
├── start-all.js                              # Concurrent process runner
│
├── backend/                                  # Node.js + Express API Server
│   ├── server.js                             # Express app & Atlas listener
│   ├── package.json                          # Backend dependencies
│   ├── .env.example                          # Environment template
│   └── src/
│       ├── config/db.js                      # MongoDB Atlas connection & auto-seeding
│       ├── models/                           # Mongoose data models
│       ├── routes/                           # API route handlers
│       └── middleware/                       # Logger & error handling
│
├── frontend/                                 # Vite + React Client Application
│   ├── index.html                            # Custom typography & Tailwind tokens
│   ├── vite.config.js                        # Vite configuration
│   ├── public/images/                        # High-resolution destination assets
│   └── src/
│       ├── App.jsx                           # Root router & global state
│       ├── pages/                            # Individual view pages
│       ├── components/                       # Reusable UI components
│       └── services/api.js                   # Client API communication layer
│
└── stitch_nova_travel_exploration_platform/  # Google Stitch UI design files
```

---

## 🛡️ License

Private & Confidential © 2025 NOVA Expeditions Inc. All rights reserved.
