import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const randomBalance = () => {
  return Math.floor((Math.random() * 10000) + 1) * 1000;
};

const transactionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  type: Number,
  balance: {
    type: Number,
    default: randomBalance,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  addedGameBalance: {
    type: Number
  }
});

export default mongoose.model('Transaction', transactionSchema);
