// pages/index/mbipone/mbipone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    interval: 3000,
    duration: 800,
    imgUrls: [
      'https://i1.mifile.cn/a4/xmad_15587134858173_vcaQD.jpg',
      'https://i1.mifile.cn/a4/xmad_15529884424562_HKYaG.jpg',
      'https://i8.mifile.cn/b2c-mimall-media/1f60a0afff47ac32b7a1659e2b24c19a.jpg?w=1708&h=868'
    ],
    forrecmdgoods1: [
      {
        url1: 'https://i1.mifile.cn/a1/pms_1552805539.44635255!200x200.jpg',
        goodsname1: '黑鲨游戏手机 2',
        goodsspecial1: '晓龙855，立体触控',
        goodsprice1: '2899元起',
        url2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/2eebb2092d4fa5f1ff0576881d112f67.jpg?w=1080&h=1080',
        goodsname2: '小米9 SE',
        goodsspecial2: '索尼4800万三摄，晓龙712',
        goodsprice2: '1999元起',
      },
      {
        url1: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d039548049ef8bf66e5df4061851507a.jpg?w=1080&h=1080',
        goodsname1: 'Redmi Note 7',
        goodsspecial1: '4800万拍照 长续航',
        goodsprice1: '999元起',
        url2: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5449b86700b536a8bb74ebdc4b20769c.jpg?w=1080&h=1080',
        goodsname2: '小米9',
        goodsspecial2: '骁龙855，索尼4800万三摄',
        goodsprice2: '2999元起',
      }
    ],
  },
  toDetail: function (e) {
    // var index = e.currentTarget.dataset.index;
    // var detail = this.data.goodsList[index];
    // app.globalData.detail = detail;
    // console.log(app.globalData.detail)



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