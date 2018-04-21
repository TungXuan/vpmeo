import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tripSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
  },
  from: {
    type: Date,
    default: Date.now,
  },
  to: Date,
});

export default mongoose.model('Trip', tripSchema);
