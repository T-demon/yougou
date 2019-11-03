// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow(){
    const goods =wx.getStorageSync("goods") || null;
    this.setData({
      goods
    })
  }

})