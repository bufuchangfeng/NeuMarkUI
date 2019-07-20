//index.js
//获取应用实例
const app = getApp()
const tabbar = app.globalData.tabbar

Page({
  data: {
    tabs: null,
    tabbar:tabbar
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
  onReady:function(e){
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
        console.log("hello")
        console.log(getApp().globalData.tabs)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  }
})
