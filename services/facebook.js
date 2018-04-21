import axios from 'axios';
import User from '../models/user';
import { FB_API_URL } from '../constants';

export const getFriendList = async (userId) => {
  try {
    const user = await User.findOne({ _id: userId });
    if (!user) return [];
    const response = await axios.get(`${FB_API_URL}/friends?access_token=${user.facebookToken}`); // eslint-disable-line
    if (!response.data || !response.data.data) return [];
    const friendsList = response.data.data;
    return friendsList.map((friend) => friend.id);
  } catch (error) {
    console.log(error);
    return [];
  }
};
