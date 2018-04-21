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
});

export default mongoose.model('Tour', tourSchema);
