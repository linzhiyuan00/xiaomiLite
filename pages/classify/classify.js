// pages/classify/classify.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classify:[
      { name: '新品' ,id:'xinpin'},
      { name: '众筹', id: 'zhongchou'},
      { name: '手机', id: 'shouji'},
      { name: '电视', id: 'dianshi'},
      { name: '电脑', id: 'diannao' },
      { name: '家电', id: 'jiadian'},
      { name: '路由', id: 'luyou'},
      { name: '出行', id: 'chuxing'},
      { name: '穿戴', id: 'chuandai'},
      { name: '智能', id: 'zhineng'},
      { name: '电源', id: 'dianyuan'},
      { name: '健康', id: 'jiankang'},
      { name: '灯具', id: 'dengju'},
      { name: '儿童', id: 'ertong'},
      { name: '插线板', id: 'chaxianban'},
      { name: '音频', id: 'yinpin'},
      { name: '箱包', id: 'xiangbao'},
      { name: '生活', id: 'shenghuo'},
      { name: '配件', id: 'peijian'},
      { name: '家装', id: 'jiazhuang'},
      { name: '礼品', id: 'lipin'},
      { name: '服务', id: 'fuwu'},

    ],
    curIndex: 0,
    isScroll: true,
    scrollanimation:true,
    toView: 'xinpin',
    clsgoods:[]
    
  },
  toDetail(){
    
  },
  switchTab(e) {
    // console.log(e);
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
    })
  },
  scroll(e) {
    // console.log(e.detail.scrollTop)
    let index = Math.floor(e.detail.scrollTop / 500);
    this.setData({
      curIndex: index
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5d030bd22c61271f2b41de46/classify-data',
      success: (res) => {
        this.setData({
          clsgoods: res.data.clsgoods
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
    // this.setData({
    //   curIndex:0,
    //   toView:'xinpin'
    // })
    //返回第一个
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