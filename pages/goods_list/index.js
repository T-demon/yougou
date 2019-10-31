// pages/goods_list/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:["综合","销量","价格"],
    current:0,
    query:"",
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {query} = options
    this.setData({
      query
    })

    request({
      url:"https://api.zbztb.cn/api/public/v1/goods/search",
      data:{
        query,
        pagenum:1,
        pagesize:10
      }
    }).then(res=>{
      console.log(res.data)
      const {goods} = res.data.message
      
      const newgoods = goods.map(v=>{
        v.goods_price=Number(v.goods_price).toFixed(2)
        return v;
      })

      this.setData({
        list: newgoods
      })
    })
  },

  handleChange(event){
    this.setData({
      current:event.target.dataset.index
    })
  }


})