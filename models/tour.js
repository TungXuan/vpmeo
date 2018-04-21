import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const tourSchema = new Schema({
  location: String,
  place: Number,
  days: Number,
  schedule: [{
    image: String,
    content: String,
  }],
  souvenirs: [String],
  distance: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model('Tour', tourSchema);
