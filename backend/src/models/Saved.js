import mongoose from 'mongoose';

const savedSchema = new mongoose.Schema({
  userId: { type: String, default: 'usr_001', index: true },
  destinationId: { type: String, required: true }
}, {
  timestamps: true
});

savedSchema.index({ userId: 1, destinationId: 1 }, { unique: true });

const Saved = mongoose.models.Saved || mongoose.model('Saved', savedSchema);
export default Saved;
