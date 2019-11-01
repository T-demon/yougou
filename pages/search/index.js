// pages/search/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:false,
    search:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  handleInput(event){
    const {value} = event.detail
    this.setData({
      isshow:true,
      search:value.trim()
    })
  },

  handleClear(){
    this.setData({
      isshow:false,
      search:""
    })
  }


})