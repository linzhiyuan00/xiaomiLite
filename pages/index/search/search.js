// pages/index/search/search.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    searchgoods:[]
  },
  //获取输入框输入的关键词匹配搜索数据
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    wx.request({
      url: `https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/search?goodsname=${e.detail.value}`,
      success: (res) => {
        console.log(res.data.data)
        this.setData({
          searchgoods:res.data.data
        })
      }
    })
  },
  
  toDetail:function(e){
    var index = e.currentTarget.dataset.index;
    console.log(index);
    app.goodsdetail = this.data.searchgoods[index];

    wx.navigateTo({
      url: '/pages/goods/goods',
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