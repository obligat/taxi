//app.js
let {WeToast} = require('utils/wetoast/wetoast.js')
let util = require('utils/util')
App({
  WeToast,
  onLaunch: function () {

    wx.checkSession({
      success: function () {
        console.log('checkSession is valid.')
      },
      fail: function () {
        console.log('checkSession is not valid.')
        util.weixinLogin()
      }
    })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
              console.log(res.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})