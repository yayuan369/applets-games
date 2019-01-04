// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // canIUse: wx.canIUse('button.open-type.getUserInfo'),
    userInfoShow: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    // var that = this;
    // wx.getSetting({
    //   success: function(res) {
    //     if (res.authSetting['scope.userInfo']) {
    //       wx.getUserInfo({
    //         success: function(res) {
    //           // 用户已授权
    //           wx.redirectTo({
    //             url: 'pages/main/main',
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
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
    this.getUserInfoFun();
  },
  getUserInfoFun: function(e) {
    var that = this
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.reLaunch({
            url: '../main/main',
          })
          that.setData({
            userInfoShow: false
          })


          // wx.getUserInfo({
          //   success: function(res) {
          //     wx.login({
          //       success: function(res) {
          //         console.log('code:' + res.code)
          //         用户登录
          //         wx.request({
          //           url: baseUrl + "/api/v1/miniapp/user/login",
          //           data: {
          //             appId: appId,
          //             code: res.code
          //           },
          //           method: 'GET',
          //           success: function(res) {
          //             console.log(res)
          //             console.log('获取到sessionid和sessionKey和unionid')
          //             wx.setStorageSync("sessionid", res.header["Set-Cookie"].split(';')[0])
          //             that.sessionKey = res.data.result.sessionKey
          //             wx.setStorageSync("sessionKey", that.sessionKey)
          //             that.unionid = res.data.result.unionid
          //             wx.getSetting({
          //               success: function(res) {
          //                 console.log(res)
          //                 console.log('获取用户信息权限')
          //                 if (res.authSetting['scope.userInfo']) {
          //                   wx.getUserInfo({
          //                     success: function(res) {
          //                       console.log(res)
          //                       console.log('获取标签等')
          //                       that.signature = res.signature
          //                       that.rawData = res.rawData
          //                       that.encryptedData = res.encryptedData
          //                       that.iv = res.iv
          //                       // 获取用户信息
          //                       wx.request({
          //                         url: baseUrl + "/api/v1/miniapp/user/info",
          //                         method: 'GET',
          //                         data: {
          //                           appId: appId,
          //                           sessionKey: wx.getStorageSync("sessionKey"),
          //                           signature: that.signature,
          //                           rawData: that.rawData,
          //                           encryptedData: that.encryptedData,
          //                           iv: that.iv
          //                         },
          //                         header: {
          //                           'content-type': 'application/json',
          //                           'cookie': wx.getStorageSync("sessionid")
          //                         },
          //                         success: function(res) {
          //                           console.log(res)
          //                         }
          //                       })
          //                     }
          //                   })
          //                 } else {
          //                   Toast('用户还未授权过')
          //                 }
          //               }
          //             })
          //           },
          //         })
          //         that.setData({
          //           userInfoShow: false
          //         })

          //       }
          //     })
          //   }
          // })
        }
      }
    })
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