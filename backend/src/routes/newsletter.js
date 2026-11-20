import express from 'express';
import Newsletter from '../models/Newsletter.js';
import { newsletterSubscribers as fallbackSubscribers } from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    if (getDBStatus()) {
      const existing = await Newsletter.findOne({ email: normalizedEmail });
      if (existing) {
        return res.json({
          success: true,
          message: 'You are already subscribed to the Wanderer Dispatch.'
        });
      }

      await Newsletter.create({ email: normalizedEmail });
      const count = await Newsletter.countDocuments();

      return res.status(201).json({
        success: true,
        source: 'mongodb',
        message: 'Thank you for subscribing to the Wanderer Dispatch.',
        subscriberCount: count
      });
    }

    if (fallbackSubscribers.includes(normalizedEmail)) {
      return res.json({
        success: true,
        message: 'You are already subscribed to the Wanderer Dispatch.'
      });
    }

    fallbackSubscribers.push(normalizedEmail);
    res.status(201).json({
      success: true,
      source: 'memory_fallback',
      message: 'Thank you for subscribing to the Wanderer Dispatch.',
      subscriberCount: fallbackSubscribers.length
    });
  } catch (error) {
    next(error);
  }
});

export default router;
