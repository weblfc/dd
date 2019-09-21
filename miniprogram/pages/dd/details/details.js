// pages/dd/detalis/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lists1: [
      { id: 1, title: "香油黄瓜", img: ("/images/img/a01.jpg"), price: 19, n: 0 }, 
      { id: 2, title: "五香豆干", img: ("/images/img/a02.jpg"), price: 29, n: 0 },
      { id: 3, title: "大刀青笋", img: ("/images/img/a03.jpg"), price: 39, n: 0 }, 
      { id: 4, title: "山椒凤爪", img: ("/images/img/a04.jpg"), price: 49, n: 0 }, 
      { id: 5, title: "麻辣心舌", img: ("/images/img/a05.jpg"), price: 59, n: 0 },
      { id: 6, title: "红油毛肚", img: ("/images/img/a06.jpg"), price: 59, n: 0 }
      ],
    lists2: [
      { id: 1, title: "番茄炒蛋", img: ("/images/img/b01.jpg"),price: 18, n: 0 }, 
      { id: 2, title: "青椒肉丝", img: ("/images/img/b02.jpg"),price: 28, n: 0 },
      { id: 3, title: "鱼香肉丝", img: ("/images/img/b03.jpg"), price: 38, n: 0 }, 
      { id: 4, title: "水煮牛肉", img: ("/images/img/b04.jpg"), price: 48, n: 0 }, 
      { id: 5, title: "干煸肥肠", img: ("/images/img/b05.jpg"),price: 58, n: 0 }],
    lists3: [
      { id: 1, title: "三鲜汤", img: ("/images/img/c01.jpg"),price: 17, n: 0 }, 
      { id: 2, title: "酸菜粉丝汤", img: ("/images/img/c02.jpg"),price: 28, n: 0 },
      { id: 3, title: "土鸡汤", img: ("/images/img/c03.jpg"),price: 37, n: 0 }],
    lists4: [
      { id: 1, title: "泡白菜", img: ("/images/img/d01.jpg"),price: 16, n: 0 }, 
      { id: 2, title: "青椒土豆丝", img: ("/images/img/d02.jpg"),price: 26, n: 0 },
      { id: 3, title: "炒油菜尖", img: ("/images/img/d03.jpg"),price: 36, n: 0 }, 
      { id: 4, title: "空心菜", img: ("/images/img/d04.jpg"),price: 46, n: 0 }, 
      { id: 5, title: "干煸四季豆", img: ("/images/img/d05.jpg"),price: 56, n: 0 }],
      id:2
  },


  // 点击减号，使数量减1
  change11:function(event){
    // 功能：点击减号数量减1
    // (1)获取到数组中每个对象
    var list=event.target.dataset.id;   //获取到每个对象
      // console.log(list);
    // (2)判断是否小于1，小于1就等于0，并停止运行
    if(list.n<1){        //如果对象中的数量n小于1，就让他等于0
      list.n=0
      return
    }
    // (3)数量-1
    list.n-=1            //让数量减1
    // (4)创建循环遍历数组lists
    for(let item of this.data.lists1){
      // item.isActive=0;
    // (5)如果每个对象中的id与data中遍历出来的对象id相等
      if(list.id==item.id){
        // console.log(list.id+"-->"+item.id)
    // (6)声明对象保存当前点击的lists对象-1
        var a=this.data.lists1[item.id-1].n-=1;
      }
    }
    // 
    // (7)将修改后的lists数组赋值给a
    var a=this.data.lists1;
    // (8)将a覆盖到数组lists中 
    this.setData({
      lists1:a
    })
  },
  change21:function(event){
    // 功能：点击加使数量加1
    // (1)获取 lists中的对象
    var list=event.target.dataset.id
    // (2)点击数量加1
    list.n+=1
    console.log(list.n)
    // (3)创建循环遍历数组
    for(let item of this.data.lists1){
    // (4)选中当前点击的对象，将新的list.n赋值给item.n
      if(list.id==item.id){
        var a=this.data.lists1[item.id-1].n+=1
        //  console.log(a)
      }
    }
      var a=this.data.lists1
    this.setData({
      lists1:a
    })
  },


  change12:function(event){
    // 功能：点击减号数量减1
    // (1)获取到数组中每个对象
    var list=event.target.dataset.id;   //获取到每个对象
      // console.log(list);
    // (2)判断是否小于1，小于1就等于0，并停止运行
    if(list.n<1){        //如果对象中的数量n小于1，就让他等于0
      list.n=0
      return
    }
    // (3)数量-1
    list.n-=1            //让数量减1
    // (4)创建循环遍历数组lists
    for(let item of this.data.lists2){
      // item.isActive=0;
      console.log(item)
    // (5)如果每个对象中的id与data中遍历出来的对象id相等
      if(list.id==item.id){
        // console.log(list.id+"-->"+item.id)
    // (6)声明对象保存当前点击的lists对象-1
        var a=this.data.lists2[item.id-1].n-=1;
      }
    }
    // 
    // (7)将修改后的lists数组赋值给a
    var a=this.data.lists2;
    console.log(a)
    // (8)将a覆盖到数组lists中 
    this.setData({
      lists2:a
    })
  },
  change22:function(event){
    // 功能：点击加使数量加1
    // (1)获取 lists中的对象
    var list=event.target.dataset.id
    // (2)点击数量加1
    list.n+=1
    console.log(list.n)
    // (3)创建循环遍历数组
    for(let item of this.data.lists2){
    // (4)选中当前点击的对象，将新的list.n赋值给item.n
      if(list.id==item.id){
        var a=this.data.lists2[item.id-1].n+=1
         console.log(a)
      }
    }
      var a=this.data.lists2
      console.log(a)
    this.setData({
      lists2:a
    })
  },


  change13:function(event){
    // 功能：点击减号数量减1
    // (1)获取到数组中每个对象
    var list=event.target.dataset.id;   //获取到每个对象
      // console.log(list);
    // (2)判断是否小于1，小于1就等于0，并停止运行
    if(list.n<1){        //如果对象中的数量n小于1，就让他等于0
      list.n=0
      return
    }
    // (3)数量-1
    list.n-=1            //让数量减1
    // (4)创建循环遍历数组lists
    for(let item of this.data.lists3){
      // item.isActive=0;
    // (5)如果每个对象中的id与data中遍历出来的对象id相等
      if(list.id==item.id){
        // console.log(list.id+"-->"+item.id)
    // (6)声明对象保存当前点击的lists对象-1
        var a=this.data.lists3[item.id-1].n-=1;
      }
    }
    // 
    // (7)将修改后的lists数组赋值给a
    var a=this.data.lists3;
    // (8)将a覆盖到数组lists中 
    this.setData({
      lists3:a
    })
  },
  change23:function(event){
    // 功能：点击加使数量加1
    // (1)获取 lists中的对象
    var list=event.target.dataset.id
    // (2)点击数量加1
    list.n+=1
    console.log(list.n)
    // (3)创建循环遍历数组
    for(let item of this.data.lists3){
    // (4)选中当前点击的对象，将新的list.n赋值给item.n
      if(list.id==item.id){
        var a=this.data.lists3[item.id-1].n+=1
        //  console.log(a)
      }
    }
      var a=this.data.lists3
    this.setData({
      lists3:a
    })
  },


  change14:function(event){
    // 功能：点击减号数量减1
    // (1)获取到数组中每个对象
    var list=event.target.dataset.id;   //获取到每个对象
      // console.log(list);
    // (2)判断是否小于1，小于1就等于0，并停止运行
    if(list.n<1){        //如果对象中的数量n小于1，就让他等于0
      list.n=0
      return
    }
    // (3)数量-1
    list.n-=1            //让数量减1
    // (4)创建循环遍历数组lists
    for(let item of this.data.lists4){
      // item.isActive=0;
    // (5)如果每个对象中的id与data中遍历出来的对象id相等
      if(list.id==item.id){
        // console.log(list.id+"-->"+item.id)
    // (6)声明对象保存当前点击的lists对象-1
        var a=this.data.lists4[item.id-1].n-=1;
      }
    }
    // 
    // (7)将修改后的lists数组赋值给a
    var a=this.data.lists4;
    // (8)将a覆盖到数组lists中 
    this.setData({
      lists4:a
    })
  },
  change24:function(event){
    // 功能：点击加使数量加1
    // (1)获取 lists中的对象
    var list=event.target.dataset.id
    // (2)点击数量加1
    list.n+=1
    console.log(list.n)
    // (3)创建循环遍历数组
    for(let item of this.data.lists4){
    // (4)选中当前点击的对象，将新的list.n赋值给item.n
      if(list.id==item.id){
        var a=this.data.lists4[item.id-1].n+=1
        //  console.log(a)
      }
    }
      var a=this.data.lists4
    this.setData({
      lists4:a
    })
  },

add1:function(){
  this.setData({
    id:1
  })
},
add2:function(){
  this.setData({
    id: 2
  })
},
add3:function(){
  this.setData({
    id: 3
  })
},
add4:function(){
  this.setData({
    id: 4
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