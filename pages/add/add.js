var util = require("../../utils/util.js")

Page({
  data:{
    imgList: [],
    textareaAValue:null,
    isShowPicker: false,
    datalist: [],
    pickerdata: null,
    name: null,
    price: null,
    description:null,
    category_id:null,
    emptymodal:null,
    usertype:wx.getStorageSync("Usertype")
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '删除',
      content: '确定要删除吗？',
      cancelText: '再看看',
      confirmText: '删除',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  textareaAInput(e) {
    this.setData({
      description: e.detail.value
    })
  },
  showpicker:function(e){
    this.setData({
      isShowPicker: true
    })
    console.log(getApp().globalData.tabs, getApp().globalData.nodes)
  },
  pickersure:function(e){
    this.setData({
      isShowPicker:false,
      pickerdata:e.detail.choosedData[0]["name"] + "-" + e.detail.choosedData[1]["name"],
      category_id: e.detail.choosedData[1]["id"]
    })
    console.log(e.detail.choosedData);

  },
  nameinput:function(e)
  {
    this.setData({
      name:e.detail.value
    })
  },
  priceinput:function(e)
  {
    this.setData({
      price:e.detail.value
    })
  },
  pickerfalse:function(e){
    this.setData({
      isShowPicker: false
    })
  },
  onLoad:function(e){
   
  },
  onShow:function(e){
    this.setData({
      usertype: wx.getStorageSync("Usertype")
    })
    var tabs = getApp().globalData.tabs;
    var nodes = getApp().globalData.nodes;

    console.log(nodes)
    var i;
    var j;
    var data = [];
    var temp = {};
    var t = {};
    for (i = 0; i < tabs.length; i++) {
      if(tabs[i]["Name"] != "店铺"){
        temp = {};
        temp["name"] = tabs[i]["Name"];
        temp["id"] = tabs[i]["ID"];
        var children = [];
        for (j = 0; j < nodes[i].length; j++) {
          t = {};
          t["name"] = nodes[i][j]["Name"]
          t["id"] = nodes[i][j]["ID"]
          children.push(t)
        }
        temp["children"] = children;
        data.push(temp);
      }
    }
    this.setData({
      datalist: data
    })
  },
  send:function(e){
    if (!wx.getStorageSync("UserID")) {
      wx.navigateTo({
        url: '/pages/login/login',
      })
      return
    }
    var that = this;
    console.log(this.data.imgList)

  if(this.data.usertype == "2"){
    this.setData({
      category_id:wx.getStorageSync("CategoryID")
    })
  }

    if (this.data.name == "" || this.data.price == undefined || this.data.description == "" || this.data.description == undefined || this.data.category_id == "" || this.data.name == undefined || this.data.price == "" || this.data.category_id == undefined) {
      wx.showToast({
        title: '请完善信息',
      })
      return
    }

  
    wx.request({
     data: util.json2Form({
        name:this.data.name,
        price:this.data.price,
        description:this.data.description,
        category_id:this.data.category_id,
       user_id: wx.getStorageSync("UserID")
      }),
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://www.neumark.top/addGoods',
      method: "POST",
      success:(res)=>{
        console.log(res.data)
        var goods_id = res.data["goods_id"]
        var length = that.data.imgList.length
        for(var i = 0; i < length; i++)
        {
          wx.uploadFile({
            header: {
              "Content-Type": "multipart/form-data"
            },
            url: 'https://www.neumark.top/addImage',
            filePath: that.data.imgList[i],
            name:"files",
            formData:({
              goods_id:goods_id,
              index: i
            }),
            success:(res)=>{
              console.log(res)
              wx.showToast({
                title: '发布成功',
                duration: 1500,
                complete: function () {
                
                 },
                 
              })
              setTimeout(function () {
                wx.navigateBack({
                })
              },1500)
            }
          })
        }
      }
    })
  },
  hideModal:function(){
    this.setData({
      emptymodal:null
    })
  }
})