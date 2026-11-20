import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  membershipTier: { type: String, default: 'Explorer Club Black' },
  memberSince: { type: String, default: '2023' },
  curatedExpeditionsCompleted: { type: Number, default: 4 },
  avatar: { type: String }
}, {
  timestamps: true
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
