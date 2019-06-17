// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userimg:'/images/user/img1.jpg',
    userid:'小杰瑞',
    xiaomitip:'绑定小米账号',
    mipinicon:'/images/user/icon1.png',
    mipintitle:'小米精品推荐',
    state:' (内测)',
    settingicon:'/images/user/icon6.png',
    settingtitle:'设置',
    maindetail:[
      {
        url:'/images/user/icon2.png',
        title:'我的订单'
      },
      {
        url: '/images/user/icon3.png',
        title: '会员中心'
      },
      {
        url: '/images/user/icon4.png',
        title: '我的优惠券'
      },
      {
        url: '/images/user/icon5.png',
        title: '我的F码'
      },
    ]
  },
  kong(){
    wx.showToast({
      title: '页面偷偷溜了哟',
      icon:'/images/system-icon/huaji.png',
      image:'/images/system-icon/huaji.png',
      duration:1000
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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