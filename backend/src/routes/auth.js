import express from 'express';
import User from '../models/User.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

const mockUser = {
  id: 'usr_001',
  name: 'Elena Rostova',
  email: 'elena.rostova@wanderer.com',
  membershipTier: 'Explorer Club Black',
  memberSince: '2023',
  curatedExpeditionsCompleted: 4,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
};

router.post('/login', async (req, res, next) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address.'
      });
    }

    if (getDBStatus()) {
      let user = await User.findOne({ email: email.toLowerCase() });
      if (!user) {
        user = await User.create({
          id: `usr_${Date.now()}`,
          name: email.split('@')[0],
          email: email.toLowerCase(),
          membershipTier: 'Explorer Club Member',
          memberSince: new Date().getFullYear().toString(),
          curatedExpeditionsCompleted: 0
        });
      }

      return res.json({
        success: true,
        source: 'mongodb',
        token: 'jwt-simulated-token-nova-2025',
        user
      });
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      token: 'jwt-simulated-token-nova-2025',
      user: {
        ...mockUser,
        email: email
      }
    });
  } catch (error) {
    next(error);
  }
});

router.get('/profile', async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const user = await User.findOne({ id: 'usr_001' }).lean();
      if (user) {
        return res.json({
          success: true,
          source: 'mongodb',
          user
        });
      }
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      user: mockUser
    });
  } catch (error) {
    next(error);
  }
});

export default router;
