//app.js
App({
  onLaunch:function(){
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate(function (res) {
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                  updateManager.applyUpdate()
                }
              }
            })
          })
          updateManager.onUpdateFailed(function () {
            // 新的版本下载失败
            wx.showModal({
              title: '已有新版本',
              content: '检查到有新版本，但下载失败，请检查网络设置',
            })
          })
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  globalData:{
    userinfo:null,
    initgoods:null,
    nodes:[], 
    tabs:null,
    tabbar: {
      "color": "#999999",
      "selectedColor": "#7788dd",
      "borderStyle": "#dcdcdc",
      "backgroundColor": "#ffffff",
      "list": [{
        "key": "home",
        "iconPath": "/images/icon_home.png",
        "selectedIconPath": "/images/icon_home_active.png",
        "text": "首页"
      },
      {
        "key": "classify",
        "iconPath": "/images/icon_tag.png",
        "selectedIconPath": "/images/icon_tag_active.png",
        "text": "分类"
      },
      {
        "key": "add",
        "iconPath": "/images/icon_plus_big.png",
        "iconType": "big overflow circle shadow",
        "choose": "disable"
      },
      {
        "key": "message",
        "iconPath": "/images/icon_notebook.png",
        "selectedIconPath": "/images/icon_notebook_active.png",
        "text": "消息"
      },
      {
        "key": "mine",
        "iconPath": "/images/icon_me.png",
        "selectedIconPath": "/images/icon_me_active.png",
        "text": "我的"
      }
      ]
    }
  }
})