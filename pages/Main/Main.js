const { getweatherInfo } = require("../../utils/Weather.js")

// pages/Main/Main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },


  /**
   * 监听点击事件
   */
  selectCityAction: event => {
    console.log(`pages/City/City`);
    // 注意: 坑爹的微信, app.json 中的页面配置不需要带 / , 跳转时需要带 / 
    wx.navigateTo({
      url: `/pages/City/City`
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     getweatherInfo({

     }).success(res => {
console.log(res.data);
     });
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

  }
})