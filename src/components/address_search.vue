<!--
* @Author:     liyao
* @DateTime:    2019-02-14
* @Description: 定位+搜索组件
-->
<template>
<div class="address_search">
    <!-- 定位 -->
    <div class="address">
       <i class="iconfont icon-weizhi"></i>{{city}}
    </div>
    <!-- 搜索 -->
    <div class="search">
        <i class="iconfont icon-suosou"></i>
        <input class="inputContent" type="text" placeholder="输入搜索">
        <!-- <button  open-type="getUserInfo" bindgetuserinfo="getUserInfo">授权</button> -->
    </div>
</div>
</template>

<script>
// var QQMapWX = require('../libs/qqmap-wx-jssdk.min.js')
import QQMapWX from '../libs/qqmap-wx-jssdk.min.js'
export default {

  data () {
    return {
      city: '', // 用户当前位置
      qqmapsdk: ''
    }
  },
  mounted () {
    this.getUserLocation()
    this.qqmapsdk = new QQMapWX({
      key: 'AX2BZ-NYICF-OLRJ5-N5JTT-4QZUK-Q5F7G' // 这里自己的key秘钥进行填充
    })
    // this.getUserLocation()
    // console.log(this.city)
  },
  computed: {},
  methods: {
    // 用户授权获取用户当前位置
    getUserLocation () {
      let vm = this
      wx.getSetting({
        success: (res) => {
          console.log(JSON.stringify(res))
          // res.authSetting['scope.userLocation'] == undefined    表示 初始化进入该页面
          // res.authSetting['scope.userLocation'] == false    表示 非初始化进入该页面,且未授权
          // res.authSetting['scope.userLocation'] == true    表示 地理位置授权
          if (res.authSetting['scope.userLocation'] !== undefined && res.authSetting['scope.userLocation'] !== true) {
            wx.showModal({
              title: '请求授权当前位置',
              content: '需要获取您的地理位置，请确认授权',
              success: function (res) {
                if (res.cancel) {
                  wx.showToast({
                    title: '拒绝授权',
                    icon: 'none',
                    duration: 1000
                  })
                } else if (res.confirm) {
                  wx.openSetting({
                    success: function (dataAu) {
                      if (dataAu.authSetting['scope.userLocation'] === true) {
                        wx.showToast({
                          title: '授权成功',
                          icon: 'success',
                          duration: 1000
                        })
                        // 再次授权，调用wx.getLocation的API
                        vm.getLocation()
                      } else {
                        wx.showToast({
                          title: '授权失败',
                          icon: 'none',
                          duration: 1000
                        })
                      }
                    }
                  })
                }
              }
            })
          } else if (res.authSetting['scope.userLocation'] === undefined) {
          // 调用wx.getLocation的API
            vm.getLocation()
          } else {
          // 调用wx.getLocation的API
            vm.getLocation()
          }
        },
        fail: (res) => {
          wx.showToast({
            title: '授权失败',
            icon: 'none',
            duration: 1000
          })
        }
      })
    },
    // 微信获得经纬度
    getLocation () {
      let vm = this
      wx.getLocation({
        type: 'wgs84',
        success: function (res) {
          var latitude = res.latitude
          var longitude = res.longitude
          vm.getLocal(latitude, longitude)
        },
        fail: function (res) {
          console.log('fail' + JSON.stringify(res))
        }
      })
    },
    // 获取当前地理位置
    getLocal (latitude, longitude) {
      var vm = this
      vm.qqmapsdk.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function (res) {
          let city = res.result.ad_info.city
          vm.city = city
        },
        fail: function (res) {
          console.log(res)
        },
        complete: function (res) {
        // console.log(res);
        }
      })
    }
  },
  components: {},
  onLoad () {

    // console.log(this.qqmapsdk)
  },
  onShow () {

    // console.log(this.city)
  }
}
</script>
<style lang="less" scoped>
.address_search{
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 30rpx;
  color: #928E8D;
  //定位
  .address{
      width: 170rpx;
      border-radius: 8rpx;
      height: 80rpx;
      line-height: 80rpx;
      box-sizing: border-box;
      text-align: center;
      background-color: #F1F1EF;
      display: flex;
      flex-direction: row;
      justify-content: center
  }
  // 搜索框
  .search{
      width: 520rpx;
      border-radius: 8rpx;
      height: 80rpx;
      line-height: 80rpx;
      box-sizing: border-box;
      border: 1px solid #CCC8C7;
      display: flex;
      flex-direction: row;
      .icon-suosou{
        font-size: 50rpx;
        margin-left: 20rpx;
      }
      .inputContent{
        margin-left: 20rpx;
        height: 100%;
      }
  }

}

</style>

