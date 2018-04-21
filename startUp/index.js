import Item from '../models/item';
import Tour from '../models/tour';

export const initData = async () => {
  const tourNumber = await Tour.count();
  if (tourNumber === 0) {
    Tour.create([
      {
        location: 'Ha noi',
        days: 2,
        schedule: [{
          image: '1',
          content: 'ngay 1',
        }, {
          image: '2',
          content: 'ngay 2',
        }],
        souvenirs: ['1', '2', '3'],
      },
      {
        location: 'Ha Long',
        days: 3,
        schedule: [{
          image: '1',
          content: 'ngay 1',
        }, {
          image: '2',
          content: 'ngay 2',
        }, {
          image: '3',
          content: 'ngay 3',
        }],
        souvenirs: ['4', '5'],
      },
    ]);
  }

  const itemNumer = await Item.count();
  if (itemNumer === 0) {

  }
};

export default {
  initData,
};
