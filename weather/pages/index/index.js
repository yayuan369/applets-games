let timer;
let num = 0;
Page({



  /**
   * 页面的初始数据
   */
  data: {
    imgSrcs: [
      '/icons/shitou.png',
      '/icons/jiandao.png',
      '/icons/bu.png'
    ],
    imageUserSrc: '/icons/wenhao.png',
    imageSrc: '',
    winNum: 0,
    gamePlay: '',
    btnState: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let oldWinNum = wx.getStorageSync('winNum');
    if(oldWinNum != null && oldWinNum!='' ){
      this.setData({winNum:oldWinNum});
    }
    this.timeImg();
  },

  timeImg() {
    timer = setInterval(this.move, 300);
  },
  move() {
    if (num >= 3) {
      num = 0;
    }
    num = parseInt(Math.floor(Math.random() * 3));
    this.setData({
      imageSrc: this.data.imgSrcs[num]
    })
  },

  // 改变图片
  changeImg(e) {
    if (this.data.btnState) {
      return;
    }
    this.setData({ imageUserSrc: this.data.imgSrcs[e.currentTarget.id] });
    clearInterval(timer);

    let user = this.data.imageUserSrc;
    let ai = this.data.imageSrc;
    let akNum = this.data.winNum;
    let srcTip = '你输了';

    if ((user == "/icons/shitou.png" && ai == '/icons/jiandao.png') || (user == "/icons/jiandao.png" && ai == '/icons/bu.png') || (user == "/icons/bu.png" && ai == '/icons/shitou.png')) {
      akNum++;
      srcTip = '你赢了';
      wx.setStorageSync('winNum', akNum);
    }
    if (user == ai) {
      srcTip = '平局';
    }
    this.setData({
      winNum: akNum,
      gamePlay: srcTip,
      btnState: true
    })
  },

  // 重来
  again() {
    if (!this.data.btnState) {
      return;
    }
    this.timeImg();
    this.setData({
      btnState: false,
      gamePlay: '',
      imageUserSrc: '/icons/wenhao.png',
    })
  }

})