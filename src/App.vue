<script>
// import 'static/css/iconfont.css'
import urls from './utils/http/requestConfig'
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
    wx.login({
      success: function (res) {
        if (res.code) {
          // 发起网络请求
          http.postReq(urls.LOGIN, {code: res.code}, (data) => {
            console.log(data)
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
}
</script>

<style>
@import './libs/iconfont.css';
/* .container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}  */
</style>
