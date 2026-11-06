import express from 'express';
import { savedDestinations, destinations } from '../data/mockData.js';

const router = express.Router();

// GET all saved destination IDs and full objects
router.get('/', (req, res) => {
  const savedItems = destinations.filter((dest) =>
    savedDestinations.includes(dest.id)
  );

  res.json({
    success: true,
    savedIds: savedDestinations,
    data: savedItems
  });
});

// POST toggle wishlist item
router.post('/toggle', (req, res) => {
  const { destinationId } = req.body;

  if (!destinationId) {
    return res.status(400).json({
      success: false,
      message: 'destinationId is required.'
    });
  }

  const idx = savedDestinations.indexOf(destinationId);
  let isSaved = false;

  if (idx > -1) {
    savedDestinations.splice(idx, 1);
    isSaved = false;
  } else {
    savedDestinations.push(destinationId);
    isSaved = true;
  }

  res.json({
    success: true,
    destinationId,
    isSaved,
    savedIds: savedDestinations
  });
});

export default router;

