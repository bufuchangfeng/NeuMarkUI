var util = require("../../utils/util.js")
const app = getApp();
Page({
  previewImg: function (e) {
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.swiperList;
    console.log(index, imgArr)
    var i = 0;
    var s = []
    for (i = 0; i < imgArr.length; i++) {
      s.push(imgArr[i]['url'])
    }
    wx.previewImage({
      current: imgArr[index]['url'],     //当前图片地址
      urls: s,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  copyqq:function(e){
    wx.setClipboardData({
      data: e.currentTarget.dataset.qq,
      success: function (res) {
        wx.showToast({
          title: '已复制QQ',
        })
      }
    })
  },
  copywechat: function (e) {
    wx.setClipboardData({
      data: e.currentTarget.dataset.wechat,
      success: function (res) {
        wx.showToast({
          title: '已复制微信',
        })
      }
    })
  },
  call:function(e){
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.phone,
    })
  },
  sendcomment:function(e){ 
    
    if (!wx.getStorageSync("UserID")) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }
    if(this.data.comment == "" || this.data.comment == undefined){
      wx.showToast({
        title: '请输入评论内容',
      })
      return
    }
    console.log(this.data.userinfo)
    if (this.data.userinfo == null || this.data.userinfo == undefined || this.data.userinfo.nickName == "" || this.data.userinfo.nickName == undefined || this.data.userinfo.avatarUrl == "" || this.data.userinfo.avatarUrl == undefined) {
     wx.showModal({
       title: '提示',
       content: '请先在 我的->个人信息管理 页面获取头像昵称',
     })
      return
    }
    var that = this;
    wx.request({
      data: util.json2Form({
        goods_id: this.data.goods_id,
        nickname: this.data.userinfo.nickName,
        avatar:this.data.userinfo.avatarUrl,
        xid:this.data.xid,
        content:this.data.comment,
        userid:wx.getStorageSync("UserID")
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/addComment',
      method: "POST",
      success: (res) => {
        console.log(res.data);
        wx.showToast({
          title: '评论成功',
        })
      }
    })
    // 获取评论
    wx.request({
      data: util.json2Form({
        goods_id: this.data.goods_id,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getComments',
      method: "POST",
      success: (res) => {
        // console.log(res.data);
        var i;
        console.log("hello")
        console.log(res.data.length)
        for(i = 0; i<res.data.length;i++)
        {
          console.log("hello")
          console.log(res.data[i]["CreatedAt"])
          res.data[i]["CreatedAt"].replace(/T/g, " ")
          res.data[i]["CreatedAt"].replace(/Z/g, " ")
        }
        that.setData({
          comments: res.data
        })
      }
    })
  },
  replyto:function(e){
    console.log(e.currentTarget.dataset['id'])
    this.setData({
      xid: e.currentTarget.dataset['id']
    })
    this.setData({
      placeholder: "回复 " + e.currentTarget.dataset['user']
    })
  },
  commentinput:function(e){
    this.setData({ comment: e.detail.value })
  },
  collect:function(e){
    if(!wx.getStorageSync("UserID")){
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }
    wx.request({
      data: util.json2Form({
        goods_id: this.data.goods_id,
        user_id:wx.getStorageSync("UserID")
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

    this.setData({
      loadModal: true
    })


   this.setData({
     userinfo: wx.getStorageSync("UserInfo")
   })
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

        that.setData({
          loadModal: false
        })
      }
    })
    this.towerSwiper('swiperList')


  // 获取评论
    wx.request({
      data: util.json2Form({
        goods_id: this.data.goods_id,
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getComments',
      method: "POST",
      success: (res) => {
        var i;        
        for (i = 0; i < res.data.length; i++) {
          // 这里不知道为什么，字符串替换函数不生效
          // 找到了原因 replace函数不修改原字符串，而是返回一个新的字符串
          res.data[i]["CreatedAt"] = res.data[i]["CreatedAt"].replace(/T/g, " ")
          res.data[i]["CreatedAt"] = res.data[i]["CreatedAt"].replace(/Z/g, " ")
        }
        that.setData({
          comments:res.data
        })
      }
    })
  },
  data: {
    comment:'',
    goods:null,
    wechat:'',
    qq:'',
    phone:'',
    goods_id:null,
    cardCur: 0,
    swiperList: [],
    xid:-1,
    userinfo:null,
    comments:null,
    placeholder:"  我也说一句"
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