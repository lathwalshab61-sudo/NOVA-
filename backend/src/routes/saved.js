import express from 'express';
import Saved from '../models/Saved.js';
import Destination from '../models/Destination.js';
import {
  savedDestinations as fallbackSaved,
  destinations as fallbackDestinations
} from '../data/mockData.js';
import { getDBStatus } from '../config/db.js';

const router = express.Router();

// GET all saved destination IDs and full objects
router.get('/', async (req, res, next) => {
  try {
    if (getDBStatus()) {
      const savedDocs = await Saved.find({ userId: 'usr_001' }).lean();
      const savedIds = savedDocs.map((s) => s.destinationId);
      const items = await Destination.find({ id: { $in: savedIds } }).lean();

      return res.json({
        success: true,
        source: 'mongodb',
        savedIds,
        data: items
      });
    }

    const savedItems = fallbackDestinations.filter((dest) =>
      fallbackSaved.includes(dest.id)
    );

    res.json({
      success: true,
      source: 'memory_fallback',
      savedIds: fallbackSaved,
      data: savedItems
    });
  } catch (error) {
    next(error);
  }
});

// POST toggle wishlist item
router.post('/toggle', async (req, res, next) => {
  try {
    const { destinationId } = req.body;

    if (!destinationId) {
      return res.status(400).json({
        success: false,
        message: 'destinationId is required.'
      });
    }

    if (getDBStatus()) {
      const existing = await Saved.findOne({ userId: 'usr_001', destinationId });
      let isSaved = false;

      if (existing) {
        await Saved.deleteOne({ _id: existing._id });
        isSaved = false;
      } else {
        await Saved.create({ userId: 'usr_001', destinationId });
        isSaved = true;
      }

      const allSaved = await Saved.find({ userId: 'usr_001' }).lean();
      const savedIds = allSaved.map((s) => s.destinationId);

      return res.json({
        success: true,
        source: 'mongodb',
        destinationId,
        isSaved,
        savedIds
      });
    }

    const idx = fallbackSaved.indexOf(destinationId);
    let isSaved = false;

    if (idx > -1) {
      fallbackSaved.splice(idx, 1);
      isSaved = false;
    } else {
      fallbackSaved.push(destinationId);
      isSaved = true;
    }

    res.json({
      success: true,
      source: 'memory_fallback',
      destinationId,
      isSaved,
      savedIds: fallbackSaved
    });
  } catch (error) {
    next(error);
  }
});

export default router;
