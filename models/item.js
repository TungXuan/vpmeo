import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  type: Number, // 0 beach, 1 mountain, 2 city
  code: {
    type: Number,
    unique: true,
  },
  price: Number,
});

export default mongoose.model('Item', itemSchema);
