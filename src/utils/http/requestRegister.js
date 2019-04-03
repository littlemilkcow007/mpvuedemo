/*
 * @Author:      liyao
 * @DateTime:    2019-02-19
 * @Description: 封装微信请求方式
 */
import {noTokenReq} from './requestConfig'
let baseUrl = 'http://192.168.0.112:3000'
var header = {
  'Accept': 'application/json',
  // 'content-type': 'application/x-www-form-urlencoded',
  'content-type': 'application/json',
  'Authorization': null
}

// 验证权限
function validatePower (url) {
  // 验证访问页面是否需要权限
  if (noTokenReq.indexOf(url) === -1) {
    // 验证浏览器localStorage缓存中是否存在token
    let token = wx.getStorageSync('token')
    header['Authorization'] = token
    return !!token
  } else {
    return true
  }
}

// 统一处理成功请求返回值
function resolveSuccessRes (res) {
  if (res.data.code === '000000') {
    return res.data
  } else if (res.data.code === '999999') {
    wx.showToast({
      title: '该账号在其他地方登录',
      icon: 'warn',
      duration: 2000
    })
    // webStorage.getOut()
  } else if (res.data.code === '000001') {
    wx.showToast({
      title: res.data.message,
      icon: 'warn',
      duration: 2000
    })
  } else if (res.data.code === '999998') {
    wx.showToast({
      title: res.data.message,
      icon: 'warn',
      duration: 2000
    })
    // webStorage.getOut()
  } else if (res.data.code === '999997') {
    wx.showToast({
      title: res.data.message,
      icon: 'warn',
      duration: 2000
    })
    // webStorage.getOut()
  } else {
    // 表示网络正常，服务器拒绝
    wx.showToast({
      title: '服务器错误，请稍后重试',
      icon: 'warn',
      duration: 2000
    })
  }
}

// 统一处理 失败请求返回值
function resolveFailRes (status) {
  if (status >= 500) {
    wx.showToast({
      title: '服务器错误，请稍后重试',
      icon: 'warn',
      duration: 2000
    })
  } else if (status >= 400 && status < 500) {
    if (status === 404) {
      wx.showToast({
        title: '网络错误，请稍后重试',
        icon: 'warn',
        duration: 2000
      })
    } else {
      wx.showToast({
        title: '客户端错误，请Ctrl+F5刷新页面',
        icon: 'warn',
        duration: 2000
      })
    }
  } else if (status >= 300 && status < 400) {
    wx.showToast({
      title: '请求发生重定向，请联系工作人员',
      icon: 'warn',
      duration: 2000
    })
  }
}

function getReq (url, cb) {
  if (validatePower(url)) {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      url: baseUrl + url,
      method: 'get',
      header: header,
      success: function (res) {
        wx.hideLoading()
        // return typeof cb === 'function' && cb(res.data)
        return typeof cb === 'function' && cb(resolveSuccessRes(res))
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showModal({
          title: '网络错误',
          content: '网络出错，请刷新重试',
          showCancel: false
        })
        // return typeof cb === 'function' && cb(flag)
        return typeof cb === 'function' && cb(resolveFailRes(res.statusCode))
      }
    })
  } else {
    wx.showModal({
      title: '未登录',
      content: '请先登录',
      showCancel: false
    })
  }
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
      // return typeof cb === 'function' && cb(res.data)
      console.log(res)
      return typeof cb === 'function' && cb(resolveSuccessRes(res))
    },
    fail: function (res) {
      wx.hideLoading()
      wx.showModal({
        title: '网络错误',
        content: '网络出错，请刷新重试',
        showCancel: false
      })
      console.log(res)
      // return typeof cb === 'function' && cb(flag)
      return typeof cb === 'function' && cb(resolveFailRes(res.statusCode))
    }
  })
}
/* module.exports = {
  getReq: getReq,
  postReq: postReq
} */
export default {
  getReq: getReq,
  postReq: postReq
}
