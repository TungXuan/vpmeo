import Item from '../models/item';
import Tour from '../models/tour';
import News from '../models/news';

export const initData = async () => {
  const tourNumber = await Tour.count();
  if (tourNumber === 0) {
    Tour.create([
      {
        location: 'Ha noi',
        days: 2,
        schedule: [{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-f0FvoRZRrznodPqVaxfM-Zlz1SFtpD0C3nEtXMJjWDhZqoi',
          content: 'ngay 1',
        }, {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-f0FvoRZRrznodPqVaxfM-Zlz1SFtpD0C3nEtXMJjWDhZqoi',
          content: 'ngay 2',
        }],
        souvenirs: ['1', '2', '3'],
        distance: 10,
      },
      {
        location: 'Ha Long',
        days: 3,
        schedule: [{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-f0FvoRZRrznodPqVaxfM-Zlz1SFtpD0C3nEtXMJjWDhZqoi',
          content: 'ngay 1',
        }, {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-f0FvoRZRrznodPqVaxfM-Zlz1SFtpD0C3nEtXMJjWDhZqoi',
          content: 'ngay 2',
        }, {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-f0FvoRZRrznodPqVaxfM-Zlz1SFtpD0C3nEtXMJjWDhZqoi',
          content: 'ngay 3',
        }],
        souvenirs: ['4', '5'],
        distance: 200,
      },
    ]);
  }

  const itemNumer = await Item.count();
  if (itemNumer === 0) {
    Item.create([
      {
        code: 0,
        price: 8,
      },
      {
        code: 1,
        price: 6,
      },
      {
        code: 2,
        price: 10,
      },
      {
        code: 3,
        price: 30,
      },
      {
        code: 4,
        price: 50,
      },
      {
        code: 5,
        price: 80,
      },
      {
        code: 6,
        price: 3,
      },
      {
        code: 7,
        price: 5,
      },
      {
        code: 8,
        price: 10,
      },
    ]);
  }

  const newsNumber = await News.count();
  if (newsNumber === 0) {
    News.create([
      {
        title: 'News 1',
        images: [
          'http://www.novalandcanho.com/imageshh/image/can-ho-saigon-royal/phoi-canh-du-an-can-ho-saigon-royal-residence-novaland-quan-4.jpg',
          'http://www.barcodemagazine.vn/wp-content/uploads/2017/05/barcode-vao-sai-gon-di-main.jpeg',
        ],
      },
      {
        title: 'News 2',
        images: [
          'http://www.novalandcanho.com/imageshh/image/can-ho-saigon-royal/phoi-canh-du-an-can-ho-saigon-royal-residence-novaland-quan-4.jpg',
          'http://www.barcodemagazine.vn/wp-content/uploads/2017/05/barcode-vao-sai-gon-di-main.jpeg',
        ],
      },
      {
        title: 'News 3',
        images: [
          'http://www.novalandcanho.com/imageshh/image/can-ho-saigon-royal/phoi-canh-du-an-can-ho-saigon-royal-residence-novaland-quan-4.jpg',
          'http://www.barcodemagazine.vn/wp-content/uploads/2017/05/barcode-vao-sai-gon-di-main.jpeg',
        ],
      },
      {
        title: 'News 4',
        images: [
          'http://www.novalandcanho.com/imageshh/image/can-ho-saigon-royal/phoi-canh-du-an-can-ho-saigon-royal-residence-novaland-quan-4.jpg',
          'http://www.barcodemagazine.vn/wp-content/uploads/2017/05/barcode-vao-sai-gon-di-main.jpeg',
        ],
      },
    ]);
  }
};

export default {
  initData,
};
