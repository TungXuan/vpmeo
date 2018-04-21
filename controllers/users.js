import jwt from 'jsonwebtoken';
import axios from 'axios';
import User from '../models/user';
import Trip from '../models/trip';
import Transaction from '../models/transaction';
import { FB_API_URL } from '../constants';
import { addUserNotification } from '../controllers/notifications';
import { updateBalance } from '../services/firebase';
import { getFriendList } from '../services/facebook';

const getTransactionQuantity = async (user) => {
  const tranQuantity = {};
  for (let type = 0; type < 6; type++) {
    const quantity = await Transaction.count({ user, type });
    tranQuantity[`type${type}`] = quantity;
  }
  return tranQuantity;
};

const getMeoStatus = async (user) => {
  try {
    const trip = await Trip.findOne({
      user,
      from: {
        $lte: new Date(),
      },
      to: {
        $gte: new Date(),
      },
    });
    if (trip) return false;
    return true;
  } catch (error) {
    return true;
  }
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
        facebookToken,
      });
      updateBalance(user._id, 0);
      await user.save();
    } else {
      user.facebookToken = facebookToken;
      await user.save();
    }
    const accessToken = jwt.sign({
      token: user.token,
    }, 'sceret', { expiresIn: 180 * 86400 });
    const tranQuantity = await getTransactionQuantity(user._id);
    const atHome = await getMeoStatus(user._id);
    res.json({
      success: true,
      accessToken,
      user,
      tranQuantity,
      atHome,
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
    const atHome = await getMeoStatus(user._id);

    res.json({
      success: true,
      user: user,
      tranQuantity,
      atHome,
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
      user.totalWeed = user.totalWeed + 50;

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
      user.totalWeed = user.totalWeed + 50;

      addUserNotification({
        user: user._id,
        title: 'VPMeo',
        body: 'Đăng ký thành công CreditCard, bạn nhận được 50🍀',
        type: 'service',
        data: {},
      });
    }
    updateBalance(user._id, user.balance);
    await user.save();
    res.json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserFriend = async (req, res) => {
  try {
    const friendFbs = await getFriendList(req.user._id);
    const friends = await User.find({ facebookId: { $in: friendFbs } })
      .select('_id facebookId name totalTravel totalWeed hasCreditCard hasInternetBanking'); // eslint-disable-line
    res.json({
      success: true,
      friends,
    });
  } catch (error) {
    console.log(error);
  }
};
