var util = require("../../utils/util.js")

Component({
  methods:{
    scrolltolower: function () {
      this.setData({
        page:this.data.page+1
      })
      console.log("scroll to lower")

      var that = this
      wx.request({
        data: util.json2Form({
          page: that.data.page,
          page_size: that.data.page_size,
          category_id: -1
        }),
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://www.neumark.top/getGoods',
        method: "POST",
        success: (res) => {
          console.log(res)
          that.setData({
            goods:that.data.goods.concat(res.data)
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
          category_id: -1
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
  },
  options: {
    addGlobalClass: true
  },
  attached:function(){
    var that = this
      wx.request({
      data: util.json2Form({
        page:0,
        page_size:5,
        category_id:-1
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getGoods',
      method: "POST",
      success: (res) => {
        console.log(res)
        that.setData({
          goods:res.data,
          page:0
        })
      }
    })
  },
  data:{
    goods:[],
    page_size: 5,
    page:0
  }
})