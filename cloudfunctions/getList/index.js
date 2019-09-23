const cloud = require('wx-server-sdk')
cloud.init()
// 1:引入request-promise库
const rp = require("request-promise")
// 2：创建URL地址
exports.main = async (event, context) => {
  var url = `http://api.douban.com/v2/movie/in_theaters`;
  url += `?apikey=0df993c66c0c636e29ecbb5344252a4a`;
  url += `&start=${event.start}`;
  url += `&count=${event.count}`;
  // var url = `http://127.0.0.1:5000/api/v1/food/get_food_list?per_page=${event.per_page}&page=${event.page}&class_name=${event.class_name}`;
  // 3：发送ajax 注：2个return
  return rp(url).then(res => {
    return res
  }).catch(err => {
    console.log(err)
  })
}