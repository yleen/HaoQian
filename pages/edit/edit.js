let app = getApp();
// pages/edit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempCanvasWidth:0,
    tempCanvasHeight:0,
    tempImageSrc:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  addwriting:function(){
    self=this;
    var initRatio = self.initRatio
    var tempCanvasWidth = self.scaleWidth * initRatio
    var tempCanvasHeight = self.scaleHeight * initRatio
    self.setData({
      tempCanvasWidth: self.scaleWidth,
      tempCanvasHeight: self.scaleHeight,
      tempImageSrc: app.globalData.pages.cvsAutograph.autograph
    })
    var ctx = wx.createCanvasContext('tempCanvas')
    //console.log(tempImageSrc)
    ctx.drawImage(self.data.tempImageSrc, tempCanvasWidth, tempCanvasHeight)
  }

//todo:签名大小修改 添加文件
})