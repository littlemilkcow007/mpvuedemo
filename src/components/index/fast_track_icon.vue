<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 快速通道图标（创意网红、当日达、热卖、全部）
-->

 <template>
<div class="fast_track_icon">
    <image :src='imgUrl' :style="{width,height}"/>
    <p v-if="name" class="name">{{ name }}</p>
</div>
</template>

<script>
 export default {
   props: ['imgUrl', 'name', 'width', 'height'],
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
    .fast_track_icon{
      display: flex;
      flex-direction: column;
      padding: 20rpx;
      text-align: center;
      image{
        align-self: center;
      }
      .name{
        font-size: 30rpx;
        text-align: center
      }
    }
</style>
