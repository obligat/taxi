// /pages/managemember/managemember.js
var app = getApp()
Page({
  data: {
    userInfo: {},
  },
  onLoad: function (options) {
    var that = this
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    })
    this.setData({
      footHeight: app.globalData.modelMessage.windowHeight
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  bottomTab1() {
    this.setData({
      bottomType: 1
    })
    wx.redirectTo({
      url: '/pages/manageindex/manageindex'
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