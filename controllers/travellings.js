import Agenda from 'agenda';
import User from '../models/user';
import Trip from '../models/trip';
import Tour from '../models/tour';
import { ONE_DAY } from '../constants';
const agenda = new Agenda({ db: { address: 'mongodb://127.0.0.1/agenda' } });

export const startTrip = async (req, res) => {
  try {
    const userId = req.user._id;
    const { item1, item2, item3 } = req.body;
    const items = [item1, item2, item3];

    await User.update({
      _id: userId,
    }, {
      $pull: {
        items: {
          $in: items,
        },
      },
    });
    const trips = await Trip.find({ user: userId });
    const oldTours = trips.map((trip) => trip.tour);
    let tour = await Tour.findOne({
      _id: {
        $nin: oldTours,
      },
    });
    const now = new Date();
    tour = await Tour.findOne();

    const newTrip = new Trip({
      user: userId,
      tour: tour._id,
      from: now,
      to: new Date(now.getTime() + tour.days * ONE_DAY),
    });

    await newTrip.save();
    await User.update({ _id: userId }, {
      $inc: {
        totalTravel: tour.distance,
      },
    });
    for (let i = 0; i < tour.schedule.length; i++) {
      const notiTime = new Date(now.getTime() + ONE_DAY * (i + 1));
      agenda.schedule(notiTime, 'send postcard', {
        user: userId,
        trip: newTrip._id,
        image: tour.schedule[i].image,
        content: tour.schedule[i].content,
      });
    }

    res.json({
      success: true,
      trip: newTrip,
    });
  } catch (error) {
    console.log(error);
  }
};
