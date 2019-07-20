//app.js
App({
  globalData:{
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