const app =  getApp()

Component({
  options: {
    addGlobalClass: true,
  },
  data:{
    qqmodal:null,
    userinfo: wx.getStorageSync("UserInfo")
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
    console.log(this.data.userinfo)
  }
})