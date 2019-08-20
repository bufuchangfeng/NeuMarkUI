const app =  getApp()
var util = require("../../utils/util.js")

Component({
  options: {
    addGlobalClass: true,
  },
  data:{
    qqmodal:null,
    userinfo: wx.getStorageSync("UserInfo"),
    sells:[],
    sells_length:0,
    collects:[],
    collects_length:0
  },
  methods:{
    showQQ: function () {
      this.setData({
        qqmodal: "QQModal"
      })
    },
    hideModal: function () {
      this.setData({
        qqmodal: null
      })
    },
    copyQQ: function () {
      wx.setClipboardData({
        data: "924761163",
        success: function (res) {
          wx.getClipboardData({
            success: function (res) {
              wx.showToast({
                title: '复制成功'
              })
            }
          })
        }
      })
    },
  },
  attached:function(){
    console.log("hello")
    this.setData({
      userinfo:wx.getStorageSync("UserInfo")
    })

   var that = this;
    wx.request({
      data: util.json2Form({
        user_id: wx.getStorageSync("UserID")
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getSells',
      method: "POST",
      success: (res) => {
        console.log("hi")
        console.log(res.data)
        that.setData({
          sells: res.data
        })
        var i;
        var len = 0;
        for (i = 0; i < that.data.sells.length; i++) {
          if (0 != that.data.sells[i]["ID"]) {
            len++;
          }
          else {
            break;
          }
          that.setData({
            sells_length: len
          })
        }
      }
    })


    wx.request({
      data: util.json2Form({
        user_id: wx.getStorageSync("UserID")
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getCollects',
      method: "POST",
      success: (res) => {
        console.log("hi")
        console.log(res.data)
        that.setData({
          collects: res.data
        })

        var i;
        var len = 0;
        for (i = 0; i < that.data.collects.length; i++) {
          if (0 != that.data.collects[i]["ID"]) {
            len++;
          }
          else {
            break;
          }
          that.setData({
            collects_length: len
          })
        }
      }
    })
  
    console.log(this.data.userinfo)
  }
})