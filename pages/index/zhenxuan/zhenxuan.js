// pages/index/zhenxuan/zhenxuan.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000,
    duration: 800,
    imgUrls: [],
    goodsList: [],
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


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/zhenxuan-data',
      success: (res) => {
        this.setData({
          imgUrls: res.data.imgUrls,
          goodsList: res.data.goodsList,
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