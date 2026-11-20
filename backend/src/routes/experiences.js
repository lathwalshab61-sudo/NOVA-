import express from 'express';
import Experience from '../models/Experience.js';
import { experiences as fallbackExperiences } from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const experiences = await Experience.find().lean();
      return res.json({
        success: true,
        source: 'mongodb',
        count: experiences.length,
        data: experiences
      });
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      count: fallbackExperiences.length,
      data: fallbackExperiences
    });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const exp = await Experience.findOne({ id }).lean();
      if (exp) {
        return res.json({
          success: true,
          source: 'mongodb',
          data: exp
        });
      }
    }

    const fallback = fallbackExperiences.find((item) => item.id === id);
    if (!fallback) {
      return res.status(404).json({
        success: false,
        message: `Experience with ID "${id}" not found.`
      });
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      data: fallback
    });
  } catch (error) {
    next(error);
  }
});

export default router;
