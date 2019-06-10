// pages/cart/cart.js

const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carticon:'/images/cart/icon1.png',
    kongtip:'购物车还是空的',
    tolitebutton:'到小米商城逛逛',
    selectAllStatus: false,
    totalPrice: 0,
    flag: false,
    cartlist: [
      // {
      //   image:'/images/coco.png',
      //   title:'coco奶茶',
      //   number:'1',
      //   price:'18'
      // }
    ]


  },
  minusCount: function (e) {
    let cartlist = this.data.cartlist;
    const index = e.target.dataset.index;
    let num = this.data.cartlist[index].number;
    console.log(this.data.cartlist[index].number);
    num -= 1;
    cartlist[index].number = num;
    if (num == 0) {
      cartlist.splice(index, 1)
    }
    if (this.data.cartlist.length == 0) {
      this.setData({
        flag: false
      })
    }
    this.setData({
      cartlist
    })
  },
  addCount: function (e) {
    let cartlist = this.data.cartlist;
    const index = e.target.dataset.index;
    let num = this.data.cartlist[index].number;
    console.log(this.data.cartlist[index].number);
    num += 1;

    cartlist[index].number = num;
    this.setData({
      cartlist
    })
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let cartlist = this.data.cartlist;
    for (let i = 0; i < cartlist.length; i++) {

      cartlist[i].selected = selectAllStatus;
    }
    this.setData({
      cartlist,
      selectAllStatus,
    })
    this.getTotalPrice()
  },
  getTotalPrice: function (e) {
    let cartlist = this.data.cartlist;
    let total = 0;
    for (let i = 0; i < cartlist.length; i++) {
      if (cartlist[i].selected) {
        total += (+cartlist[i].goodsprice * +cartlist[i].number);
      }
    }
    // total=total.toFixed(1)
    this.setData({
      totalPrice: total
    });
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let cartlist = this.data.cartlist;
    const selected = cartlist[index].selected;
    cartlist[index].selected = !selected;
    const a = [];
    for (let i = 0; i < cartlist.length; i++) {
      if (cartlist[i].selected) {
        a.push(cartlist[index])
      }
    }
    if (cartlist.length <= a.length) {
      this.setData({
        selectAllStatus: true, cartlist
      });
    } else {
      this.setData({
        selectAllStatus: false, cartlist
      });
    }
    this.getTotalPrice()
  },
  deleteList: function (e) {
    const index = e.target.dataset.index;
    let cartlist = this.data.cartlist;
    cartlist.splice(index, 1)
    if (this.data.cartlist.length == 0) {
      this.setData({
        flag: false
      })
    }
    this.setData({
      cartlist
    })

  },
  fff() {
    let cartlist =app.globalData.cartMsg
    // cartlist.concat(app.globalData.cartMsg)
    console.log(app.globalData.cartMsg)
   
    cartlist.map(e =>{
      return e['number'] = 1
    })
    console.log(cartlist,"-----")
    if (cartlist.length > 0) {
      console.log(cartlist.length)
      this.setData({
        flag: true,
        cartlist
      })
      console.log(this.data.flag)
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   cartlist: [...app.globalData.addcart]
    // })
    // console.log(this.data.cartlist)
    // if (this.data.cartlist.length > 0) {
    //   this.setData({
    //     flag: true
    //   })
    // }

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
    this.fff()
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