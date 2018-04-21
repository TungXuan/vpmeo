import moment from 'moment';
import Transaction from '../models/transaction';
import User from '../models/user';
import { addUserNotification }
  from '../controllers/notifications';
import { updateBalance } from '../services/firebase';
moment.locale('vi');

const TransactionToBalance = {
  0: 20,
  1: 18,
  2: 15,
  3: 30,
  4: 25,
  5: 25,
};

export const createTransaction = async (req, res) => {
  try {
    const type = req.body.type;
    const transaction = new Transaction({
      type: type,
      user: req.user,
    });
    const user = await User.findOne({ _id: req.user._id });
    const addedGameBalance = Number(TransactionToBalance[type]);
    user.balance = user.balance + addedGameBalance;
    await user.save();
    transaction.addedGameBalance = addedGameBalance;
    await transaction.save();
    addUserNotification({
      type: 'transaction',
      user: req.user._id,
      title: 'VPMeo',
      body: `Bạn vừa thực hiện giao dịch và nhận được ${addedGameBalance}🍀`,
      data: {
        _id: transaction._id,
        type,
        addedGameBalance,
        balance: transaction.balance,
      },
    });
    updateBalance(user._id, user.balance);
    res.json({
      success: true,
      transaction,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserTransactions = async (req, res) => {
  try {
    const transactionList = await Transaction.find({ user: req.user._id })
      .sort('-createdAt');
    const transactions = transactionList.map((tran) => {
      return Object.assign(JSON.parse(JSON.stringify((tran))), {
        createdAtString: moment(tran.createdAt).fromNow(),
      });
    });
    res.json({
      success: true,
      transactions,
    });
  } catch (error) {
    console.log(error);
  }
};

