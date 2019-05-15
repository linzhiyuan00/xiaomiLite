//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '/images/index/b1.png',
      '/images/index/b2.png',
      '/images/index/b3.png'
    ],
    interval: 3000,
    duration: 800,
    classlist:[
      {
        imgsrc:'/images/system-icon/img1.png',
        text:'手机'
      },
      {
        imgsrc: '/images/system-icon/img2.png',
        text: '电视'
      },
      {
        imgsrc: '/images/system-icon/img3.png',
        text: '电脑'
      },
      {
        imgsrc: '/images/system-icon/img4.png',
        text: '智能'
      },
      {
        imgsrc: '/images/system-icon/img5.png',
        text: '生态链'
      },
      {
        imgsrc: '/images/system-icon/img6.png',
        text: '新品'
      },
      {
        imgsrc: '/images/system-icon/img7.png',
        text: '小米众筹'
      },
      {
        imgsrc: '/images/system-icon/img8.png',
        text: '以旧换新'
      },
      {
        imgsrc: '/images/system-icon/img9.png',
        text: '1分拼团'
      },
      {
        imgsrc: '/images/system-icon/img10.png',
        text: '每日臻选'
      },
    ],
    recommendtext:'人气推荐',
    searchtext:'搜索商品',
    searchimg:'/images/system-icon/search.png'
  },
})
