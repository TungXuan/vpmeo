import moment from 'moment';
import Transaction from '../models/transaction';
import User from '../models/user';

const TransactionToBalance = {
  0: 20,
  1: 18,
  2: 15,
  3: 30,
  4: 25,
  5: 25,
}

export const createTransaction = async (req, res) => {
  try {
    const type = req.body.type;
    const transaction = new Transaction({
      type: type,
      user: req.user,
    });
    const user = await User.findOne({ _id: req.user._id });
    user.balance = user.balance + Number(TransactionToBalance[type])
    await user.save();
    transaction.addedGameBalance = Number(TransactionToBalance[type]);
    await transaction.save();
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

export const getUserTransactionsByType = (req, res) => {
  try {
    
  } catch (error) {
    throw error;
  }
}

