// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userMes: {
      accountInfo: ''},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.accountInfo = wx.getAccountInfoSync();
    console.log('哈哈', this.data.accountInfo)

  },
    // 录音功能
  // authSetting() {
  //   wx.getSetting({
  //     success(res) {
  //       if (!res.authSetting['scope.record']) {
  //         wx.authorize({
  //           scope: 'scope.record',
  //           success() {
  //             // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
  //             wx.startRecord()
  //           }
  //         })
  //       }
  //     }
  //   })
  // },

  // 获取用户信息
  userInfoHandler(e) {
    var that = this;
    //此处授权得到userInfo
    console.log(e.detail.userInfo);

    //接下来写业务代码
    that.setData({
        userMes: e.detail.userInfo
      }),
      //最后，记得返回刚才的页面
      wx.navigateBack({
        delta: 1
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})