// pages/cart/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods: null,
    selected: true,
    allPrice: 0,
    allNumber: 0
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
    this.handleAllPrice(),
    this.handleAllNumber()

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
    this.handleAllPrice()
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
            this.handleAllPrice()
          }
        }
      })
    } else {
      goods[id].number -= 1;
      this.setData({
        goods
      });

      wx.setStorageSync("goods", goods)
      this.handleAllPrice()
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

  bindChange(event) {
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

  // 单个的选择按钮
  handleSelected(event) {
    const { id } = event.target.dataset;
    const { goods } = this.data;

    // 把选中状态取反
    goods[id].selected = !goods[id].selected;

    this.setData({
      goods
    });

    // 保存到本地
    wx.setStorageSync("goods", goods);
    this.handleAllPrice();
  },

  // 计算总价
  handleAllPrice() {
    const { goods } = this.data
    let price = 0;
    // 总价=单价*数量
    Object.keys(goods).forEach(v => {
      // 选中的商品
      if (goods[v].selected) {
        price += (goods[v].goods_price * goods[v].number)
      }
    })

    this.setData({
      allPrice: price
    })
  },

  // 计算总数量
  handleAllNumber() {

    const { goods } = this.data
    let number;

    Object.keys(goods).forEach(v=>{
      if(goods[v].selected){
        console.log(goods[v].number)
        number += goods[v].number
      }
    })
    this.setData({
      allNumber:number
    })

  }

})