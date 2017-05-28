//app.js
App({
  onLaunch: function () {
    wx.login({
      success(code) {
        wx.request({
          url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx0cda5d13f5aef083&secret=7cff8929da9b5bb45e963df0a1612054&grant_type=authorization_code&js_code=' + code.code,
          success(res) {
            console.log(res)
            wx.setStorageSync("openid", res.data.openid)
          },
          fail(res) {
            // console.log(res)
          },
          complete(res) {
            // console.log(res)
          }
        })
        // wx.getUserInfo({
        //   withCredentials: true,
        //   success: function (res) {
        //     console.log(res.userInfo)
        //   },
        //   fail: function (res) {
        //     console.log('fail')
        //     console.log(res)
        //   },
        //   complete: function (res) {
        //     console.log('complete')
        //     console.log(res)
        //   },
        // })
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