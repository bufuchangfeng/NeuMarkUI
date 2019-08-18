var util = require("../../utils/util.js")
const app = getApp();
Page({
  collect:function(e){
    wx.request({
      data: util.json2Form({
        goods_id: this.data.goods_id,
        user_id:wx.getStorage({
          key: 'UserID',
          success: function(res) {},
        })
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/addCollect',
      method: "POST",
      success: (res) => {
        console.log(res.data);
        wx.showToast({
          title: '收藏成功',
        })
      }
    })
  },

  onLoad:function(option){
   
   var that = this;
   var  s = []
   var t = {}
    console.log(option)
    this.setData({
      goods_id: option.goods_id
    })
    wx.request({
      data: util.json2Form({
        goods_id:this.data.goods_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getGoodsDetail',
      method: "POST",
      success: (res) => {
        console.log(res.data);
        var i;
        
        for(i=0;i<res.data['Images'].length;i++)
        {
          t = {}
          t['id' ] = i;
          t['type']='image';
          t['url'] = ' http://www.neumark.top:8080/' + res.data['Images'][i]['Filename']
          s.push(t)
        }
        that.setData({
          phone:res.data['User']['Phone'],
          qq:res.data['User']['QQ'],
          wechat:res.data['User']['WeChat'],
          goods:res.data,
          swiperList:s

        })
      }
    })
    this.towerSwiper('swiperList')
    
  },
  data: {
    goods:null,
    wechat:'',
    qq:'',
    phone:'',
    goods_id:null,
    cardCur: 0,
    swiperList: [],
  },
  DotStyle(e) {
    this.setData({
      DotStyle: e.detail.value
    })
  },
  // cardSwiper
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },
  // towerSwiper
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  // towerSwiper触摸开始
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
  },
  // towerSwiper计算方向
  towerMove(e) {
    this.setData({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  },
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setData({
        swiperList: list
      })
    }
  }
})