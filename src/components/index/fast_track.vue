<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 快速通道
-->

 <template>
<div class="fast_track">
    <fastTrackIcon v-for="(item,index) in imagesUrl" :key="index" :imgUrl='item.url' :name='item.name' :width='width' :height='height'/>
</div>
</template>

<script>
import fastTrackIcon from '@Components/index/fast_track_icon'
export default {
  data () {
    return {
      imagesUrl: [
        {url: '../../../static/images/creative.png', name: '创意网红'},
        {url: '../../../static/images/theDay.png', name: '当日达'},
        {url: '../../../static/images/hotSell.png', name: '热卖'},
        {url: '../../../static/images/all.png', name: '全部'}
      ],
      width: '60rpx',
      height: '60rpx'
    }
  },
  mounted () {

  },
  computed: {},
  methods: {

  },
  components: {
    fastTrackIcon
  }
}
</script>
<style lang="less" scoped>
.fast_track{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20rpx 40rpx;
}
</style>
