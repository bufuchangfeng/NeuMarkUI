var util = require("../../utils/util.js")

Component({
  data:{
    messages:[]
  },
  options: {
    addGlobalClass: true,
  },
  attached:function(){
    var that = this
    wx.request({
      data: util.json2Form({
        userid: wx.getStorageSync("UserID")
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/getMessages',
      method: "POST",
      success: (res) => {
        console.log(res.data)
        that.setData({
          messages:res.data
        })
      }
    })
  },
  methods:{
    navto:function(e){
      wx.navigateTo({
        url: '/pages/detail/detail?goods_id=' + e.currentTarget.dataset.id, 
      })
    },
    deleteMessage:function(e){
      console.log(e.currentTarget.dataset.id)
      var that = this
      wx.request({
        data: util.json2Form({
          id: e.currentTarget.dataset.id
        }),
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://www.neumark.top/delMessage',
        method: "POST",
        success: (res) => {
          console.log(res.data)


          wx.request({
            data: util.json2Form({
              userid: wx.getStorageSync("UserID")
            }),
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            url: 'https://www.neumark.top/getMessages',
            method: "POST",
            success: (res) => {
              console.log(res.data)
              that.setData({
                messages: res.data
              })
            }
          })
        }
      })


      
    },
    ListTouchStart(e) {
      this.setData({
        ListTouchStart: e.touches[0].pageX
      })
    },

    // ListTouch计算方向
    ListTouchMove(e) {
      this.setData({
        ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
      })
    },

    // ListTouch计算滚动
    ListTouchEnd(e) {
      if (this.data.ListTouchDirection == 'left') {
        this.setData({
          modalName: e.currentTarget.dataset.target
        })
      } else {
        this.setData({
          modalName: null
        })
      }
      this.setData({
        ListTouchDirection: null
      })
    },
  }
})