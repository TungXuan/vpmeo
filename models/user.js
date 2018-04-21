import mongoose from 'mongoose';
import uuid from 'uuid';

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  facebookId: String,
  facebookToken: String,
  firebaseId: String,
  fcmToken: String,
  phone: String,
  name: String,
  birthdate: Date,
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
  items: [],
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
