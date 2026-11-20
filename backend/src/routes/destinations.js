import express from 'express';
import Destination from '../models/Destination.js';
import { destinations as fallbackDestinations } from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

/**
 * GET /api/destinations
 * Supports query params:
 * - category: 'all' | 'adventure' | 'beaches' | 'mountains' | 'historical' | 'culture'
 * - search: string
 * - maxPrice: number
 */
router.get('/', async (req, res, next) => {
  try {
    const { category, search, maxPrice } = req.query;

    if (getDBStatus()) {
      const query = {};

      if (category && category !== 'all') {
        query.category = { $regex: new RegExp(`^${category}$`, 'i') };
      }

      if (search) {
        const searchRegex = { $regex: search.trim(), $options: 'i' };
        query.$or = [
          { title: searchRegex },
          { subtitle: searchRegex },
          { region: searchRegex },
          { overview: searchRegex }
        ];
      }

      if (maxPrice) {
        const priceLimit = parseFloat(maxPrice);
        if (!isNaN(priceLimit)) {
          query.startingPrice = { $lte: priceLimit };
        }
      }

      const results = await Destination.find(query).lean();
      return res.json({
        success: true,
        source: 'mongodb',
        count: results.length,
        data: results
      });
    }

    // Fallback to local memory
    let results = [...fallbackDestinations];

    if (category && category !== 'all') {
      results = results.filter(
        (dest) => dest.category.toLowerCase() === category.toLowerCase()
      );
    }

    if (search) {
      const q = search.toLowerCase().trim();
      results = results.filter(
        (dest) =>
          dest.title.toLowerCase().includes(q) ||
          dest.subtitle.toLowerCase().includes(q) ||
          dest.region.toLowerCase().includes(q) ||
          dest.overview.toLowerCase().includes(q)
      );
    }

    if (maxPrice) {
      const priceLimit = parseFloat(maxPrice);
      if (!isNaN(priceLimit)) {
        results = results.filter((dest) => dest.startingPrice <= priceLimit);
      }
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      count: results.length,
      data: results
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/destinations/:id
 * Fetch destination details by ID or slug
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;

    if (getDBStatus()) {
      const destination = await Destination.findOne({
        $or: [{ id }, { slug: id }]
      }).lean();

      if (destination) {
        return res.json({
          success: true,
          source: 'mongodb',
          data: destination
        });
      }
    }

    const fallback = fallbackDestinations.find(
      (d) => d.id === id || d.slug === id
    );

    if (!fallback) {
      return res.status(404).json({
        success: false,
        message: `Destination with ID or slug "${id}" not found.`
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
