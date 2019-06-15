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
    clsgoods:[
      {
        title:'手机',
        id:'xinpin',
        detail:[
          {
            url:'/images/classify/img1.jpg',
            name:'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '家电',
        id:'xinpin',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '电脑',
        id:'xinpin',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '众筹好物',
        id:'zhongchou',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '家庭装',
        id:'zhongchou',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '小米手机',
        id:'shouji',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '红米Redmi',
        id:'shouji',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '移动4G+专区',
        id:'shouji',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '手机配件',
        id:'shouji',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '电视',
        id:'dianshi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
        ]
      },
      {
        title: '盒子',
        id: 'dianshi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          
        ]
      },
      {
        title: '音箱',
        id: 'dianshi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '电视配件与会员',
        id: 'dianshi',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '电脑',
        id: 'diannao',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '电脑配件',
        id: 'diannao',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '家电',
        id: 'jiadian',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '厨房家电',
        id: 'jiadian',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '路由器',
        id: 'luyou',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '电力猫',
        id: 'luyou',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: 'WIFI放大器',
        id: 'luyou',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '出行',
        id: 'chuxing',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '穿戴',
        id: 'chuandai',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '智能',
        id: 'zhineng',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '电源',
        id: 'dianyuan',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '健康',
        id: 'jiankang',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '灯具',
        id: 'dengju',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '儿童',
        id: 'ertong',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '插线板',
        id: 'chaxianban',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '音频',
        id: 'yinpin',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '箱包',
        id: 'xiangbao',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '生活',
        id: 'shenghuo',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '配件',
        id: 'peijian',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '家装',
        id: 'jiazhuang',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '礼品',
        id: 'lipin',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },
      {
        title: '服务',
        id: 'fuwu',
        detail: [
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },
          {
            url: '/images/classify/img1.jpg',
            name: 'Redmi 7'
          },

        ]
      },

    ],
    // 组件所需的参数
    nvabarData: {
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '小米Lite', //导航栏 中间的标题
    },

    // 此页面 页面内容距最顶部的距离
    height: app.globalData.height * 2 + 20,
    
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