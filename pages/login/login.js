const app = getApp()
var util = require("../../utils/util.js")
Page({
  data:{
    sid:null,
    pwd:null
  },
  sidinput: function (event) {
    this.setData({ sid:event.detail.value })
  },

  pwdinput: function(event){
    this.setData({ pwd:event.detail.value})
  },

  bindlogin:function(e){
    console.log(this.data.sid, this.data.pwd)
    wx.request({
    data:util.json2Form({
      sid:this.data.sid,
      pwd:this.data.pwd
    }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/bind',
      method:"POST",
      success: (res)=>{
        wx.redirectTo({
          url: '/pages/index/index'
        })
      }
    })
  }
})