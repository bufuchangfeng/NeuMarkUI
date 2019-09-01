// pages/classifygoods/classifygoods.js
var util = require("../../utils/util.js")
Page({

  /**
   * Page initial data
   */
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
        category_id: that.data.category_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getGoods',
      method: "POST",
      success: (res) => {
        console.log(res)
        that.setData({
          goods: that.data.goods.concat(res.data)
        })
      }
    })
    console.log(that.data.goods.length)
  },
  scrolltoupper: function () {
    this.setData({
    })
    console.log("scroll to upper")

    var that = this
    wx.request({
      data: util.json2Form({
        page: 0,
        page_size: that.data.page_size,
        category_id: that.data.category_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getGoods',
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
  data: {
    goods: [],
    page_size: 5,
    page: 0,
    category_id:-1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (option) {
    this.setData({
      category_id: option.category_id
    })
    this.setData({
      loadModal: true
    })
    var temp = wx.getStorageSync("UserID")
    console.log(temp)
    var that = this
    wx.request({
      data: util.json2Form({
        page: 0,
        page_size: 5,
        category_id: that.data.category_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getGoods',
      method: "POST",
      success: (res) => {
        console.log(res)
        that.setData({
          goods: res.data,
          page: 0
        })
        that.setData({
          loadModal: false
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