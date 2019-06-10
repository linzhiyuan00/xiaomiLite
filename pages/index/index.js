//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [  
      {
        url: 'https://i1.mifile.cn/a4/xmad_15587134858173_vcaQD.jpg',
        goodsname: 'Redmi K20 Pro全网通版',
        goodsspecial: '晓龙855 / 4700mAh锂电池',
        goodsprice: '2999'
      },
      {
        url: 'https://i1.mifile.cn/a4/xmad_15529884424562_HKYaG.jpg',
        goodsname: 'Redmi Note 7 Pro',
        goodsspecial: '4200mAh大电量 / 18个月超长质保',
        goodsprice: '1599'
      },
      {
        url: 'https://i1.mifile.cn/a4/xmad_15586683348207_opnBm.jpg',
        goodsname: '65"小米电视4A',
        goodsspecial: '4K HDR/人工智能语音系统',
        goodsprice: '2799'
      }
    ],
    interval: 3000,
    duration: 800,
    recommendtext: '人气推荐',
    searchtext: '搜索商品',
    title1: '猜你喜欢',
    recommendbig:[
     {
        url:'https://i1.mifile.cn/a4/xmad_15586683348207_opnBm.jpg',
        goodsname:'65"小米电视4A',
        goodsspecial:'4K HDR/人工智能语音系统',
        goodsprice:'2799'
     }
    ],
    classlist:[
      {
        imgsrc:'/images/index/img1.png',
        text:'手机',
        url:'/pages/index/mbipone/mbipone'
      },
      {
        imgsrc: '/images/index/img2.png',
        text: '电视',
        url: '/pages/index/TV/TV'
      },
      {
        imgsrc: '/images/index/img3.png',
        text: '电脑',
        url: '/pages/index/PC/PC'
      },
      {
        imgsrc: '/images/index/img4.png',
        text: '智能',
        url: '/pages/index/zhineng/zhineng'
      },
      {
        imgsrc: '/images/index/img5.png',
        text: '家电',
        url: '/pages/index/jiadian/jiadian'
      },
      {
        imgsrc: '/images/index/img6.png',
        text: '新品',
        url: '/pages/index/xinpin/xinpin'
      },
      {
        imgsrc: '/images/index/img7.png',
        text: '小米众筹',
        url: '/pages/index/zhongchou/zhongchou'
      },
      {
        imgsrc: '/images/index/img8.png',
        text: '以旧换新',
        url: '/pages/index/huanxin/huanxin'
      },
      {
        imgsrc: '/images/index/img9.png',
        text: '1分拼团',
        url: '/pages/index/pintuan/pintuan'
      },
      {
        imgsrc: '/images/index/img10.png',
        text: '每日臻选',
        url: '/pages/index/zhenxuan/zhenxuan'
      },
    ],
    forrecmdgoods1:[
      {
        url1:'https://i1.mifile.cn/a1/pms_1550642182.7527088!220x220.jpg',
        goodsname1:'小米9',
        goodsspecial1:'骁龙855，索尼4800万超广角微距三摄',
        goodsprice1:'2999',
        url2: 'https://i1.mifile.cn/a1/pms_1547020852.30751177!220x220.jpg',
        goodsname2: 'Redmi Note 7',
        goodsspecial2: '4800万拍照千元机，18个月超长质保',
        goodsprice2: '999',
      },
      {
        url1: 'https://i1.mifile.cn/a4/xmad_15512365381648_yZpKS.jpg',
        goodsname1: '洗烘一体机10kg',
        goodsspecial1: '洗烘一体',
        goodsprice1: '2199',
        url2: 'https://i1.mifile.cn/a1/pms_1527754949.17141338!220x220.jpg',
        goodsname2: '小米手环3',
        goodsspecial2: ' ',
        goodsprice2: '169',
      }
    ],
    forrecmdgoods2:[
      {
        url1: 'https://i1.mifile.cn/a1/pms_1524621350.77238418!220x220.jpg',
        goodsname1: '小米6X',
        goodsspecial1: '轻薄美观的拍照手机',
        goodsprice1: '1599',
        url2: 'https://i1.mifile.cn/a1/pms_1537324004.08544830!220x220.jpg',
        goodsname2: '小米8青春版',
        goodsspecial2: '潮流镜面渐变色，2400万自拍旗舰',
        goodsprice2: '1499',
      },
      {
        url1: 'https://i1.mifile.cn/a4/xmad_15350951136177_QUuVm.png',
        goodsname1: '15.6"笔记本 i5 4G MX110',
        goodsspecial1: ' ',
        goodsprice1: '4199',
        url2: 'https://i1.mifile.cn/a4/xmad_15281923207128_rOfDp.png',
        goodsname2: '米家LED吸顶灯',
        goodsspecial2: '用光线，还原理想生活',
        goodsprice2: '399',
      },
      {
        url1: 'https://i1.mifile.cn/a4/xmad_14972549116226_tZpod.png',
        goodsname1: '米家空气净化器Pro',
        goodsspecial1: 'OLED 显示屏幕 / 激光颗粒物传感器',
        goodsprice1: '1499',
        url2: 'https://i1.mifile.cn/a1/pms_1524636075.71677607!220x220.jpg',
        goodsname2: '13.3"小米笔记本Air',
        goodsspecial2: ' ',
        goodsprice2: '5999',
      },
      {
        url1: 'https://i1.mifile.cn/a1/pms_1506733860.3164711!220x220.jpg',
        goodsname1: '车载空气净化器',
        goodsspecial1: '高效净化车内空气',
        goodsprice1: '￥449',
        url2: 'https://i1.mifile.cn/a1/pms_1539051273.95659582!220x220.jpg',
        goodsname2: '小米米家行车记录仪',
        goodsspecial2: ' ',
        goodsprice2: '349',
      },
      {
        url1: 'https://i1.mifile.cn/a1/pms_1528719461.20891365!220x220.jpg',
        goodsname1: '红米6A',
        goodsspecial1: '12nm高性能处理器，1300万高清相机',
        goodsprice1: '549',
        url2: 'https://i1.mifile.cn/a1/pms_1545457719.47232999!220x220.png',
        goodsname2: '小米Play',
        goodsspecial2: '5.84"小水滴全面屏，后置1200万 AI 双摄',
        goodsprice2: '1099',
      },
      {
        url1: 'https://i1.mifile.cn/a1/pms_1504498936.11861982!220x220.jpg',
        goodsname1: '米家电水壶',
        goodsspecial1: '一杯水，是一家人的安心',
        goodsprice1: '99',
        url2: 'https://i1.mifile.cn/a1/pms_1498564154.53184175!220x220.jpg',
        goodsname2: '米家声波电动牙刷',
        goodsspecial2: '磁悬浮声波马达，定制多种刷牙模式',
        goodsprice2: '199',
      },
      
    ],
    goodsdetail: [],
    detail: [],
    swiperCurrent:''
  },
  //轮播图的切换事件
  swiperChange: function (e) {
    // console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  //轮播图点击事件
  toDetail:function(e){
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
  toDetailbig: function (e) {
    // var index = e.currentTarget.dataset.index;
    // var detail = this.data.goodsList[index];
    // app.globalData.detail = detail;
    // console.log(app.globalData.detail)
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var { url, goodsname, goodsspecial, goodsprice } = this.data.recommendbig[index];
    let detail = { url: url, goodsname: goodsname, goodsspecial: goodsspecial, goodsprice: goodsprice }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })



    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailleft: function (e) {
    var index = e.currentTarget.dataset.index1;
    console.log(index);
    var { url1, goodsname1, goodsspecial1, goodsprice1 } = this.data.forrecmdgoods1[index];
    let detail = { url: url1, goodsname: goodsname1, goodsspecial: goodsspecial1, goodsprice: goodsprice1 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailright: function (e) {
    var index = e.currentTarget.dataset.index2;
    console.log(index);
    var { url2, goodsname2, goodsspecial2, goodsprice2 } = this.data.forrecmdgoods1[index];
    let detail = { url: url2, goodsname: goodsname2, goodsspecial: goodsspecial2, goodsprice: goodsprice2 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailleft1: function (e) {
    var index = e.currentTarget.dataset.index3;
    console.log(index);
    var { url1, goodsname1, goodsspecial1, goodsprice1 } = this.data.forrecmdgoods2[index];
    let detail = { url: url1, goodsname: goodsname1, goodsspecial: goodsspecial1, goodsprice: goodsprice1 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  toDetailright2: function (e) {
    var index = e.currentTarget.dataset.index4;
    console.log(index);
    var { url2, goodsname2, goodsspecial2, goodsprice2 } = this.data.forrecmdgoods2[index];
    let detail = { url: url2, goodsname: goodsname2, goodsspecial: goodsspecial2, goodsprice: goodsprice2 }
    // console.log(detail);
    app.goodsdetail = detail;
    console.log(app.goodsdetail)
    this.setData({
      detail: detail
    })


    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
})
