// pages/dd/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists: [
      { id: 1, title: "番茄炒蛋", img: ("/images/img/b01.jpg"), price: 28, n: 0 },
      { id: 2, title: "青椒肉丝", img: ("/images/img/b02.jpg"), price: 28, n: 0 },
      { id: 3, title: "鱼香肉丝", img: ("/images/img/b03.jpg"), price: 38, n: 0 }],
      price:0,
    lists1: [
      { id: 1, title: "香油黄瓜", img: ("/images/img/a01.jpg"), price: 19, n: 0 },
      { id: 2, title: "五香豆干", img: ("/images/img/a02.jpg"), price: 29, n: 0 },
      { id: 3, title: "大刀青笋", img: ("/images/img/a03.jpg"), price: 39, n: 0 },
      { id: 4, title: "山椒凤爪", img: ("/images/img/a04.jpg"), price: 49, n: 0 },
      { id: 5, title: "麻辣心舌", img: ("/images/img/a05.jpg"), price: 59, n: 0 },
      { id: 6, title: "红油毛肚", img: ("/images/img/a06.jpg"), price: 59, n: 0 }
    ]
  },


  // 点击减号，使数量减1
  change1: function (event) {
    // 功能：点击减号数量减1
    // (1)获取到数组中每个对象
    var list = event.target.dataset.id;   //获取到每个对象
    // var sum = event.target.dataset.id.n
    // var price=event.target.dataset.id.price
    var id = event.target.dataset.id.id
    var a = []
    for (var item of this.data.lists) {
      if (item.n != 0) {
        a.push(item.price * item.n)
        console.log(a)
      }
    }
    for (var i = 0, sum = 0; i < a.length; i++) {
      sum += a[i]
    }
    sum *= 100
    this.setData({
      price: sum
    })

    
    // console.log(list);
    // (2)判断是否小于1，小于1就等于0，并停止运行
    if (list.n < 1) {        //如果对象中的数量n小于1，就让他等于0
      list.n = 0
      return
    }
    // (3)数量-1
    list.n -= 1            //让数量减1
    // (4)创建循环遍历数组lists
    for (let item of this.data.lists) {
      // item.isActive=0;
      // (5)如果每个对象中的id与data中遍历出来的对象id相等
      if (list.id == item.id) {
        // console.log(list.id+"-->"+item.id)
        // (6)声明对象保存当前点击的lists对象-1
        var a = this.data.lists[item.id - 1].n -= 1;
      }
    }
    // 
    // (7)将修改后的lists数组赋值给a
    var a = this.data.lists;
    // (8)将a覆盖到数组lists中 
    this.setData({
      lists: a
    })
  },

  change2: function (event) {
    // 功能：点击加使数量加1
    // (1)获取 lists中的对象
    var list = event.target.dataset.id
    var sum = event.target.dataset.id.n
    // console.log(sum)
    // 获取价格
    var price = event.target.dataset.id.price
    var id = event.target.dataset.id.id
    // (2)点击数量加1
    console.log(list.n)
    var a = []
    for (var item of this.data.lists) {
      if (item.n != 0) {
        a.push(item.price * item.n)
        console.log(a)
      }
    }
    for (var i = 0, sum = 0; i < a.length; i++) {
      sum += a[i]
    }
    sum *= 100
    this.setData({
      price: sum
    })
    list.n += 1
    // (3)创建循环遍历数组
    for (let item of this.data.lists) {
      // (4)选中当前点击的对象，将新的list.n赋值给item.n
      if (list.id == item.id) {
        var a = this.data.lists[item.id - 1].n += 1
        //  console.log(a)
      }
    }
    var a = this.data.lists
    this.setData({
      lists: a
    })
  },

  onSubmit:function(){
  wx.navigateTo({
    url: '/pages/dd/cart1/cart1',
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