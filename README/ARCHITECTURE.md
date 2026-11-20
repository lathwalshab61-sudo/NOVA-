# System Architecture

The NOVA platform is architected as a decoupled, high-performance web application designed for high availability and low latency.

```
                      ┌────────────────────────────────────────┐
                      │             User Browser               │
                      └───────────────────┬────────────────────┘
                                          │
                        HTTP / HTTPS (REST API & Assets)
                                          │
                     ┌────────────────────┴────────────────────┐
                     ▼                                         ▼
         ┌─────────────────────────┐               ┌─────────────────────────┐
         │     Frontend Client     │               │     Backend Server      │
         │      (Vite + React)     │               │    (Node.js/Express)    │
         │   Port: 5173            │               │   Port: 5000            │
         └───────────┬─────────────┘               └───────────┬─────────────┘
                     │                                         │
                     │  Client-Side Fallback                   │  Mongoose ODM
                     ▼                                         ▼
         ┌─────────────────────────┐               ┌─────────────────────────┐
         │     Local Mock Data     │               │   MongoDB Atlas Cloud   │
         │  (Instant Offline UX)   │               │   (Persistent Storage)  │
         └─────────────────────────┘               └─────────────────────────┘
```

---

## 1. Frontend Tier (Client)
- **Framework:** React 19 with Vite for ultra-fast Hot Module Replacement (HMR).
- **Styling Engine:** Tailwind CSS 3 with custom color palettes and typography scales (`Outfit` + `Plus Jakarta Sans`).
- **Resilience Layer:** `src/services/api.js` provides automatic fallback to local memory data if the backend server or network is disconnected, ensuring zero user-facing disruptions.

---

## 2. Backend Tier (Server)
- **Framework:** Express.js 4 (ES Modules).
- **Middleware:** CORS (Cross-Origin Resource Sharing), JSON body-parser, request logger, and centralized error handler.
- **Connection Strategy:** Server begins listening immediately on port `5000` while initiating non-blocking background connection to MongoDB Atlas.

---

## 3. Data Tier (Database)
- **Engine:** MongoDB Atlas Cloud Cluster (`cluster0.wfjnzya.mongodb.net`).
- **ORM / ODM:** Mongoose 8.
- **Lifecycle:** Auto-checks collection counts on boot and seeds initial curated destinations, experiences, and testimonials if empty.
