//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  handlePlane() {
    wx.navigateTo({
      url: '/pages/pickUpPlane/pickUpPlane?type=pickPlane',
    })
  },
  handleCar() {
    wx.navigateTo({
      url: '/pages/pickUpPlane/pickUpPlane?type=pickCar',
    })
  },
  handleTravel() {
    wx.navigateTo({
      url: '/pages/travelApp/travelApp',
    })
  },
  onLoad: function () {
    // const openid = wx.getStorageSync("openid")
    // if (openid === "o6VgM0WVg3kmdYPdeDb1_obLFtqk") {
    //   console.log('hhhahha')
    //   wx.redirectTo({
    //     url: '../myOrder/myOrder',
    //     success(res) {
    //       console.log(res)
    //     },
    //     fail(res) {
    //       console.log(res)
    //     }
    //   })
    // }
  }
})
