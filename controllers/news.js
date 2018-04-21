import News from '../models/news';
import { updateBalance } from '../services/firebase';

export const getAllNews = async (req, res) => {
  try {
    const newsList = await News.find();
    const news = newsList.map((tmp) => {
      const read = tmp.readers.indexOf(req.user._id) > -1;
      return {
        _id: tmp._id,
        title: tmp.title,
        images: tmp.images,
        read,
      };
    });
    res.json({
      success: true,
      news,
    });
  } catch (error) {
    console.log(error);
  }
};

export const readNews = async (req, res) => {
  try {
    const { newsId } = req.body;
    const user = req.user;

    const news = await News.findOne({ _id: newsId });
    if (!news) res.json({ success: false, message: 'news not found' });
    else if (news.readers.indexOf(user._id) > -1) {
      res.json({ success: false, message: 'news was read' });
    } else {
      news.readers.push(user._id);
      news.save();
      user.balance = user.balance + 10;
      user.totalWeed = user.totalWeed + 10;
      await user.save();
      updateBalance(user._id, user.balance);
      res.json({
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
