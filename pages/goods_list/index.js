// pages/goods_list/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:["综合","销量","价格"],
    current:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    request({
      url:"https://api.zbztb.cn/api/public/v1/goods/search"
    }).then(res=>{
      console.log(res.data)
    })
  },

  handleChange(event){
    this.setData({
      current:event.target.dataset.index
    })
  }


})