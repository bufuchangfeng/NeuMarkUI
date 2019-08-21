// pages/collect.js
var util = require("../../utils/util.js")

Page({

  /**
   * Page initial data
   */
  data: {
    goods: []
  },

  deletecollect:function(e){
    var that = this;
    wx.request({
      data: util.json2Form({
        user_id: wx.getStorageSync("UserID"),
        goods_id: e.currentTarget.dataset.id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/deleteCollect',
      method: "POST",
      success: (res) => {
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
              goods: res.data
            })
          }
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    var that = this;
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
          goods: that.data.goods.concat(res.data)
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})