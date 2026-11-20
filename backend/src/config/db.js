import 'dotenv/config';
import mongoose from 'mongoose';
import {
  destinations as initialDestinations,
  experiences as initialExperiences,
  testimonials as initialTestimonials
} from '../data/mockData.js';
import Destination from '../models/Destination.js';
import Experience from '../models/Experience.js';
import Testimonial from '../models/Testimonial.js';

let isConnected = false;

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.warn('⚠️ MONGODB_URI is not defined in environment variables. Running with in-memory fallback.');
    return false;
  }

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log(`===============================================`);
    console.log(` MongoDB Atlas Connected: ${mongoose.connection.host}`);
    console.log(` Database: ${mongoose.connection.name}`);
    console.log(`===============================================`);

    // Auto-seed initial data if database collections are empty
    await seedInitialData();

    return true;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.warn('⚠️ Falling back to local data gracefully.');
    isConnected = false;
    return false;
  }
};

export const getDBStatus = () => isConnected;

async function seedInitialData() {
  try {
    const destCount = await Destination.countDocuments();
    if (destCount === 0) {
      console.log('🌱 Seeding initial destinations into MongoDB Atlas...');
      await Destination.insertMany(initialDestinations);
      console.log(`✅ Seeded ${initialDestinations.length} destinations.`);
    }

    const expCount = await Experience.countDocuments();
    if (expCount === 0) {
      console.log('🌱 Seeding initial experiences into MongoDB Atlas...');
      await Experience.insertMany(initialExperiences);
      console.log(`✅ Seeded ${initialExperiences.length} experiences.`);
    }

    const testCount = await Testimonial.countDocuments();
    if (testCount === 0) {
      console.log('🌱 Seeding initial testimonials into MongoDB Atlas...');
      await Testimonial.insertMany(initialTestimonials);
      console.log(`✅ Seeded ${initialTestimonials.length} testimonials.`);
    }
  } catch (err) {
    console.error('⚠️ Seeding error:', err.message);
  }
}
