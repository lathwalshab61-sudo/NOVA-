import express from 'express';
import { destinations } from '../data/mockData.js';

const router = express.Router();

/**
 * GET /api/destinations
 * Supports query params:
 * - category: 'all' | 'adventure' | 'beaches' | 'mountains' | 'historical' | 'culture'
 * - search: string
 * - maxPrice: number
 */
router.get('/', (req, res) => {
  const { category, search, maxPrice } = req.query;

  let results = [...destinations];

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
    count: results.length,
    data: results
  });
});

/**
 * GET /api/destinations/:id
 * Fetch destination details by ID or slug
 */
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const destination = destinations.find(
    (d) => d.id === id || d.slug === id
  );

  if (!destination) {
    return res.status(404).json({
      success: false,
      message: `Destination with ID or slug "${id}" not found.`
    });
  }

  res.json({
    success: true,
    data: destination
  });
});

export default router;

