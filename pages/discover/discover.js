// pages/discover/discover.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head:[
      {
        url:'/images/discover/icon1.png',
        name:'新品预约'
      },
      {
        url: '/images/discover/icon2.png',
        name: '活动频道'
      },
      {
        url: '/images/discover/icon3.png',
        name: '线下门店'
      },
    ],
    mainbody:[
      {
        url:"https://i8.mifile.cn/b2c-mimall-media/d57b31c16bb23245e8ae02bd885cb647.jpg?w=1212&h=716",
        title:'抽奖',
        name:'小米圈铁耳机2 随身版 * 10'
      },
      {
        url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/826a98f7c95ceba2c2e70829fdb2237d.jpg?w=1080&h=720",
        title: '抽奖',
        name: '米家床头灯2 柔光版 * 2'
      },
      {
        url: "https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/471d75c877eff80fa5f98487abb1898d.jpg?w=1080&h=720",
        title: '抽奖',
        name: '小米米家智能插座 * 10'
      },
      {
        url: "https://i8.mifile.cn/b2c-mimall-media/01a8d491c76acb53aa918068ccfa59c1.jpg?w=1080&h=720",
        title: '专题',
        name: '米家新风机 * 2'
      },
    ]

  },
  kong(){
    wx.showToast({
      title: '页面溜了...',
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