//index.js
//获取应用实例
import request from "../../utils/request.js"
const app = getApp()

Page({
  data: {
    background: [],
    menus: [],
    floor:[]
  },

  // --------------
  onLoad() {
    request({
      url: "/api/public/v1/home/swiperdata"
    }).then(res => {
      const { message } = res.data;
      // 赋值给data
      this.setData({
        background: message
      })
    }),

    request({
        url: "/api/public/v1/home/catitems"
    }).then(res => {
        const { message } = res.data;
        this.setData({
          menus: message
        })
    }),

request({
      url:"https://api.zbztb.cn/api/public/v1/home/floordata"
}).then(res=>{
  const {message} = res.data
  this.setData({
    floor:message
  })
})



  }
















})
