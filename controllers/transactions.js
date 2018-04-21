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

export const getUserTransactionsByType = async (req, res) => {
  try {
    let transactions = []
    const type0 = await Transaction.count({type: 0, user: req.user._id})
    transactions.push({
      type0: type0
    })
    const type1 = await Transaction.count({type: 1, user: req.user._id})
    transactions.push({
      type1: type1
    })
    const type2 = await Transaction.count({type: 2, user: req.user._id})
    transactions.push({
      type2: type2
    })
    const type3 = await Transaction.count({type: 3, user: req.user._id})
    transactions.push({
      type3: type3
    })
    const type4 = await Transaction.count({type: 4, user: req.user._id})
    transactions.push({
      type4: type4
    })
    const type5 = await Transaction.count({type: 5, user: req.user._id})
    transactions.push({
      type5: type5
    })
    res.json({
      success: true,
      transactions,
    })
  } catch (error) {
    throw error;
  }
}

