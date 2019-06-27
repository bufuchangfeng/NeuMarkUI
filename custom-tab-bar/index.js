const app = getApp();
Component({
  //数据
  data: {
    selected: 0,//当前tabBar页面
    color: "#cdcdcd",//未选中tabBar时的文字颜色
    selectedColor: "#22385d",//选中时tabBar文字颜色
    addImgPath: "../image/tab-bar-image/add.png",//添加发布图标
    // tabBar对象集合
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "../image/tab-bar-image/find.png",
        selectedIconPath: "../image/tab-bar-image/select_find.png",
        text: "首页"
      },
      {
        pagePath: "/pages/classify/classify",
        iconPath: "../image/tab-bar-image/special.png",
        selectedIconPath: "../image/tab-bar-image/select_special.png",
        text: "分类"
      },
      {
        pagePath: "/pages/message/message",
        iconPath: "../image/tab-bar-image/message.png",
        selectedIconPath: "../image/tab-bar-image/select_message.png",
        text: "消息"
      },
      {
        pagePath: "/pages/mine/mine",
        iconPath: "../image/tab-bar-image/my.png",
        selectedIconPath: "../image/tab-bar-image/select_my.png",
        text: "我的"
      }
    ]
  },
  methods: {
    // tabBar切换事件
    tab_bar_index(e) {
      const url = e.currentTarget.dataset.path
      this.setData({
        selected: e.currentTarget.dataset.index
      })
      wx.switchTab({ url })
    },

    // 发布添加按钮跳转
    tab_bar_add() {
      var url = "/pages/add/add"
      wx.navigateTo({ url })
    }
  }
})