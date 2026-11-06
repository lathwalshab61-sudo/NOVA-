import express from 'express';
import { inquiries } from '../data/mockData.js';

const router = express.Router();

/**
 * POST /api/inquiries
 * Handles booking planner steps and contact inquiries
 */
router.post('/', (req, res) => {
  const { name, email, destination, dates, tier, guests, message, type = 'planner' } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Email address is required to process your request.'
    });
  }

  const newInquiry = {
    id: `inq-${Date.now()}`,
    type,
    name: name || 'Discerning Explorer',
    email,
    destination: destination || 'Bespoke Route',
    dates: dates || 'Flexible',
    tier: tier || 'Curated Villa',
    guests: guests || 2,
    message: message || '',
    status: 'received',
    createdAt: new Date().toISOString()
  };

  inquiries.push(newInquiry);

  res.status(201).json({
    success: true,
    message: 'Your bespoke inquiry has been received by the NOVA Concierge.',
    data: newInquiry
  });
});

// GET all inquiries (internal concierge view)
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: inquiries.length,
    data: inquiries
  });
});

export default router;

