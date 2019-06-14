// pages/index/PC/PC.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000,
    duration: 800,
    imgUrls: [],
    recommendbig:[],
    forrecmdgoods1: [],
    goodsdetail: [],
    detail: [],
    swiperCurrent: ''

  },
  //轮播图的切换事件
  swiperChange: function (e) {
    // console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //轮播图点击事件
  toDetail: function (e) {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/PC-data',
      success: (res) => {
        this.setData({
          imgUrls: res.data.imgUrls,
          recommendbig: res.data.recommendbig,
          forrecmdgoods1: res.data.forrecmdgoods1
        })
        // console.log(this.data.detail)
      }
    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})