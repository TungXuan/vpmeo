/* eslint-diable-file */
import Item from '../models/item';
import Tour from '../models/tour';
import News from '../models/news';

export const initData = async () => {
  const tourNumber = await Tour.count();
  if (tourNumber === 0) {
    Tour.create([
      {
        location: 'Hà Nội',
        days: 5,
        schedule: [
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_ha_noi.png?alt=media&token=43569989-e1c5-4eb4-b812-8bd52e07d1bf',
            content: 'Hôm nay trời nắng đẹp lắm',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_ha_noi_3.png?alt=media&token=c3669ff5-e2f0-4ce1-9271-25e16513a7e7',
            content: 'Phở Hà Nội ngon quá ~~. Hôm nay còn được hoàn tiền 5% vì sử dụng thẻ credit VPBank StepUP ^ _ ^.',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_ha_noi_2.png?alt=media&token=fcf4ad3b-c0b1-4e86-b0b8-7c58e27d5bda',
            content: 'Thời tiết như này không ra ngoài thì phí lắm',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_chung.png?alt=media&token=99668d3a-74cb-4789-b393-ae72dbf2c27e',
            content: 'Chuẩn bị ít đồ quá không đi được nhiều tiếc thật T.T.Ước gì có nhiều cỏ hơn để mua thêm đồ, mình cần phải giao dịch qua ứng dụng của VPBank nhiều hơn nữa.',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_ha_noi.png?alt=media&token=43569989-e1c5-4eb4-b812-8bd52e07d1bf',
            content: 'Ở đây nhiều góc sống ảo ha, cần mua điện thoại mới chụp đẹp hơn.Me0 sẽ sử dụng dịch vụ trả góp 0% của VPBank để mua máy chụp đẹp nhất.',
          },
        ],
        souvenirs: ['1', '2', '3'],
        distance: 20,
      },
      {
        location: 'Sa Pa',
        days: 4,
        schedule: [
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_sapa.png?alt=media&token=61138d88-f1e1-4737-912d-3cc3e2875c01',
            content: 'Đứng từ trên đây nhìn xuống đẹp thật',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_chung.png?alt=media&token=99668d3a-74cb-4789-b393-ae72dbf2c27e',
            content: 'Thời tiết ở đây dễ chịu quá!!!',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_sapa_2.png?alt=media&token=88f67146-f309-4653-aa56-ac59e56d2299',
            content: 'Cảnh đẹp ghê chưa, Không khí ở đây là tuyệt vời nhất và Đồ ăn ở đây quá ngon ~~~',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_sapa_3.png?alt=media&token=3576e4e0-0eac-469c-9f12-8365e38204c8',
            content: 'Hôm nay bị ốm, đi khám ở bệnh viện thì nhận được ưu đãi vì sử dụng dịch vụ bảo hiểm của VPBank',
          },
        ],
        souvenirs: ['1', '2', '3'],
        distance: 30,
      },
      {
        location: 'Huế',
        days: 4,
        schedule: [
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_hue.png?alt=media&token=942fd865-199b-454e-823b-4e2c3b9d11f9',
            content: 'Bún bò Huế quá tuyệt',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_hue_2.png?alt=media&token=14550d9c-0d2a-43af-8bf3-da49b9300434',
            content: 'Đẹp ghê chưaaa',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_nha_trang_3.png?alt=media&token=7d4ecce7-434f-4b5d-94d9-d03838dbda07',
            content: 'Vất vả lắm mới tìm được chỗ đẹp như này đấy',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_chung.png?alt=media&token=99668d3a-74cb-4789-b393-ae72dbf2c27e',
            content: 'Hôm nay con đi được nhiều nơi chưa này.Hôm nay phải nộp tiền điện mà đang đi chơi không ở nhà, may mà có dịch vụ nộp tiền qua internet banking của VPBank, thật tiện lợi ^^',
          },
        ],
        souvenirs: ['1', '2', '3'],
        distance: 35,
      },
      {
        location: 'Nha Trang',
        days: 4,
        schedule: [
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_nha_trang.png?alt=media&token=67184859-7290-4fb4-a52c-6887d2f83ff8',
            content: 'Ở đây có nhiều bãi biển lắm này',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_chung.png?alt=media&token=99668d3a-74cb-4789-b393-ae72dbf2c27e',
            content: 'Giá mà mang nhiều tiền để đi được nhiều nơi hơn',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_nha_trang_2.png?alt=media&token=27171f2c-e15a-4b67-9828-72c8f8d59f86',
            content: 'Quên không mang bếp để nướng hải sản rồi : (. Nếu có thêm 100 điểm loyalty thì có thể ra VPBank đổi bếp rồi : (',
          },
          {
            image: 'https://firebasestorage.googleapis.com/v0/b/blm-vpmeo.appspot.com/o/locations%2Fimg_nha_trang_3.png?alt=media&token=7d4ecce7-434f-4b5d-94d9-d03838dbda07',
            content: 'Cuộc đời nói chung là vui, chỉ thiếu mỗi em, nói chung là buồn',
          },
        ],
        souvenirs: ['1', '2', '3'],
        distance: 50,
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
