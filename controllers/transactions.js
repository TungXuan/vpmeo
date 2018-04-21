import moment from 'moment';
import Transaction from '../models/transaction';

export const createTransaction = async (req, res) => {
  try {
    const { type } = req.body;
    const transaction = new Transaction({
      type,
      user: req.user._id,
    });
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

