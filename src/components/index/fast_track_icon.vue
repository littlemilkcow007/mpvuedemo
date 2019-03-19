<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 快速通道图标（创意网红、当日达、热卖、全部）
-->

 <template>
<div class="fast_track_icon">
    <image :src='imgUrl' :style="{width,height}"/>
    <p v-if="name" class="name">{{ name }}</p>
    <div v-if="title" class="title">
      <p class='content'>{{ title }}</p>
      <p class='subtitle'>{{ subtitle }}</p>
    </div>
</div>
</template>

<script>
 export default {
   props: ['imgUrl', 'name', 'width', 'height', 'title', 'subtitle'],
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
      text-align: center;
      position: relative;
      image{
        align-self: center;
      }
      .name{
        font-size: 30rpx;
        text-align: center
      }
      //主题
      .title{
        position: absolute;
        right: 20rpx;
        top: 10rpx;
        font-size:24rpx;
        color:#464646;
        // font-weight:bold;
        .content{
          text-align:right
        }
        .subtitle{
          text-align:left
        }
      }
    }
</style>
