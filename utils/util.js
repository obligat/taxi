function formatTime() {
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day, hour, minute].map(formatNumber).join('')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function weixinLogin() {
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
}

module.exports = {
  formatTime,
  weixinLogin
}
