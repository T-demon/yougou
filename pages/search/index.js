// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow: false,
    search: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


  },

  // 触发输入框
  handleInput(event) {
    const { value } = event.detail
    this.setData({
      isshow: true,
      search: value.trim()
    })
  },
  // 取消按钮
  handleClear() {
    this.setData({
      isshow: false,
      search: ""
    })
  },

  handlleConfirm(){
    // 先从本地存储拿出来数组，没有的等于空的数组
    const arr = wx.getStorageSync('search') || [];

    // 判断本地是否有数据，有的话就追加unshift
    arr.unshift(this.data.search);

    // 保存到本地
    wx.setStorageSync('search', arr);

    // 跳转到搜索列表页
    wx.navigateTo({
      url: "/pages/goods_list/index?query=" + this.data.searchValue
    })
  }


})