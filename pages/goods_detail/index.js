import request from "../../utils/request.js"

// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
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

})