# How to Run Backend and Frontend Together (with MongoDB Atlas)

This guide outlines how to run the **NOVA Travel Exploration Platform** full-stack application (React Frontend + Node.js/Express Backend + MongoDB Atlas Database).

---

## 🗄️ Database: MongoDB Atlas

The backend connects directly to your cloud MongoDB Atlas database:
- **Database:** `nova_travel`
- **Cluster:** `cluster0.wfjnzya.mongodb.net`
- **Config file:** `backend/.env`
- **Status / Health check:** `http://localhost:5000/api/health`

All destination queries, wishlist bookmarks, inquiries, newsletter subscriptions, and experiences are stored and retrieved from MongoDB Atlas.

---

## ⚡ Option 1: Run Both Together with a Single Command (Recommended)

From the project root directory (`New folder (3)`):

```bash
npm run dev
```

> **What this does:**
> - Launches the Express API server on `http://localhost:5000` (connected to MongoDB Atlas)
> - Launches the Vite React frontend on `http://localhost:5173`
> - Streams logs from both services simultaneously in one terminal window
> - Press `Ctrl + C` at any time to cleanly stop both servers.

---

## 🖥️ Option 2: Run in Two Separate Terminals

If you prefer dedicated terminal windows for backend and frontend:

### Terminal 1: Backend Server
```bash
cd backend
npm run dev
```
- **Backend URL:** `http://localhost:5000`
- **Health Check & Atlas Status:** `http://localhost:5000/api/health`
- **Destinations API:** `http://localhost:5000/api/destinations`

### Terminal 2: Frontend Application
```bash
cd frontend
npm run dev
```
- **Frontend URL:** `http://localhost:5173`
- Open your browser to `http://localhost:5173` to explore the application!

---

## 🛠️ Verification & Troubleshooting

### 1. Check MongoDB Atlas Status
Visit [http://localhost:5000/api/health](http://localhost:5000/api/health) in your browser. You will see:
```json
{
  "status": "healthy",
  "database": {
    "connected": true,
    "readyState": 1,
    "host": "ac-t3idme9-shard-00-00.wfjnzya.mongodb.net",
    "name": "nova_travel"
  }
}
```

### 2. Verify Dependencies
If you ever clone or move the project to a fresh machine:
```bash
# In the backend directory
cd backend
npm install

# In the frontend directory
cd ../frontend
npm install
```

### 3. Ports Used
- **Backend:** Port `5000`
- **Frontend:** Port `5173`
