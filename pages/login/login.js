const app = getApp()
var util = require("../../utils/util.js")
Page({
  copyQQ: function () {
    wx.setClipboardData({
      data: "924761163",
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制QQ成功'
            })
          }
        })
      }
    })
  },
  radioChange:function(e){
    console.log(e.detail.value)
    this.setData({
      usertype:e.detail.value
    })
  },
  data:{
    modalName:null,
    wrongModalName:null,
    sid:null,
    pwd:null,
    usertype:1
  },
  hideModal(e) {
    this.setData({
      modalName: null,
      wrongModalName:null
    })
  },
  sidinput: function (event) {
    this.setData({ sid:event.detail.value })
  },

  pwdinput: function(event){
    this.setData({ pwd:event.detail.value})
  },

  bindlogin:function(e){
    console.log(this.data.sid, this.data.pwd)
    if(this.data.sid == null)
    {
      this.setData({
        modalName: "Modal"
      })
      return
    }
    if(this.data.sid == null)
    {
      this.setData({
        modalName: "Modal"
      })
    }
    
    this.setData({
      loadModal: true
    })

    wx.request({
      data: util.json2Form({
        sid: this.data.sid,
        pwd: this.data.pwd,
        usertype:this.data.usertype
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/bind',
      method: "POST",
      success: (res) => {
        console.log(res.data)
        if("1" == res.data["Usertype"]){
          if (res.data["Sid"] == "" && res.data["Name"] == "" && res.data["Sex"] == "") {
            this.setData({
              wrongModalName: "WrongModal"
            })
          }
          else if (res.data["ID"] <= 0) {
            this.setData({
              wrongModalName: "WrongModal"
            })
          }
          else {
            wx.removeStorageSync("UserID")
            wx.removeStorageSync("Usertype")
            wx.setStorageSync("UserID", res.data["ID"])
            wx.setStorageSync("Usertype", res.data["Usertype"])
            // console.log(wx.getStorageSync("UserID"))
            wx.navigateBack({
            })
          }
        }else if("2" == res.data["Usertype"]){
          if (res.data["ID"] <= 0) {
            this.setData({
              wrongModalName: "WrongModal"
            })
          }
          else {
            wx.removeStorageSync("UserID")
            wx.removeStorageSync("Usertype")
            wx.removeStorageSync("CategoryID")
            wx.setStorageSync("UserID", res.data["ID"])
            wx.setStorageSync("Usertype", res.data["Usertype"])
            wx.setStorageSync("CategoryID", res.data["CategoryID"])
            wx.navigateBack({
            })
          }
        }
      }
    })
  },
})