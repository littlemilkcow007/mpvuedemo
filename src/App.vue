<script>
// import 'static/css/iconfont.css'
import {urls} from './utils/http/requestConfig'
import http from './utils/http/requestRegister'
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  mounted () {
    // window.addEventListener('unload', this.saveState)
  },
  methods: {
    saveState () {
      wx.setStorageSync('state', JSON.stringify(this.$store.state))
    }
  },
  onLaunch () {
    var that = this
    wx.login({
      success: function (res) {
        if (res.code) {
          // 发起网络请求
          http.postReq(urls.LOGIN, {code: res.code}, (data) => {
            if (data.isOk) {
              wx.setStorageSync('token', data.token)
            }
          })
        } else {
          wx.showToast({
            title: res.errMsg,
            icon: 'warn',
            duration: 2000
          })
        }
      }
    })
    wx.getSystemInfo({
      success (res) {
        that.$mp.app.globalData.screen = {
          screenWidth: res.screenWidth,
          screenHeight: res.screenHeight
        }
        console.log(that.$mp.app.globalData)
      }
    })
  }
}
</script>

<style>
@import './libs/iconfont.css';
</style>
