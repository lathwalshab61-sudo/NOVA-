# How to Run Backend and Frontend Together

This guide outlines how to run the **NOVA Travel Exploration Platform** full-stack application (React Frontend + Node.js/Express Backend).

---

## ⚡ Option 1: Run Both Together with a Single Command (Recommended)

From the project root directory (`New folder (3)`):

```bash
npm run dev
```

> **What this does:**
> - Launches the Express API server on `http://localhost:5000`
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
- **Health Check:** `http://localhost:5000/api/destinations`

### Terminal 2: Frontend Application
```bash
cd frontend
npm run dev
```
- **Frontend URL:** `http://localhost:5173`
- Open your browser to `http://localhost:5173` to explore the application!

---

## 🛠️ Verification & Troubleshooting

### 1. Verify Node.js is Installed
```bash
node -v
npm -v
```
*(Requires Node.js v18 or higher)*

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

If port 5000 is occupied by another service on your system, you can change `PORT=5000` in `backend/.env`.

