<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 标题
-->

 <template>
<div class="title">
    <p>人群推荐</p>
    <p class="subTitle">Target Recommended</p>
</div>
</template>

<script>
 export default {
   data () {
     return {

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
    .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10rpx 0;
        margin-top: 20rpx;
        p{
            text-align: center;
            font-size:30rpx;
            //副标题
            &.subTitle{
                font-size: 20rpx;
            }
        }
    }
</style>
