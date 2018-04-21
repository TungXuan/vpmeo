import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  facebookId: String,
  facebookToken: String,
  avatar: String,
  phone: String,
  name: String,
  birthdate: Date,
  totalTravel: {
    type: Number,
    default: 0,
  },
  totalWeed: {
    type: Number,
    default: 0,
  },
  hasCreditCard: {
    type: Boolean,
    default: false,
  },
  balance: {
    type: Number,
    default: 0,
  },
  hasInternetBanking: {
    type: Boolean,
    default: false,
  },
  souvenirs: [],
  items: [Number],
  token: {
    type: String,
    default: uuid.v4,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('User', userSchema);
