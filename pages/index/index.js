//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [],
    interval: 3000,
    duration: 800,
    recommendtext: '人气推荐',
    searchtext: '搜索商品',
    title1: '猜你喜欢',
    recommendbig:[],
    classlist:[
      {
        imgsrc:'/images/index/img1.png',
        text:'手机',
        url:'/pages/index/mbipone/mbipone'
      },
      {
        imgsrc: '/images/index/img2.png',
        text: '电视',
        url: '/pages/index/TV/TV'
      },
      {
        imgsrc: '/images/index/img3.png',
        text: '电脑',
        url: '/pages/index/PC/PC'
      },
      {
        imgsrc: '/images/index/img4.png',
        text: '智能',
        url: '/pages/index/zhineng/zhineng'
      },
      {
        imgsrc: '/images/index/img5.png',
        text: '家电',
        url: '/pages/index/jiadian/jiadian'
      },
      {
        imgsrc: '/images/index/img6.png',
        text: '新品',
        url: '/pages/index/xinpin/xinpin'
      },
      {
        imgsrc: '/images/index/img7.png',
        text: '小米众筹',
        url: '/pages/index/zhongchou/zhongchou'
      },
      {
        imgsrc: '/images/index/img8.png',
        text: '以旧换新',
        url: '/pages/index/huanxin/huanxin'
      },
      {
        imgsrc: '/images/index/img9.png',
        text: '1分拼团',
        url: '/pages/index/pintuan/pintuan'
      },
      {
        imgsrc: '/images/index/img10.png',
        text: '每日臻选',
        url: '/pages/index/zhenxuan/zhenxuan'
      },
    ],
    forrecmdgoods1:[],
    forrecmdgoods2:[],
    goodsdetail: [],
    detail: [],
    swiperCurrent:'',
    goodsList: [],


    // 组件所需的参数
    nvabarData: {
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '小米Lite', //导航栏 中间的标题
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,

    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/index-data',
      success: (res) => {
        this.setData({
          imgUrls: res.data.imgUrls,
          recommendbig: res.data.recommendbig,
          forrecmdgoods1: res.data.forrecmdgoods1,
          forrecmdgoods2: res.data.forrecmdgoods2,
          goodsList: res.data.goodsList
        })
        // console.log(this.data.detail)
      }
    })
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    // console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //轮播图点击事件
  toDetail:function(e){
    console.log(this.data.swiperCurrent)
    var index = this.data.swiperCurrent;
    let detail = this.data.imgUrls[index];
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })
   

    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailbig: function (e) {
    // var index = e.currentTarget.dataset.index;
    // var detail = this.data.goodsList[index];
    // app.globalData.detail = detail;
    // console.log(app.globalData.detail)
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var { url, goodsname, goodsspecial, goodsprice } = this.data.recommendbig[index];
    let detail = { url: url, goodsname: goodsname, goodsspecial: goodsspecial, goodsprice: goodsprice }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })



    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailleft: function (e) {
    var index = e.currentTarget.dataset.index1;
    console.log(index);
    var { url1, goodsname1, goodsspecial1, goodsprice1 } = this.data.forrecmdgoods1[index];
    let detail = { url: url1, goodsname: goodsname1, goodsspecial: goodsspecial1, goodsprice: goodsprice1 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailright: function (e) {
    var index = e.currentTarget.dataset.index2;
    console.log(index);
    var { url2, goodsname2, goodsspecial2, goodsprice2 } = this.data.forrecmdgoods1[index];
    let detail = { url: url2, goodsname: goodsname2, goodsspecial: goodsspecial2, goodsprice: goodsprice2 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailleft1: function (e) {
    var index = e.currentTarget.dataset.index3;
    console.log(index);
    var { url1, goodsname1, goodsspecial1, goodsprice1 } = this.data.forrecmdgoods2[index];
    let detail = { url: url1, goodsname: goodsname1, goodsspecial: goodsspecial1, goodsprice: goodsprice1 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailright2: function (e) {
    var index = e.currentTarget.dataset.index4;
    console.log(index);
    var { url2, goodsname2, goodsspecial2, goodsprice2 } = this.data.forrecmdgoods2[index];
    let detail = { url: url2, goodsname: goodsname2, goodsspecial: goodsspecial2, goodsprice: goodsprice2 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
})
