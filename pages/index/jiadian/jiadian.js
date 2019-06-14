// pages/index/jiadian/jiadian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList: [],
    jiadianimg:'https://i8.mifile.cn/b2c-mimall-media/80319115980df09cdea5bc861911bdd5.jpg?w=1212&h=716'
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/jiadian-data',
      success: (res) => {
        this.setData({
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