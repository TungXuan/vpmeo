import User from '../models/user';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
  const { email, facebookId } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        facebookId,
      });
      await user.save();
    }
    const accessToken = jwt.sign({
      token: user.token,
    }, 'sceret', { expiresIn: 180 * 86400 });
    res.json({
      success: true,
      accessToken,
      user,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateFcmToken = async (req, res) => {
  try {
    const { user } = req;
    user.fcmToken = req.body.fcmToken;
    await user.save();
    res.json({
      success: true,
      _id: user._id,
      fcmToken: user.fcmToken,
    });
  } catch (error) {
    res.json({
      success: false,
      message: 'Đã xảy ra lỗi, vui lòng thử lại sau',
      trace: error.message,
    });
  }
};
