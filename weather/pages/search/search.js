// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        text: '我要回家',
        txtStyle:""
      },
      {
        text: '天上有棵树',
        txtStyle: ""
      },
      {
        text: '地上有个大坑',
        txtStyle: ""
      }
    ],
    delWidth:180,
    startX:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
  },

  init(){
    var delBtn = this.getEleWid(this.data.delWidth)+180;
    this.setData({
      delWidth:delBtn
    })
  },

  // 获取宽度
  getEleWid(w){
    var real = 0;
    try{
      var res = wx.getSystemInfoSync().windowWidth;
      var scale = (750 / 2) / (w / 2);
      real = Math.floor(res / scale);
      return real;
    }catch(e){
      return false;
    }
  },

  // bindtouchstart
  touchS(e){
    console.log('111',e);
    if(e.touches.length == 1){
      this.setData({
        startX:e.touches[0].clientX
      })
    }
  },
  touchM(e){
    // console.log('123',e)
    if(e.touches.length == 1){
      var moveX = e.touches[0].clientX;
      var disX = this.data.startX - moveX;  //起始位置与移动期间的差值
      var delBtn = this.data.delWidth;
      var textStyle = '';
      if(disX <= 0){
        textStyle = 'left:0px';
      }else if(disX>0){
        textStyle = 'left:-'+disX+'px';
        if(disX >= delBtn){
          textStyle = 'left:-'+delBtn+'px';
        }
      }

      // 获取手指触摸的那一列
      var index = e.currentTarget.dataset.index;
      var listD = this.data.list;
      listD[index].txtStyle = textStyle;

      // 更新列表
      this.setData({
        list:listD
      })
    }
  },
  touchE(e){
    console.log('xixi',e);
    if (e.changedTouches.length == 1){
      var endX = e.changedTouches[0].clientX;
      // 触摸开始与结束,移动的距离
      var dix = this.data.startX - endX;
      var delBtn = this.data.delWidth;

      // 如果距离小于删除按钮的1/2,则不显示
      var styleTex = dix > delBtn/2 ? "left:-"+delBtn+'px' : "left:0px";
      
      // 获取手指触摸的那一列
      var index = e.currentTarget.dataset.index;
      var listD = this.data.list;
      listD[index].txtStyle = styleTex;

      // 更新列表
      this.setData({
        list: listD
      })
    }
  },

  //删除按钮事件
  delete(e){
    //获取列表中要删除项的下标
    var index = e.currentTarget.dataset.index;
    var listD = this.data.list;
    listD.splice(index, 1);

    //更新列表的
    this.setData({
      list: listD
    });
  } 

})