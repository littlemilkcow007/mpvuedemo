<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 分类名称
-->

 <template>
<div class="classification_name">
    <p :class="{name:true,active:currentIndex===index}" v-for="(item,index) in classification" :key="index" @click="changeType(index)">{{ item.name }}</p>
</div>
</template>

<script>
 export default {
   props: ['classification'],
   data () {
     return {
       currentIndex: 0
     }
   },
   mounted () {

   },
   computed: {},
   methods: {
     changeType (index) {
       this.currentIndex = index
       this.$emit('ChangecurrentIndex', this.currentIndex)
     }
   },
   components: {}
}
</script>
<style lang="less" scoped>
 .classification_name{
   width: 180rpx;
   height: 100%;
   .name{
     line-height: 100rpx;
     text-align: center;
     border-left: 4rpx solid #fff;
   }
   .active{
     border-left-color: #FF393A;
     box-sizing: border-box
   }
 }
</style>
