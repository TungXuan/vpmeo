import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/user';
import { FB_API_URL } from '../constants';

export const login = async (req, res) => {
  const { facebookToken } = req.body;
  try {
    let userProfile = await axios.get(`${FB_API_URL}?fields=id,name,picture.type(normal),email,gender&access_token=${facebookToken}`); // eslint-disable-line
    userProfile = userProfile.data;
    let user = await User.findOne({ email: userProfile.email });

    if (!user) {
      user = new User({
        name: userProfile.name,
        avatar: userProfile.picture.data.url,
        facebookId: userProfile.id,
        email: userProfile.email,
        gender: userProfile.gender,
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
    console.log(error);
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

