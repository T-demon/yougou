import request from "../../utils/request.js"

// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: {},
    goods: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { goods_id } = options;

    request({
      url: "/api/public/v1/goods/detail",
      data: {
        goods_id
      }
    }).then(res => {
      console.log(res.data)
      const { message } = res.data;

      // detail是商品详情
      this.setData({
        detail: message
      })
    })
  },

  handlecart() {

    const goods = wx.getStorageSync("goods") || {}
    const { goods_id, goods_name, goods_small_logo, goods_price } = this.data.detail;
    const number = goods[goods_id] ? goods[goods_id].number + 1 : 1;
   

    goods[goods_id] = {
      goods_id,
      goods_name,
      goods_small_logo,
      goods_price,
      number,
      selected: true
    }
    console.log(goods)
    wx.setStorageSync("goods", goods)

wx.showToast({
  title: '加入购物车成功',
})
  }

})