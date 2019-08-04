const app = getApp()
var util = require("../../utils/util.js")

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    wechat: '',
    qq: '',
    phone: ''
  },
  onLoad:function(){
    console.log("hello")
    var user_id = wx.getStorageSync("UserID")
    wx.request({
      data: util.json2Form({
        user_id:user_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getUserInfo',
      method: "POST",
      success: (res) => {
        console.log(res.data, res.data["WeChat"], res.data["QQ"], res.data["Phone"])
        if(res.data["WeChat"])
        {
          this.setData({
            wechat: res.data["WeChat"],
          })
        }
        if (res.data["QQ"]) {
          this.setData({
            qq: res.data["QQ"],
          })
        }
        if (res.data["Phone"]) {
          this.setData({
            phone: res.data["Phone"]
          })
        }
      }
    })
  },
  wechatinput: function (event) {
    this.setData({ wechat: event.detail.value })
  },
  qqinput: function (event) {
    this.setData({ qq: event.detail.value })
  },
  phoneinput: function (event) {
    this.setData({ phone: event.detail.value })
  },
  modifyInfo:function(){
    wx.request({
      data: util.json2Form({
        user_id:wx.getStorageSync("UserID"),
        phone: this.data.phone,
        wechat: this.data.wechat,
        qq:this.data.qq
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/updateUserInfo',
      method: "POST",
      success: (res) => {
        console.log(res.data)
        wx.showToast({
          title: '修改成功',
          icon:'success'
        })
      }
    })
  },
  clearStorages:function()
  {
    wx.clearStorage()
    wx.reLaunch({
      url: '/pages/login/login',
    })
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
    wx.setStorageSync("UserInfo", e.detail.userInfo)
    console.log(wx.getStorageSync("UserInfo"))
    wx.reLaunch({
      url: '/pages/index/index'
    })
  }
})