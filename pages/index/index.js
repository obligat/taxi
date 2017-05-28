//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  handlePlane() {
    wx.navigateTo({
      url: '/pages/pickUpPlane/pickUpPlane',
    })
  },
  handleCar() {
    wx.navigateTo({
      url: '/pages/pickUpCar/pickUpCar',
    })
  },
  handleTravel() {
    wx.navigateTo({
      url: '/pages/travelApp/travelApp',
    })
  },
  onLoad: function () {

  }
})
