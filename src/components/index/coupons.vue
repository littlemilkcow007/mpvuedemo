<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 优惠券活动
-->

 <template>
<div class="coupons">
    <image :src='imgUrl' />
</div>
</template>

<script>
 export default {
   data () {
     return {
       imgUrl: '/static/images/youhuiquan.png'
       //  imgUrl: '../../../static/images/youhuiquan.png'
     }
   },
   mounted () {

   },
   computed: {},
   methods: {

   },
   components: {}
}
</script>
<style lang="less" scoped>
    .coupons{
        margin-top: 20rpx;
        image{
            width: 100%;
            height: 100rpx;
        }
    }
</style>
