// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
      current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleChange(event){
    this.setData({
      current:event.target.dataset.index
    })
  }

})