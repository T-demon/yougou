// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onShow() {
    const goods = wx.getStorageSync("goods") || null;
    this.setData({
      goods
    })
  },

  // 数量加一
  handleadd(event) {
    const { id } = event.target.dataset;
    const { goods } = this.data;
    goods[id].number +=1;

    this.setData({
      goods
    })
    wx.setStorageSync("goods", goods)
  },

  // 数量减一
  handledown(event){
    const { id } = event.target.dataset;
    const { goods } = this.data;

    if(goods[id].number <=1){
      wx.showModal({
        title: '提示',
        content: '是否删除该商品',
        success:(res)=>{
          if(res.confirm){
            delete goods[id];
            this.setData({
              goods
            });
            wx.setStorageSync("goods", goods)
          }
        }
      })
    }else{
      goods[id].number -=1;
      this.setData({
        goods
      });
      wx.setStorageSync("goods", goods)
    }
  }

})