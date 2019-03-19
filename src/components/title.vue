<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 标题
-->

 <template>
<div class="title">
    <p>{{ title }}</p>
    <p class="subTitle">{{ subTitle }}</p>
</div>
</template>

<script>
 export default {
   props: ['title', 'subTitle'],
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
        margin-top: 40rpx;
        margin-bottom:20rpx;
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
