import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  type: { type: String, default: 'planner' },
  name: { type: String, default: 'Discerning Explorer' },
  email: { type: String, required: true },
  destination: { type: String, default: 'Bespoke Route' },
  dates: { type: String, default: 'Flexible' },
  tier: { type: String, default: 'Curated Villa' },
  guests: { type: Number, default: 2 },
  message: { type: String, default: '' },
  status: { type: String, default: 'received' }
}, {
  timestamps: true
});

const Inquiry = mongoose.models.Inquiry || mongoose.model('Inquiry', inquirySchema);
export default Inquiry;
