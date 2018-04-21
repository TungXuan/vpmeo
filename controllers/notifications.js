import moment from 'moment';
import Notification from '../models/notification';
import { updateNotification } from '../services/firebase';
moment.locale('vi');

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
    }).sort('-createdAt');
    const notifications = notificationList.map((noti) => {
      return Object.assign(JSON.parse(JSON.stringify((noti))), {
        createdAtString: moment(noti.createdAt).fromNow(),
      });
    });
    res.json({
      success: true,
      notifications,
    });
  } catch (error) {
    throw error;
  }
};

