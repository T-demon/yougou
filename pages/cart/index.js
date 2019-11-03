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
    goods[id].number += 1;

    this.setData({
      goods
    })
    wx.setStorageSync("goods", goods)
  },

  // 数量减一
  handledown(event) {
    const { id } = event.target.dataset;
    const { goods } = this.data;

    if (goods[id].number <= 1) {
      wx.showModal({
        title: '提示',
        content: '是否删除该商品',
        success: (res) => {
          if (res.confirm) {
            delete goods[id];
            this.setData({
              goods
            });
            wx.setStorageSync("goods", goods)
          }
        }
      })
    } else {
      goods[id].number -= 1;
      this.setData({
        goods
      });
      wx.setStorageSync("goods", goods)
    }
  },

  //数量输入控制
  bindInput(event) {
    // 获取输入框的值
    const value = +event.detail.value;
    const { id } = event.target.dataset;
    const { goods } = this.data;

    // 判断是否有小数点
    goods[id].number = Math.floor(value);

    // 修改data的值
    this.setData({
      goods
    });
  },

    bindChange(event){
      // 获取输入框的值
      const value = +event.detail.value;
      const { id } = event.target.dataset;
      const { goods } = this.data;

      goods[id].number = value === 0 ? 1 : value;

      // 修改data的值
      this.setData({
        goods
      });
      // 保存到本地
      wx.setStorageSync("goods", goods);
    },


})