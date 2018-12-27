// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checks:[
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked:true},
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    checkAd:'',

    date: '2015-09-01',
    time:'03:01',

    srca:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.drowsyUserinfo();
  },


  drowsyUserinfo() {
    var userInfo = wx.getStorageSync('userInfo');
    console.log('hahh',userInfo)
    // var name_xx = userInfo.username || userInfo.nickName;
    var name_xx = '哈哈哈';
    var ctx = wx.createCanvasContext("myCanvas1");
    //设置文字的旋转角度，角度为45°；
    ctx.rotate(45 * Math.PI / 180);

    //对斜对角线以左部分进行文字的填充
    for (let j = 1; j < 10; j++) { //用for循环达到重复输出文字的效果，这个for循环代表纵向循环
      ctx.beginPath();
      ctx.setFontSize(16);
      ctx.setFillStyle("rgba(169,169,169,.2)");

      ctx.fillText(name_xx, 0, 50 * j);
      for (let i = 1; i < 10; i++) {//这个for循环代表横向循环，
        ctx.beginPath();
        ctx.setFontSize(16);
        ctx.setFillStyle("rgba(169,169,169,.2)");
        ctx.fillText(name_xx, 80 * i, 50 * j);
      }
    }//两个for循环的配合，使得文字充满斜对角线的左下部分

    //对斜对角线以右部分进行文字的填充逻辑同上
    for (let j = 0; j < 10; j++) {
      ctx.beginPath();
      ctx.setFontSize(16);
      ctx.setFillStyle("rgba(169,169,169,.2)");

      ctx.fillText(name_xx, 0, -50 * j);
      for (let i = 1; i < 10; i++) {
        ctx.beginPath();
        ctx.setFontSize(16);
        ctx.setFillStyle("rgba(169,169,169,.2)");
        ctx.fillText(name_xx, 80 * i, -50 * j);
      }
    }
    ctx.draw();
  },

  checkBox(e){
    console.log('change事件，携带value值为：', e);
    this.setData({
      checkAd:e.detail.value
    })
  },

  // picker  选择时间
  dateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  timeChange(e){
    console.log('哈哈哈',e);
    this.setData({
      time:e.detail.value
    })
  },

  //拍照
  takePhoto(){
    const ctx = wx.createCameraContext();
    ctx.takePhoto({
      quality:'hight',
      success:(res)=>{
        this.setData({
          src:res.tempImagePath
        })
      }
    })
  } ,
  error(e){
    console.log(e.detail);
  }

})