# Deployment Guide

This guide details how to deploy the full-stack NOVA Travel Exploration Platform to modern cloud environments.

---

## 1. Deploying the Frontend (Vercel / Netlify)

The frontend is a static Vite/React application that builds to the `frontend/dist` directory.

### Vercel Deployment:
1. Connect your GitHub repository to Vercel.
2. Set **Root Directory** to `frontend`.
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Environment Variables:
   - `VITE_API_URL`: Your deployed backend URL (e.g., `https://api.yourdomain.com/api`)

---

## 2. Deploying the Backend (Render / Railway / Render)

The backend is an Express.js Node server that connects to MongoDB Atlas.

### Render / Railway Deployment:
1. Connect the repository to your host.
2. Set **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Configure Environment Variables in the host dashboard:
   - `PORT`: `5000` (or host provided port)
   - `NODE_ENV`: `production`
   - `CLIENT_ORIGIN`: Your deployed frontend URL (e.g., `https://nova-travel.vercel.app`)
   - `MONGODB_URI`: Your MongoDB Atlas connection URI

---

## 3. MongoDB Atlas IP Whitelist (Important)

When deploying the backend to the cloud:
1. Log in to [MongoDB Atlas](https://cloud.mongodb.com/).
2. Navigate to **Network Access**.
3. Ensure your production server IP (or `0.0.0.0/0` for dynamic cloud hosts) is added to the IP Access List so your server can connect to the cluster.
