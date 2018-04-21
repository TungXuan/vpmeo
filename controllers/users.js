import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/user';
import Transaction from '../models/transaction';
import { FB_API_URL } from '../constants';
import { addUserNotification } from '../controllers/notifications';

const getTransactionQuantity = async (user) => {
  const tranQuantity = {};
  for (let type = 0; type < 6; type++) {
    const quantity = await Transaction.count({ user, type });
    tranQuantity[`type${type}`] = quantity;
  }
  return tranQuantity;
};

export const login = async (req, res) => {
  const { facebookToken } = req.body;
  try {
    let userProfile = await axios.get(`${FB_API_URL}?fields=id,name,picture.type(normal),email,gender&access_token=${facebookToken}`); // eslint-disable-line
    userProfile = userProfile.data;
    let user = await User.findOne({ facebookId: userProfile.id });

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
    const tranQuantity = await getTransactionQuantity(user._id);
    res.json({
      success: true,
      accessToken,
      user,
      tranQuantity,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = req.user;
    const tranQuantity = await getTransactionQuantity(user._id);
    res.json({
      success: true,
      user: user,
      tranQuantity,
    });
  } catch (error) {
    console.log(error);
  }
};

export const registyService = async (req, res) => {
  try {
    const user = req.user;
    const { hasInternetBanking, hasCreditCard } = req.body;
    if (hasInternetBanking) {
      user.hasInternetBanking = hasInternetBanking;
      user.balance = user.balance + 50;
      addUserNotification({
        user: user._id,
        title: 'VPMeo',
        body: 'Đăng ký thành công dịch vụ Internet Banking, bạn nhận được 50🍀',
        type: 'service',
        data: {},
      });
    }
    if (hasCreditCard) {
      user.hasCreditCard = hasCreditCard;
      user.balance = user.balance + 50;
      addUserNotification({
        user: user._id,
        title: 'VPMeo',
        body: 'Đăng ký thành công CreditCard, bạn nhận được 50🍀',
        type: 'service',
        data: {},
      });
    }
    await user.save();
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};
