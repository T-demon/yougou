// pages/goods_list/index.js
import request from "../../utils/request.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: ["综合", "销量", "价格"],
    current: 0,
    query: "",
    list: [],
    hasmore: true,
    pagenum: 1,
    flag:true
  },

  getlist() {

   if(this.data.flag){
     return
   }
    
    request({
      url: "https://api.zbztb.cn/api/public/v1/goods/search",
      data: {
        query: this.data.query,
        pagenum: this.data.pagenum,
        pagesize: 10
      }
    }).then(res => {
      console.log(res.data)
      const { goods } = res.data.message

      if(goods.length<10){
        this.setData({
          hasmore:false
        })
      }

      const newgoods = goods.map(v => {
        v.goods_price = Number(v.goods_price).toFixed(2)
        return v;
      })

      this.setData({
        list: [...this.data.list, ...newgoods],
        pagenum: this.data.pagenum + 1,
        flag:true
      })
    })

  },

  onLoad: function (options) {
    const { query } = options
    this.setData({
      query,
      flag:false
    })
    // 获取列表
    this.getlist()

  },

  // 触底事件
  onReachBottom() {
    if(this.data.flag){
      this.data.flag=false
      this.getlist();
    }


  },




  handleChange(event) {
    this.setData({
      current: event.target.dataset.index
    })
  }


})