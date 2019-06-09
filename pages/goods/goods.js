// pages/goods/goods.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsdetail: [],
    toCartMsg: [],
    person: {
      "personImg": "https://cdn.cnbj0.fds.api.mi-img.com/b2c-data-mishop/f790b51a76afd7b41522048fa779d69d.jpg",
      "nickname": "小杰瑞",
      "content": "高大上。这是一个好评模板，因为本仙女很懒，不想每个产品都写好评，所以特地模仿别的仙女写下这个模板，但是这个产品无论是质量还是外形都是本仙女喜欢的类型，如果不喜欢，仙女收到东西会很生气，然后这个模板就会成为仙女喋喋不休的休书，自然不可能撒下这个好评，给各位淘友一个参考，本产品还是极好的，——来自一位慵懒的只爱购物不爱写评语却想换积分的仙女！好吧，说真的，很好，喜欢。国货之光"
    }

  },
  // tocart: function () {
  //   this.setData({
  //     toCartMsg: this.data.goodds
  //   })
  //   app.globalData.tocartMsg.push{ url2, goodsname2, goodsspecial2, goodsprice2 } {
  //     let detail = { url1, goodsname1, goodsspecial1, goodsprice1 }
  //     let detail = { url1, goodsname1, goodsspecial1, goodsprice1 }
  //     let detail = { url1, goodsname1, goodsspecial1, goodsprice1 }
  //     let detail = { url1, goodsname1, goodsspecial1, goodsprice1 sadsdazcxzcx      url2, goodsname2, goodsspecial2, goodsprice2 : url2url2(this.data.toCartMsg);
  //   wx.showToast({
  //     title: '已加入购物车',
  //     icon: 'success',
  //     duration: 2000
  //   })
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      gooddetail: app.goodsdetail
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