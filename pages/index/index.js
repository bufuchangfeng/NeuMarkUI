//index.js
//获取应用实例
const app = getApp()
const tabbar = app.globalData.tabbar
var util = require("../../utils/util")
Page({
  data: {
    tabs: null,
    tabbar:tabbar,
    nodes:[],
    choose_index:0
  },
  tabChange: function (e) {
    var key = e.detail.key
    if (key == 'add') {
      wx.navigateTo({
        url: '/pages/add/add',
      })
    } else {
      this.setData({
        choose_index: e.detail.index
      })
    }
  },

  onLoad:function(e){
    var that = this;
    wx.request({
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getParentCategory',
      method: "POST",
      success: (res) => {
        console.log(res)
        that.setData({
          tabs:res.data
        })
        getApp().globalData.tabs = that.data.tabs;
        getApp().globalData.nodes = new Array()
        var j;
        for (j = 0; j < that.data.tabs.length; j++) {
          getApp().globalData.nodes[j] = new Array()
        }
        console.log("nodes: ")
        console.log(getApp().globalData.nodes)
        var i;
          wx.request({
            data: util.json2Form({
              parent_id: that.data.tabs[0]["ID"]
            }),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://www.neumark.top/getSubCategory',
            method: "POST",
            success: (res) => {
              getApp().globalData.nodes[0] = res.data
            },
          })        
        wx.request({
          data: util.json2Form({
            parent_id: that.data.tabs[1]["ID"]
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/getSubCategory',
          method: "POST",
          success: (res) => {
            getApp().globalData.nodes[1] = res.data
          },
        })        
        wx.request({
          data: util.json2Form({
            parent_id: that.data.tabs[2]["ID"]
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/getSubCategory',
          method: "POST",
          success: (res) => {
            getApp().globalData.nodes[2] = res.data
          },
        })        
        wx.request({
          data: util.json2Form({
            parent_id: that.data.tabs[3]["ID"]
          }),
          header: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          url: 'https://www.neumark.top/getSubCategory',
          method: "POST",
          success: (res) => {
            getApp().globalData.nodes[3] = res.data
          },
        })        
      },
      fail: (res) => {
      }
    })
  },
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function () {
    console.log("on pull down refresh")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("reach bottom")
  },
})
