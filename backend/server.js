import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

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
    documentation: {
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

// Start server
app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(` NOVA Travel API Server is running on port ${PORT}`);
  console.log(` http://localhost:${PORT}`);
  console.log(`===============================================`);
});

export default app;

