import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String },
  initials: { type: String },
  rating: { type: Number, default: 5 },
  quote: { type: String, required: true }
}, {
  timestamps: true
});

const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
