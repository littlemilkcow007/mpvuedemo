/*
 * @Author:      liyao
 * @DateTime:    2019-02-19
 * @Description: 封装微信请求方式
 */
let baseUrl = 'http://192.168.0.112:3000'
let flag = false
var header = {
  'Accept': 'application/json',
  // 'content-type': 'application/x-www-form-urlencoded',
  'content-type': 'application/json',
  'Authorization': null
}
function getReq (url, cb) {
  wx.showLoading({
    title: '加载中'
  })
  wx.request({
    url: baseUrl + url,
    method: 'get',
    header: header,
    success: function (res) {
      wx.hideLoading()
      return typeof cb === 'function' && cb(res.data)
    },
    fail: function () {
      wx.hideLoading()
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb === 'function' && cb(flag)
    }
  })
}

function postReq (url, data, cb) {
  wx.showLoading({
    title: '加载中'
  })
  header['content-type'] = 'application/x-www-form-urlencoded'
  wx.request({
    url: baseUrl + url,
    header: header,
    data: data,
    method: 'post',
    success: function (res) {
      wx.hideLoading()
      return typeof cb === 'function' && cb(res.data)
    },
    fail: function () {
      wx.hideLoading()
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      return typeof cb === 'function' && cb(flag)
    }
  })
}
module.exports = {
  getReq: getReq,
  postReq: postReq,
  header: header
}
