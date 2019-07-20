const app =getApp()

Component({
  data: {
    activeIndex: 0,
    content:null,
    tabs: null,
    contentList: [
      { text: '菜单:' },
    ]
  },
  attached: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var vm = this;
    wx.getSystemInfo({
      success: (res) => {
        vm.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight,
          tabs: getApp().globalData.tabs
        });
        
      }
    });
  },
  methods: {
    changeTab: function (e) {
      this.setData({
        activeIndex: e.currentTarget.dataset.index,
        content: e.currentTarget.dataset.name
      })
      console.log(this.data.tabs)
    },    
  }
})