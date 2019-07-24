Page({
  data:{
    imgList: [],
    textareaAValue:null,
    isShowPicker: false,
    datalist: [],
    pickerdata: null
  },
  ChooseImage() {
    wx.chooseImage({
      count: 4, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
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
      textareaAValue: e.detail.value
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
      pickerdata:e.detail.choosedData[0]["name"] + "-" + e.detail.choosedData[1]["name"]
    })
    console.log(e.detail.choosedData);
  },
  pickerfalse:function(e){
    this.setData({
      isShowPicker: false
    })
  },
  onLoad:function(e){
    var tabs = getApp().globalData.tabs;
    var nodes = getApp().globalData.nodes;

    console.log(nodes)
    var i;
    var j;
    var data = [];
    var temp = {};
    var t = {};
    for(i=0;i<tabs.length;i++)
    {
      temp = {};
      temp["name"] = tabs[i]["Name"];
      temp["id"] = tabs[i]["ID"];
      var children = [];
      for(j=0;j<nodes[i].length;j++)
      {
        t = {};
        t["name"] = nodes[i][j]["Name"]
        t["id"] = nodes[i][j]["ID"]
        children.push(t)
      }
      temp["children"] = children;
      data.push(temp);
    }
    this.setData({
      datalist:data
    })
  },
  send:function(e){
    console.log(this.data.imgList)
  }
})