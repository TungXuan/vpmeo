import * as admin from 'firebase-admin';
import serviceAccount from '../config/firebase';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://blm-vpmeo.firebaseio.com',
  storageBucket: 'blm-vpmeo.appspot.com',
});

const realTimeDB = admin.database();
const userRef = realTimeDB.ref('/users');

export const updateNotification =
  async ({ _id, user, type, title, body, data }) => {
    const uRef = userRef.child(user.toString());
    uRef.set({
      notification: {
        _id: _id.toString(),
        type,
        title,
        body,
        data,
      },
    });
  };
