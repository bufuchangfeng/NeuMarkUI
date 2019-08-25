const app = getApp()
var util = require("../../utils/util.js")
Page({
  data:{
    modalName:null,
    wrongModalName:null,
    sid:null,
    pwd:null,
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
    wx.request({
      data: util.json2Form({
        sid: this.data.sid,
        pwd: this.data.pwd
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/bind',
      method: "POST",
      success: (res) => {
        console.log(res.data)

        if(res.data["Sid"] == "" && res.data["Name"] == "" && res.data["Sex"] == "")
        {
          this.setData({
            wrongModalName: "WrongModal"
          })
        }
        else if(res.data["ID"] <= 0){
          this.setData({
            wrongModalName: "WrongModal"
          })
        }
        else
        {
          wx.removeStorageSync("UserID")
          wx.setStorageSync("UserID", res.data["ID"])
          console.log(wx.getStorageSync("UserID"))
          wx.navigateBack({
            
          })
        }
      }
    })
  },
})