// pages/suggestion/suggestion.js
var util = require("../../utils/util.js")
Page({

  /**
   * Page initial data
   */
  data: {
    suggestion:null,
    user_id:null,
    emptyModalName:null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var user_id = wx.getStorageSync("UserID")
      this.setData({
        user_id:user_id
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

  },
  textareaAInput:function(e){
    this.setData({ suggestion: e.detail.value })
  },
  sendSuggestion:function(){
    if(this.data.suggestion == "" || this.data.suggestion == undefined)
    {
      this.setData({
        emptyModalName:"EmptyModal"
      })
      return
    }
    wx.request({
      data: util.json2Form({
        content:this.data.suggestion,
        user_id:this.data.user_id
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/addSuggestion',
      method: "POST",
      success: (res) => {
       wx.showToast({
          title: '成功发送',
          icon: 'success',
          duration: 2000
        });
      }
    })
    
  },
  hideModal:function(){
    this.setData({
      emptyModalName:null
    })
  }
})