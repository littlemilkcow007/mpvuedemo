<template>
  <div class="index">
      <!-- 当前位置定位+搜索 -->
      <addressSearch />
      <!-- 轮播图 -->
      <swiper :imgUrl='imgUrl'/>
      <!-- 优惠券 -->
      <coupons />
      <!-- 快速通道 -->
      <fastTrack />
      <!-- 品牌馆 -->
      <brand />
      <!-- 人群推荐 -->
      <crowdRecommended />
  </div>
</template>

<script>
import addressSearch from '@Components/index/address_search'
import swiper from '@Components/index/swiper'
import coupons from '@Components/index/coupons'
import fastTrack from '@Components/index/fast_track'
import brand from '@Components/index/brand'
import crowdRecommended from '@Components/index/crowd_recommended'

export default {
  data () {
    return {
      imgUrl: [
        '../../static/images/1.jpg',
        '../../static/images/2.jpg',
        '../../static/images/3.jpg',
        '../../static/images/4.jpg'
      ]
    }
  },
  components: {
    addressSearch,
    swiper,
    coupons,
    fastTrack,
    brand,
    crowdRecommended
  },
  methods: {

  },
  created () {
  }
}
</script>

<style scoped>

</style>
