// pages/pickUpPlane/pickUpPlane.js
const date = new Date()
const year = date.getFullYear()
const months = []
const days = []
const month = date.getMonth() + 1
const day = date.getDate()

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
Page({
  data: {
    months: months,
    month,
    days,
    day,
    year,
    value: [month - 1, day - 1],
    startPosition: '',
    endPosition: '',
    isChooseTime: false,
    isSendPlane: false
  },
  handlePickUpPlane() {
    this.setData({
      isSendPlane: false
    })
  },
  handleSendPlane() {
    this.setData({
      isSendPlane: true
    })
  },
  handleChooseTime() {
    this.setData({
      isChooseTime: true
    })
  },
  confirmTime() {
    this.setData({
      isChooseTime: false
    })
  },
  bindChange: function (e) {
    const val = e.detail.value
    this.setData({
      month: this.data.months[val[0]],
      day: this.data.days[val[1]]
    })
  },
  choosePositionStart() {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        wx.chooseLocation({
          success: function (res) {
            console.log(res)
            that.setData({
              startPosition: res.name
            })
          },
        })
      }
    })
  },
  choosePositionEnd() {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        wx.chooseLocation({
          success: function (res) {
            that.setData({
              endPosition: res.name
            })
          },
        })
      }
    })
  },
  handleNextStep() {
    wx.navigateTo({
      url: '/pages/createOrder/createOrder',
    })
  },
  onLoad: function (options) {

  },
  onReady: function () {
  },
  onShow: function () {
  }
})