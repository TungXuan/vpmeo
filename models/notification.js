import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  title: String,
  type: String,
  body: String,
  status: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  broadcastNoti: {
    type: Boolean,
    default: false,
  },
  data: Schema.Types.Mixed,
});

export default mongoose.model('Notification', notificationSchema);
