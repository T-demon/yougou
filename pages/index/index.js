//index.js
//获取应用实例
import request from "../../utils/request.js"
const app = getApp()

Page({
  data: {
    background: [
      "http://img3.imgtn.bdimg.com/it/u=2849918286,1173942087&fm=26&gp=0.jpg",
      "http://img3.imgtn.bdimg.com/it/u=2849918286,1173942087&fm=26&gp=0.jpg",
      "http://img3.imgtn.bdimg.com/it/u=2849918286,1173942087&fm=26&gp=0.jpg",
    ],

    menus: [
      "../../images/cart_empty@2x.png",
      "../../images/cart_empty@2x.png",
      "../../images/cart_empty@2x.png",
      "../../images/cart_empty@2x.png",
    ]
  },

  // --------------
  onLoad() {

    request({
      url: "/api/public/v1/home/swiperdata"
    }).then(res=>{
      const { message } = res.data;
      // 赋值给data
      this.setData({
        background: message
      })
    })

  

  }

})
