import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { connectDB, getDBStatus } from './src/config/db.js';

import destinationsRouter from './src/routes/destinations.js';
import experiencesRouter from './src/routes/experiences.js';
import testimonialsRouter from './src/routes/testimonials.js';
import savedRouter from './src/routes/saved.js';
import newsletterRouter from './src/routes/newsletter.js';
import inquiriesRouter from './src/routes/inquiries.js';
import authRouter from './src/routes/auth.js';

import { requestLogger } from './src/middleware/logger.js';
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend development
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Base health / root route
app.get('/', (req, res) => {
  res.json({
    name: 'NOVA Travel Exploration Platform API',
    status: 'online',
    version: '1.0.0',
    database: {
      connected: getDBStatus(),
      provider: 'MongoDB Atlas',
      name: mongoose.connection?.name || 'nova_travel'
    },
    documentation: {
      health: '/api/health',
      destinations: '/api/destinations',
      destinationDetail: '/api/destinations/:id',
      experiences: '/api/experiences',
      testimonials: '/api/testimonials',
      savedWishlist: '/api/saved',
      newsletter: '/api/newsletter',
      inquiries: '/api/inquiries',
      auth: '/api/auth'
    }
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    database: {
      connected: getDBStatus(),
      readyState: mongoose.connection?.readyState, // 1 = connected
      host: mongoose.connection?.host,
      name: mongoose.connection?.name
    }
  });
});

// API Routes
app.use('/api/destinations', destinationsRouter);
app.use('/api/experiences', experiencesRouter);
app.use('/api/testimonials', testimonialsRouter);
app.use('/api/saved', savedRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/inquiries', inquiriesRouter);
app.use('/api/auth', authRouter);

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `API Route not found: ${req.method} ${req.originalUrl}`
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server immediately
app.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(` NOVA Travel API Server is running on port ${PORT}`);
  console.log(` http://localhost:${PORT}`);
  console.log(`===============================================`);
});

// Connect to MongoDB Atlas in the background
connectDB().catch((err) => {
  console.error('Initial DB connection error:', err.message);
});

export default app;
