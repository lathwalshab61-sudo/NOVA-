import express from 'express';
import { testimonials } from '../data/mockData.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: testimonials
  });
});

export default router;

