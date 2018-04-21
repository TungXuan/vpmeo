import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { login, updateFcmToken } from '../controllers/users';
import { startTrip } from '../controllers/travellings';
import { login, updateFcmToken, addUser, getUserProfile } from '../controllers/users';
import { addUserNotification, getUserNotifications } from '../controllers/notifications';
import { createTransaction, getUserTransactions, getUserTransactionsByType } from '../controllers/transactions';

const isLoggedIn = (req, res, next) => {
  const token = req.query.token || req.body.token ||
    req.headers['x-access-token'] || req.headers.authorization;
  if (token) {
    jwt.verify(token, 'sceret', async (err, decoded) => {
      if (err) {
        res.json({
          success: false,
          message: err.toString(),
        });
        return;
      }
      const token = decoded.token;
      try {
        const user = await User.findOne({ token });

        if (!user) {
          res.json({
            success: false,
            message: 'invalid token',
          });
          return;
        }
        req.user = user;
        next();
      } catch (error) {
        throw error;
      }
    });
  } else {
    res.json({
      success: false,
      message: 'token not found',
    });
  }
};

const router = express.Router();

router.post('/login', login);
router.get('/profile', isLoggedIn, async (req, res) => {
  res.json({
    success: true,
    user: (req.user),
  });
});
router.put('/me/fcmToken', isLoggedIn, updateFcmToken);
router.post('/trip/start', isLoggedIn, startTrip);
// router.post('/notification', addUserNotification);
router.get('/notifications', getUserNotifications);
router.post('/transaction', isLoggedIn, createTransaction);
router.get('/transactions', isLoggedIn, getUserTransactions);
router.get('/transactions-by-types', isLoggedIn, getUserTransactionsByType);

export default router;
