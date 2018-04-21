import Notification from '../models/notification';

export const addUserNotification = async (req, res) => {
  try {
    const noti = new Notification({
      user: req.body.userId,
      title: req.body.title,
      type: req.body.type,
      data: req.body.data,
    });
    await noti.save();
    res.json({
      success: true,
      noti,
    });
  } catch (error) {
    throw error;
  }
};

export const getUserNotifications = async (req, res) => {
  try {
    const notificationList = await Notification.find({ user: req.query.userId });
    res.json({
      success: true,
      data: notificationList,
    });
  } catch (error) {
    throw error;
  }
};

