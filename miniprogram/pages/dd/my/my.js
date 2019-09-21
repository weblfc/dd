// pages/dd/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
// 上传图片
  upload:function(){
    wx.chooseImage({
      count: 1,
      sizeType: ["original", "compressed"],
      sourceType:["album","camera"],
      successs:(res=>{
        var img = res.tempFilePaths[0];
        wx.cloud.uploadFile({
          cloudPath: new Date().getTime() + ".jpg" ,
          filePath:img,
          success:(res=>{
            console.log(res.fildID)
          }) 

        })
      }),
    })
    
  },

// 页面跳转到select-all
jumpSelect:function(event){
  // var id = event.target.dataset.id;
  wx.navigateTo({
    url: '/pages/dd/select-all/select-all?id=' + this.data.id,
  })
},

//页面跳转到Information
jumpInformation:function(event){
  wx.navigateTo({
    url: '/pages/dd/information/information?id=' + this.data.id,
  })
},

//页面跳转到jumpMy-vip
jumpMyvip:function(event){
  wx.navigateTo({
    url: '/pages/dd/my-vip/my-vip?id=' + this.data.id,
  })
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})