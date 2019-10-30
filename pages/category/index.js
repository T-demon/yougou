// pages/category/index.js
import request from  "../../utils/request.js"
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
  onLoad(){
      request({
        url:"https://api.zbztb.cn/api/public/v1/categories",
      }).then(res=>{
        console.log(res.data)
        const {message} = res.data
        this.setData({
          list: message
        })
      })
  },

  handleChange(event){
    this.setData({
      current:event.target.dataset.index
    })
  }

})