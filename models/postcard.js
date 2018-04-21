import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const postcardSchema = new Schema({
  image: String,
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  trip: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Postcard', postcardSchema);
