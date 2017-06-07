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
    months,
    month,
    days,
    day,
    year,
    value: [month - 1, day - 1],
    startPlace: '',
    endPlace: '',
    isChooseTime: false,
    allType: [{
      value: '包车', checked: 'true'
    }, {
      value: '班车接送'
    }, {
      value: '只需导游'
    }],
    type: '包车',
    useType: 'allDay',
    language: '汉语'
  },
  radioTypeChange(e) {
    const value = e.detail.value
    this.setData({
      type: value
    })
    if (value == '班车接送') {
      this.setData({
        useType: '全程'
      })
    }
    if (value == '包车') {
      this.setData({
        useType: 'allDay'
      })
    }
  },
  radioUseTypeChange(e) {
    this.setData({
      useType: e.detail.value
    })
  },
  radioLanguageChange(e) {
    this.setData({
      language: e.detail.value
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
    let type = '旅游预约 / ' + this.data.type
    let useType = this.data.useType
    let language = this.data.language
    if (time && startPlace) {
      if (this.data.type == '包车') {
        wx.navigateTo({
          url: `/pages/createOrder/createOrder?time=${time}&startPlace=${startPlace}&type=${type}&useType=${useType}`,
        })
      } else if (this.data.type == '班车接送') {
        if(endPlace){
        wx.navigateTo({
          url: `/pages/createOrder/createOrder?time=${time}&startPlace=${startPlace}&endPlace=${endPlace}&type=${type}&useType=${useType}`,
        })
        }else{
          this.wetoast.toast({
            title: '好像没有选择位置'
          })
        }
      } else {
        wx.navigateTo({
          url: `/pages/createOrder/createOrder?language=${language}&time=${time}&type=${type}`,
        })
      }

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