// index.js
// 获取应用实例
const app = getApp()





Page({
  data: {
    // 定义标题的数组
    titles: ["草稿箱", "我收到的", "我发出的", "已完成"],
    // 定义选中标题的初始值0
    selectedTitle: "0",
  },
  // 定义点击标题的事件处理函数，将选中标题的id赋值给selectedTitle
  titles: function (e) {
    console.log(e)
    this.setData({
      selectedTitle: e.currentTarget.id
    });
  },


  //定义滑块改变的事件处理函数，将current赋值给selectedTitle
  bindChange: function (e) {
    this.setData({
      selectedTitle: e.detail.current
    })
  },

  onReady: function () {
    // 页面渲染完成
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          swiperHeight: (res.windowHeight - 37)
        });
      }
    })
  },

  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
})
