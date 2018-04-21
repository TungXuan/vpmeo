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
        title: 'Me0 vừa tìm được rất nhiều ưu đãi tuyệt vời tại các nhà hàng. Xem ngay nào!!!',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide1_ev1.png?alt=media&token=768f19b5-9ecd-4549-8851-f58b2b0632c3',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide2_ev1.png?alt=media&token=92f28cdf-ad8f-49a7-a382-25fe4ccb086c',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide3_ev1.png?alt=media&token=226cf0d2-a4cf-4409-ba07-e4b6ea9c61de',
        ],
      },
      {
        title: 'Hmm, hôm nay bận bịu quá mà đến hạn đóng tiền điện nước rồi. Không lo, Me0 biết cách tiện lợi hơn nhiều.',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide1_ev2.png?alt=media&token=f348b50b-fa99-4fd0-affb-c9db76291242',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide2_ev2.png?alt=media&token=223f7c62-9571-4a9f-a90d-4098be7d6f56',
        ],
      },
      {
        title: 'Đi du lịch nhiều mà không có chiếc máy ảnh xịn để sống ảo. Mua trả góp ở đâu bây giờ?',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide1.png?alt=media&token=771b6b6a-c5e8-47ca-8683-f0fcb129e3d4',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide2.png?alt=media&token=428681be-1588-4224-b284-1b5a6d69a998',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide3.png?alt=media&token=ce108347-5040-43c2-ac5a-c7d0ea7a83bc',
        ],
      },
      {
        title: 'Avenger - Cuộc chiến vô cực sắp ra mắt rồi. Mau đến CGV để nhận vé xem phim và ưu đãi cực oách khi thanh toán bằng VPBank Online nào!',
        images: [
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide1_ev4.png?alt=media&token=da9b9bb2-066d-4e52-b4ae-f90dcd83595d',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide2_ev4.png?alt=media&token=99ec99cb-304e-4cc8-bd0e-f51bd3efd4d7',
          'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/slide3_ev4.png?alt=media&token=3a19d885-9065-4a37-aef3-f17b8c37daba',
        ],
      },
    ]);
  }
};

export default {
  initData,
};
