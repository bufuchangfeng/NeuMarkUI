const app =getApp()
const tabs = getApp().globalData.nodes
const nodes = getApp().globalData.nodes

Component({
  data: {
    activeIndex: 0,
    content:getApp().globalData.nodes[0],
    tabs: tabs,
    nodes:nodes,
  },
  attached: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var vm = this;
    wx.getSystemInfo({
      success: (res) => {
        vm.setData({
          deviceWidth: res.windowWidth,
          deviceHeight: res.windowHeight,
          tabs: getApp().globalData.tabs,
          nodes:getApp().globalData.nodes,
          content:getApp().globalData.nodes[0]
        });
      }
    });
    console.log("hello")
    console.log(vm.data.nodes)
  },
  methods: {
    changeTab: function (e) {
      var that = this;
      that.setData({
        activeIndex: e.currentTarget.dataset.index,
        content: that.data.nodes[e.currentTarget.dataset.index]
      })
      console.log(that.data.content)
    },    
  }
})