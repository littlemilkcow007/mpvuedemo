<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 分类名称
-->

 <template>
<div class="classification_name">
    <p :class={name:true,active:true} v-for="(item,index) in classification" :key="index">{{ item.name }}</p>
</div>
</template>

<script>
 export default {
   props: ['classification'],
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
 .classification_name{
   border-right: 1px solid #F2F2F2;
   box-sizing: border-box;
   width: 180rpx;
   height: 100%;
   .name{
     line-height: 100rpx;
     text-align: center;
   }
   .active{
     border-left: 6rpx solid #FF393A;
   }
 }
</style>
