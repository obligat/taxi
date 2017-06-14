// pages/dispatchOrder/dispatchOrder.js

Page({
  data: {
    showModalStatus: false,
    driverItems: [
      { name: '白小菜 - 15823905344', value: '白小菜 - 15823905344' },
      { name: '维嘉 - 15332295073', value: '维嘉 - 15332295073', checked: 'true' },
      { name: '沫姐 - 13950724388', value: '沫姐 - 13950724388' },
      { name: '京查倪 - 18923557029', value: '京查倪 -18923557029' },
      { name: '李纪珠 - 15633065666', value: '李纪珠 - 15633065666' },
      { name: '李连 - 15833066997', value: '李连 - 15833066997' },
    ],
    carItems: {
      ordinary: [{
        name: '蒙迪欧 - 陕A12345', value: '蒙迪欧 - 陕A12345'
      }], comfortable: [{
        name: '思域 - 陕A12345', value: '思域 - 陕A12345'
      }, {
        name: '帕萨特 - 陕A12345', value: '帕萨特 - 陕A12345'
      }], luxury: [{
        name: '奔驰 - 陕A12345', value: '奔驰 - 陕A12345'
      }, {
        name: '幻影 - 陕A12345', value: '幻影 - 陕A12345'
      }]
    },
    drivers: [],
    cars: [],
    chooseType: ''
  },
  powerDrawer(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
  },
  handleChooseCar: function (e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
    this.setData({
      chooseType: 'car'
    })

  },
  handleChooseDriver(e) {
    var currentStatu = e.currentTarget.dataset.statu;
    this.util(currentStatu)
    this.setData({
      chooseType: 'driver'
    })
  },
  util: function (currentStatu) {
    /* 动画部分 */
    // 第1步：创建动画实例   
    var animation = wx.createAnimation({
      duration: 200,  //动画时长  
      timingFunction: "linear", //线性  
      delay: 0  //0则不延迟  
    });

    // 第2步：这个动画实例赋给当前的动画实例  
    this.animation = animation;

    // 第3步：执行第一组动画  
    animation.opacity(0).rotateX(-100).step();

    // 第4步：导出动画对象赋给数据对象储存  
    this.setData({
      animationData: animation.export()
    })

    // 第5步：设置定时器到指定时候后，执行第二组动画  
    setTimeout(function () {
      // 执行第二组动画  
      animation.opacity(1).rotateX(0).step();
      // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
      this.setData({
        animationData: animation
      })

      if (currentStatu == "close") {
        this.setData({
          showModalStatus: false
        });
      }
    }.bind(this), 200)

    // 显示  
    if (currentStatu == "open") {
      this.setData(
        {
          showModalStatus: true
        }
      );
    }
  },
  checkboxChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e)
    if (this.data.chooseType == 'car') {
      this.setData({
        cars: e.detail.value
      })
    } else {
      this.setData({
        drivers: e.detail.value
      })
    }

  },
  confirmDispatch() {
    wx.setStorageSync("cars", this.data.cars)
    wx.setStorageSync("drivers", this.data.drivers)
    wx.navigateTo({
      url: '/pages/manageindex/manageindex?orderType=2',
    })
  },
  onLoad: function (options) {
    console.log(options)
    this.setData({
      luxuryCar: options.luxuryCar,
      comfortableCar: options.comfortableCar,
      ordinaryCar: options.ordinaryCar
    })
  }

})  