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
    startPlace: '咸阳机场T2',
    endPlace: '',
    isChooseTime: false,
    doType: 'pick'
  },
  handlePickUpPlane() {
    this.setData({
      doType: 'pick',
      startPlace: this.data.type == 'pickPlane' ? '咸阳机场T2' : '西安北站',
      endPlace: ''
    })
  },
  handleSendPlane() {
    this.setData({
      doType: 'send',
      endPlace: this.data.type == 'pickPlane' ? '咸阳机场T2' : '西安北站',
      startPlace: ''
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
              startPlace: res.name
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
              endPlace: res.name
            })
          },
        })
      }
    })
  },
  handleNextStep() {
    let time = [this.data.year, this.data.month, this.data.day].join('-')
    let startPlace = this.data.startPlace
    let endPlace = this.data.endPlace
    let word = (this.data.type == 'pickPlane' ? '机' : '站')
    let type = '接送' + word + ' / ' + (this.data.doType == 'pick' ? '接' : '送') + word
    if (time && startPlace && endPlace) {
      wx.navigateTo({
        url: `/pages/createOrder/createOrder?time=${time}&startPlace=${startPlace}&endPlace=${endPlace}&type=${type}`,
      })
    } else {
      this.wetoast.toast({
        title: '好像没有选择位置'
      })
    }

  },
  onLoad: function (options) {
    new app.WeToast()
    let type = options.type
    let startPlace = type == 'pickPlane' ? '咸阳机场T2' : '西安北站'
    this.setData({
      type,
      startPlace
    })
  }
})