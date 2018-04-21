import Postcard from '../models/postcard';
import { addUserNotification } from './notifications';

export const sendPostcard = async (postcard) => {
  try {
    const { user, image, content } = postcard;
    const mPostcard = new Postcard(postcard);
    await mPostcard.save();
    await addUserNotification({
      user,
      type: 'postcard',
      title: 'VPMeo',
      body: 'MEO đã gửi bưu thiếp cho bạn',
      data: {
        _id: mPostcard._id.toString(),
        image,
        content,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
