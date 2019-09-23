// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:'web-lfc-01-yfixe'
})
//1:引入request-promise库
const rp = require("request-promise");
//2:创建url
exports.main = async (event, context) => {
  var url = `http://127.0.0.1:5000/api/v1/food/get_food_list?per_page=${event.per_page}&page=${event.page}&class_name=${event.class_name}`
  //3:发送ajax
  return rp(url).then(res => {
    debugger
    return res;
  }).catch(err => {
    console.log(err);
  })
}