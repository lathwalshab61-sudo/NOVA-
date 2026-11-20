import express from 'express';
import Inquiry from '../models/Inquiry.js';
import { inquiries as fallbackInquiries } from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, destination, dates, tier, guests, message, type = 'planner' } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email address is required to process your request.'
      });
    }

    const inquiryRecord = {
      id: `inq-${Date.now()}`,
      type,
      name: name || 'Discerning Explorer',
      email,
      destination: destination || 'Bespoke Route',
      dates: dates || 'Flexible',
      tier: tier || 'Curated Villa',
      guests: guests || 2,
      message: message || '',
      status: 'received'
    };

    if (getDBStatus()) {
      const savedInquiry = await Inquiry.create(inquiryRecord);
      return res.status(201).json({
        success: true,
        source: 'mongodb',
        message: 'Your bespoke inquiry has been received and saved to MongoDB.',
        data: savedInquiry
      });
    }

    fallbackInquiries.push({ ...inquiryRecord, createdAt: new Date().toISOString() });
    res.status(201).json({
      success: true,
      source: 'memory_fallback',
      message: 'Your bespoke inquiry has been received by the NOVA Concierge.',
      data: inquiryRecord
    });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const inquiries = await Inquiry.find().sort({ createdAt: -1 }).lean();
      return res.json({
        success: true,
        source: 'mongodb',
        count: inquiries.length,
        data: inquiries
      });
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      count: fallbackInquiries.length,
      data: fallbackInquiries
    });
  } catch (error) {
    next(error);
  }
});

export default router;
