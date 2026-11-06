import express from 'express';
import { experiences } from '../data/mockData.js';

const router = express.Router();

// GET all curated experiences
router.get('/', (req, res) => {
  res.json({
    success: true,
    count: experiences.length,
    data: experiences
  });
});

// GET experience by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const exp = experiences.find((item) => item.id === id);

  if (!exp) {
    return res.status(404).json({
      success: false,
      message: `Experience with ID "${id}" not found.`
    });
  }

  res.json({
    success: true,
    data: exp
  });
});

export default router;

