import moment from 'moment';
import Postcard from '../models/postcard';
import { addUserNotification } from './notifications';

moment.locale('vi');
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

export const getPostcards = async (req, res) => {
  try {
    const postcardList = await Postcard.find({ user: req.user._id })
      .sort('-createdAt');
    const postcards = postcardList.map((portcard) => {
      return Object.assign(JSON.parse(JSON.stringify((portcard))), {
        createdAtString: moment(portcard.createdAt).fromNow(),
      });
    });
    res.json({
      success: true,
      postcards,
    });
  } catch (error) {
    console.og(error);
  }
};
