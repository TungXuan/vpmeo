import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user';
import { startTrip } from '../controllers/travellings';
import { login, getUserProfile, registyService,
  getUserFriend } from '../controllers/users';
import { getUserNotifications } from '../controllers/notifications';
import { getPostcards } from '../controllers/postcards';
import { buyItem } from '../controllers/items';
import {
  createTransaction, getUserTransactions,
} from '../controllers/transactions';

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
router.get('/profile', isLoggedIn, getUserProfile);
router.post('/me/services', isLoggedIn, registyService);

router.get('/notifications', isLoggedIn, getUserNotifications);
router.post('/transaction', isLoggedIn, createTransaction);
router.get('/transactions', isLoggedIn, getUserTransactions);

router.post('/trip/start', isLoggedIn, startTrip);
router.get('/postcards', isLoggedIn, getPostcards);
router.post('/me/item', isLoggedIn, buyItem);

router.get('/me/friends', isLoggedIn, getUserFriend);

export default router;
