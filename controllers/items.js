import User from '../models/user';
import Item from '../models/item';
import { updateBalance } from '../services/firebase';

export const buyItem = async (req, res) => {
  const { body: { code }, user: { balance, items, _id } } = req;
  try {
    const item = await Item.findOne({ code });
    if (!item) {
      res.json({
        success: false,
        message: 'item not found',
      });
    } else if (item.price > balance) {
      res.json({
        success: false,
        message: 'not enough weed',
      });
    } else if (items.indexOf(code) > - 1) {
      res.json({
        success: false,
        message: 'this item is buyed',
      });
    } else {
      const user = await User.findOneAndUpdate({ _id }, {
        $addToSet: {
          items: code,
        },
        $inc: {
          balance: item.price * -1,
        },
      }, { new: true });
      updateBalance(user._id, user.balance);
      res.json({
        success: true,
        user,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
