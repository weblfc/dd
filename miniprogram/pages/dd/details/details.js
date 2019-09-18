// pages/dd/detalis/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [{ id: 1, title: "小炒黄牛肉", price: 49, n: 5 }, { id: 2, title: "大炒黄牛肉", price: 59, n: 0 }, { id: 3, title: "小炒黄牛肉", price: 69, n: 0 }, { id: 4, title: "小炒黄牛肉", price: 79, n: 0}, { id:5,title: "小炒黄牛肉", price: 89,n:5}]
  },
  change1:function(event){
    var list=event.target.dataset
    list.id.n-=1
    this.setData({
      lists:list
    })
  },
  change2:function(event){
    var n=event.target.dataset.id.n
    console.log(n)
    n++
    this.setData({
      n: n
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