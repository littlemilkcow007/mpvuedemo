<!--
* @Author:     liyao
* @DateTime:   2019-02-14
* @Description: 轮播图组件
-->

 <template>
 <div class="swiper">
    <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <block v-for="(item, index) in imgUrl" :key="index" :index='index'>
            <swiper-item>
                <image :src="item" class="slide-image" mode="aspectFill"/>
            </swiper-item>
        </block>
    </swiper> 
    {{ isHave }}
 </div>
</template>

<script>
 export default {
   props: ['imgUrl'],
   data () {
     return {
       indicatorDots: true,
       autoplay: true,
       interval: 3000,
       duration: 500
     }
   },
   mounted () {
   },
   computed: {
   },
   methods: {

   },
   components: {}
}
</script>
<style lang="less" scoped>
  .swiper{
    display: block;
    // height: 400rpx;
    .slide-image{
      width: 100%;
      height: 100%;
    }
  }
</style>
