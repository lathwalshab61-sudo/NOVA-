import mongoose from 'mongoose';

const itineraryItemSchema = new mongoose.Schema({
  day: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true }
}, { _id: false });

const destinationSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  slug: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  region: { type: String, required: true },
  rating: { type: Number, default: 5.0 },
  reviewsCount: { type: Number, default: 0 },
  startingPrice: { type: Number, required: true },
  currency: { type: String, default: 'USD' },
  category: { type: String, required: true, index: true },
  image: { type: String, required: true },
  overview: { type: String, default: '' },
  highlight: { type: String, default: '' },
  duration: { type: String, default: '7 Days' },
  bestTimeToVisit: { type: String, default: 'All Year' },
  tier: { type: String, default: 'Ultra Luxury' },
  itinerary: [itineraryItemSchema],
  inclusions: [{ type: String }]
}, {
  timestamps: true
});

const Destination = mongoose.models.Destination || mongoose.model('Destination', destinationSchema);
export default Destination;
