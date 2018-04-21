import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  title: String,
  images: [String],
  readers: [Schema.Types.ObjectId],
});

export default mongoose.model('News', newsSchema);
