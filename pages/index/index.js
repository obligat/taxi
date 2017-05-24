//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    people: 0,
    ordinaryCar: 0,
    comfortableCar: 0,
    luxuryCar: 0
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
  onLoad: function () {

  }
})
