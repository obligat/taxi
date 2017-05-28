// pages/pickUpPlane/pickUpPlane.js
let app = getApp()
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
    startPosition: '咸阳机场T2',
    endPosition: '',
    isChooseTime: false,
    type: 'pick'
  },
  handlePickUpPlane() {
    this.setData({
      type: 'pick',
      startPosition: '咸阳机场T2',
      endPosition: ''
    })
  },
  handleSendPlane() {
    this.setData({
      type: 'send',
      endPosition: '咸阳机场T2',
      startPosition: ''
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
    let time = [this.data.year, this.data.month, this.data.day].join('-')
    let startPosition = this.data.startPosition
    let endPosition = this.data.endPosition
    let type = this.data.type
    if (time && startPosition && endPosition) {
      wx.navigateTo({
        url: `/pages/createOrder/createOrder?time=${time}&startPosition=${startPosition}&endPosition=${endPosition}&type=${type}`,
      })
    } else {
      this.wetoast.toast({
        title: '好像没有选择位置'
      })
    }

  },
  onLoad: function (options) {
    new app.WeToast()
  },
  onReady: function () {
  },
  onShow: function () {
  }
})