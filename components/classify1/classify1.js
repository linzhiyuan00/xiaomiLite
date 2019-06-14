// components/classify1/classify1.js
const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Object,
      value:[]
    },
    detail:{
      type: Object,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toDetail: function (e) {
      const goodslist = this.data.goodslist
      var index = e.currentTarget.dataset.index;
      console.log(index);
      var detail = this.properties.goodsList[index];
      console.log(this.properties.goodsList[index])
      app.goodsdetail = detail;
      this.setData({
        detail
      })

      wx.navigateTo({
        url: '/pages/goods/goods',
      })

    },

  }
})
