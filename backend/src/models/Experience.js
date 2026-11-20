import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true, index: true },
  title: { type: String, required: true },
  location: { type: String, required: true },
  duration: { type: String, default: '1 Day' },
  tagline: { type: String, required: true },
  icon: { type: String, default: 'explore' },
  tags: [{ type: String }],
  price: { type: Number, required: true }
}, {
  timestamps: true
});

const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
export default Experience;
