// pages/createOrder/createOrder.js
const util = require('../../utils/util')
const app = getApp()
Page({
  data: {
    ordinaryCar: 0,
    comfortableCar: 0,
    luxuryCar: 0,
    languages: ['英语', '日语', '法语'],
    language: '英语',
    value: [0],
    needGuide: 0
  },
  pickerChange(e) {
    const val = e.detail.value
    this.setData({
      language: this.data.languages[val],
    })
  },
  radioChange(e) {
    var value = e.detail.value
    if (value == 'yes') {
      this.setData({
        needGuide: 1
      })
    } else {
      this.setData({
        needGuide: 0
      })
    }
  },
  bindFormSubmit(e) {
    const remark = e.detail.value.remark
    const phone = e.detail.value.phone
    const ordinaryCar = this.data.ordinaryCar
    const comfortableCar = this.data.comfortableCar
    const luxuryCar = this.data.luxuryCar
    const needGuide = this.data.needGuide
    const language = this.data.language
    const time = this.data.time
    const startPlace = this.data.startPlace
    const endPlace = this.data.endPlace
    const type = this.data.type
    const formId = util.formatTime()
    // wx.navigateTo({
    //   url: `/pages/confirmMessage/confirmMessage?formId=${formId}&type=${type}&time=${time}&startPlace=${startPlace}&ordinaryCar=${ordinaryCar}&comfortableCar=${comfortableCar}&luxuryCar=${luxuryCar}&needGuide=${needGuide}&language=${language}&remark=${remark}&phone=${phone}`,
    // })
    wx.showToast({
      title: '提交成功,即将返回首页'
    })
    setTimeout(function () {
      wx.switchTab({
        url: '/pages/index/index',
      })
    }, 1000)
  },
  handleBack() {
    wx.navigateBack({
      delta: 1
    })
  },
  handleMinusPeople() {
    if (this.data.people) {
      let people = this.data.people - 1
      this.setData({
        people: people
      })
    }
  },
  handleAddPeople() {
    let people = this.data.people + 1
    this.setData({
      people: people
    })
  },
  handleMinusCar1() {
    if (this.data.ordinaryCar) {
      let ordinaryCar = this.data.ordinaryCar - 1
      this.setData({
        ordinaryCar
      })
    }
  },
  handleAddCar1() {
    let ordinaryCar = this.data.ordinaryCar + 1
    this.setData({
      ordinaryCar
    })
  },
  handleMinusCar2() {
    if (this.data.comfortableCar) {
      let comfortableCar = this.data.comfortableCar - 1
      this.setData({
        comfortableCar
      })
    }
  },
  handleAddCar2() {
    let comfortableCar = this.data.comfortableCar + 1
    this.setData({
      comfortableCar
    })
  },
  handleMinusCar3() {
    if (this.data.luxuryCar) {
      let luxuryCar = this.data.luxuryCar - 1
      this.setData({
        luxuryCar
      })
    }
  },
  handleAddCar3() {
    let luxuryCar = this.data.luxuryCar + 1
    this.setData({
      luxuryCar
    })
  },
  bindKeyInput: function (e) {
    let input = Number(e.detail.value)
    let type = e.target.dataset.type
    if (type == 'people') {
      this.setData({
        people: input
      })
    } else if (type == 'ordinary') {
      this.setData({
        ordinaryCar: input
      })
    } else if (type == 'comfort') {
      this.setData({
        comfortableCar: input
      })
    } else if (type == 'luxury') {
      this.setData({
        luxuryCar: input
      })
    }
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      time: options.time,
      startPlace: options.startPlace,
      endPlace: options.endPlace,
      type: options.type
    })
  }
})
