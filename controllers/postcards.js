import Postcard from '../models/postcard';

export const sendPostcard = async (postcard) => {
  try {
    await Postcard.create(postcard);
    // send Notifi to user
  } catch (error) {
    console.log(error);
  }
};
