// pages/classify/classify.js
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
    isScroll: false,
    toView: 'xinpin',
    clsgoods:[
      {
        title:'手机',
        id:'shouji',
        detail:[
          {
            url:'/images/classify/img1.jpg',
            name:'Redmi 7'
          }
        ]
      },
      {
        title: '家电',
        id:'jiadian',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '电脑',
        id:'diannao',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '众筹好物',
        id:'zhongchouhaowu',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '家庭装',
        id:'jiatingzhuang',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '小米手机',
        id:'xiaomishouji',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '红米Redmi',
        id:'hongmi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '移动4G+专区',
        id:'yidong',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '手机配件',
        id:'shoujipeijian',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },
      {
        title: '电视',
        id:'dianshi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          }
        ]
      },

    ]
    
  },
  switchTab(e) {
    console.log(e);
    this.setData({
      toView: e.target.dataset.id,
      curIndex: e.target.dataset.index
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