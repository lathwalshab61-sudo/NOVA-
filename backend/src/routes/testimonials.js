import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { testimonials as fallbackTestimonials } from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const testimonials = await Testimonial.find().lean();
      return res.json({
        success: true,
        source: 'mongodb',
        data: testimonials
      });
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      data: fallbackTestimonials
    });
  } catch (error) {
    next(error);
  }
});

export default router;
