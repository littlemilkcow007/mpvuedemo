<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 人群推荐
-->

 <template>
<div class="crowd_recommended">
    <title :title="title" :subTitle='subTitle'/>
    <div class="fastTrack">
      <div class='fastTrack1'>
        <fastTrackIcon v-for="(item,index) in imagesUrl1" :key="index" :imgUrl='item.url' :width='item.width' :height='item.height' :title='item.title' :subtitle='item.subtitle'/>
      </div>
      <div class="fastTrack2">
        <fastTrackIcon v-for="(item,index) in imagesUrl2" :key="index" :imgUrl='item.url' :width='item.width' :height='item.height' :title='item.title' :subtitle='item.subtitle'/>      
      </div>
    </div>
</div>
</template>

<script>
import title from '@Components/title'
import fastTrackIcon from '@Components/index/fast_track_icon'
export default {
  data () {
    return {
      imagesUrl1: [
        {url: '/static/images/cake1.jpg', title: '送爱人', subtitle: 'Beloved ones', width: '100%', height: '340rpx'}
        // {url: '../../../static/images/cake1.jpg', title: '送爱人', subtitle: 'Beloved ones', width: '100%', height: '340rpx'}
      ],
      imagesUrl2: [
        {url: '/static/images/cake2.jpg', title: '送长辈', subtitle: 'The elderly', width: '100%', height: '170rpx'},
        {url: '/static/images/cake3.jpg', title: '送小朋友', subtitle: 'For kids', width: '100%', height: '170rpx'}
        // {url: '../../../static/images/cake2.jpg', title: '送长辈', subtitle: 'The elderly', width: '100%', height: '170rpx'},
        // {url: '../../../static/images/cake3.jpg', title: '送小朋友', subtitle: 'For kids', width: '100%', height: '170rpx'}
      ],
      title: '人群推荐',
      subTitle: 'Target Recommended'
    }
  },
  mounted () {

  },
  computed: {},
  methods: {

  },
  components: {
    title,
    fastTrackIcon
  }
}
</script>
<style lang="less" scoped>
    .crowd_recommended{
      .fastTrack{
        display: flex;
        flex-direction: row;
        //快速通道1
        .fastTrack1{
          width: 50%;
          margin-right: 4rpx;
        }
        //快速通道2
        .fastTrack2{
          width: 50%;
          display: flex;
          flex-direction: column;         
          .fastTrackIcon{
            margin-bottom: 4rpx;
          }
        }
      }
    }
</style>