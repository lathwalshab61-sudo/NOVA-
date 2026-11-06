import express from 'express';

const router = express.Router();

// Mock active user profile
const mockUser = {
  id: 'usr_001',
  name: 'Elena Rostova',
  email: 'elena.rostova@wanderer.com',
  membershipTier: 'Explorer Club Black',
  memberSince: '2023',
  curatedExpeditionsCompleted: 4,
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
};

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      message: 'Please provide an email address.'
    });
  }

  // Simulated login success
  res.json({
    success: true,
    token: 'jwt-simulated-token-nova-2025',
    user: {
      ...mockUser,
      email: email
    }
  });
});

router.get('/profile', (req, res) => {
  res.json({
    success: true,
    user: mockUser
  });
});

export default router;

