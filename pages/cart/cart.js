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
    let orderlist = this.data.orderlist;
    const index = e.target.dataset.index;
    let num = this.data.orderlist[index].number;
    console.log(this.data.orderlist[index].number);
    num -= 1;
    orderlist[index].number = num;
    if (num == 0) {
      orderlist.splice(index, 1)
    }
    if (this.data.orderlist.length == 0) {
      this.setData({
        flag: false
      })
    }
    this.setData({
      orderlist
    })
  },
  addCount: function (e) {
    let orderlist = this.data.orderlist;
    const index = e.target.dataset.index;
    let num = this.data.orderlist[index].number;
    console.log(this.data.orderlist[index].number);
    num += 1;

    orderlist[index].number = num;
    this.setData({
      orderlist
    })
  },
  selectAll: function (e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let orderlist = this.data.orderlist;
    for (let i = 0; i < orderlist.length; i++) {

      orderlist[i].selected = selectAllStatus;
    }
    this.setData({
      orderlist,
      selectAllStatus,
    })
    this.getTotalPrice()
  },
  getTotalPrice: function (e) {
    let orderlist = this.data.orderlist;
    let total = 0;
    for (let i = 0; i < orderlist.length; i++) {
      if (orderlist[i].selected) {
        total += (+orderlist[i].price * +orderlist[i].number);
      }
    }
    // total=total.toFixed(1)
    this.setData({
      totalPrice: total
    });
  },
  selectList: function (e) {
    const index = e.currentTarget.dataset.index;
    let orderlist = this.data.orderlist;
    const selected = orderlist[index].selected;
    orderlist[index].selected = !selected;
    const a = [];
    for (let i = 0; i < orderlist.length; i++) {
      if (orderlist[i].selected) {
        a.push(orderlist[index])
      }
    }
    if (orderlist.length <= a.length) {
      this.setData({
        selectAllStatus: true, orderlist
      });
    } else {
      this.setData({
        selectAllStatus: false, orderlist
      });
    }
    this.getTotalPrice()
  },
  deleteList: function (e) {
    const index = e.target.dataset.index;
    let orderlist = this.data.orderlist;
    orderlist.splice(index, 1)
    if (this.data.orderlist.length == 0) {
      this.setData({
        flag: false
      })
    }
    this.setData({
      orderlist
    })

  },
  fff() {
    let cartlist = [...app.globalData.cartMsg]
    // cartlist.concat(app.globalData.cartMsg)
    console.log(app.globalData.cartMsg)
    console.log(cartlist)
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