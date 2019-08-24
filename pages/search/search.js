// pages/search/search.js
var util = require("../../utils/util.js")

Page({

  /**
   * Page initial data
   */
  scrolltoupper: function () {
      this.setData({
      })
      console.log("scroll to upper")

      var that = this
      wx.request({
        data: util.json2Form({
          page: 0,
          page_size: that.data.page_size,
          content:this.data.searchcontent
        }),
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://www.neumark.top/search',
        method: "POST",
        success: (res) => {
          console.log(res)
          that.setData({
            goods: res.data,
            page: 0
          })
        }
      })
    },
  scrolltolower: function () {
    this.setData({
      page: this.data.page + 1
    })
    console.log("scroll to lower")

    var that = this
    wx.request({
      data: util.json2Form({
        page: that.data.page,
        page_size: that.data.page_size,
        content:this.data.searchcontent
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/search',
      method: "POST",
      success: (res) => {
        console.log(res)
        that.setData({
          goods: that.data.goods.concat(res.data)
        })
      }
    })
  },
  data: {
    searchcontent:null,
    goods:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.setData({ searchcontent: options.content})
      var that = this
      wx.request({
        data: util.json2Form({
          page: 0,
          page_size: that.data.page_size,
          content:this.data.searchcontent
        }),
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://www.neumark.top/search',
        method: "POST",
        success: (res) => {
          console.log(res)
          that.setData({
            goods: res.data,
            page: 0
          })
        }
      })
      
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