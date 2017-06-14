// pages/manageindex/manageindex.js
const app = getApp()
Page({
  data: {
    footHeight: 555,
    formId: '201706121121',
    ordinaryCar: 3,
    comfortableCar: 4,
    luxuryCar: 1,
    remark: "colonel exgressive peacefully chaimpion",
    orderType: 1,
    bottomType: 1
  },
  onLoad: function (options) {
    console.log(app.globalData.modelMessage)
    this.setData({
      footHeight: app.globalData.modelMessage.windowHeight
    })
    if (options.orderType) {
      let cars = wx.getStorageSync("cars")
      let drivers = wx.getStorageSync("drivers")
      this.setData({
        orderType: options.orderType,
        cars,
        drivers
      })
    }
  },
  handleDispatchOrder() {

    wx.navigateTo({
      url: `/pages/dispatchOrder/dispatchOrder?ordinaryCar=${this.data.ordinaryCar}&comfortableCar=${this.data.comfortableCar}&luxuryCar=${this.data.luxuryCar}`,
    })
  },
  topTab1() {
    this.setData({
      orderType: 1
    })
  },
  topTab2() {
    this.setData({
      orderType: 2
    })
  },
  topTab3() {
    this.setData({
      orderType: 3
    })
  },
  bottomTab1() {
    this.setData({
      bottomType: 1
    })
    wx.redirectTo({
      url: '/pages/manageindex/manageindex',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  bottomTab2() {
    this.setData({
      bottomType: 2
    })
    wx.redirectTo({
      url: '/pages/managemember/managemember',
    })
  },
})