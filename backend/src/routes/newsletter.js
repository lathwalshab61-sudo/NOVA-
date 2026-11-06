import express from 'express';
import { newsletterSubscribers } from '../data/mockData.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address.'
    });
  }

  const normalizedEmail = email.toLowerCase().trim();

  if (newsletterSubscribers.includes(normalizedEmail)) {
    return res.json({
      success: true,
      message: 'You are already subscribed to the Wanderer Dispatch.'
    });
  }

  newsletterSubscribers.push(normalizedEmail);

  res.status(201).json({
    success: true,
    message: 'Thank you for subscribing to the Wanderer Dispatch.',
    subscriberCount: newsletterSubscribers.length
  });
});

export default router;

