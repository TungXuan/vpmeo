import Notification from '../models/notification';
import { updateNotification } from '../services/firebase';

export const addUserNotification = async (noti) => {
  const { type, user, title, body, data } = noti;
  try {
    const noti = new Notification({
      user,
      title,
      type,
      body,
      data,
    });
    await noti.save();
    await updateNotification(noti);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notificationList = await Notification.find({
      user: req.user._id,
    });
    res.json({
      success: true,
      data: notificationList,
    });
  } catch (error) {
    throw error;
  }
};

