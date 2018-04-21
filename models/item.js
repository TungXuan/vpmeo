import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  code: {
    type: Number,
    unique: true,
  },
  price: Number,
});

export default mongoose.model('Item', itemSchema);
