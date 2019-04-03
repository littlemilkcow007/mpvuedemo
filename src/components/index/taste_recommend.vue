<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 口味推荐
-->

 <template>
<div class="taste_recommend">
    <title :title="title" :subTitle='subTitle'/>
    <div class="type">
      <div class="typeChild" v-for="(item,index) in imagesUrl" :key="index">
        <fastTrackIcon :imgUrl='item.url' :width='item.width' :height='item.height'/>
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
      title: '口味推荐',
      subTitle: 'Flavor Recommended',
      imagesUrl: [
        {url: '/static/images/ruzhi.png', width: '100%', height: '240rpx'},
        {url: '/static/images/musi.png', width: '100%', height: '240rpx'},
        {url: '/static/images/shuiguo.png', width: '100%', height: '240rpx'},
        {url: '/static/images/pinda.png', width: '100%', height: '240rpx'},
        {url: '/static/images/zhishi.png', width: '100%', height: '240rpx'},
        {url: '/static/images/qiaokeli.png', width: '100%', height: '240rpx'},
        {url: '/static/images/binqilin.png', width: '100%', height: '240rpx'},
        {url: '/static/images/napolun.png', width: '100%', height: '240rpx'},
        {url: '/static/images/ganguo.png', width: '100%', height: '240rpx'}
      ]
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
    .taste_recommend{
        .type{
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          width:100%;
          .typeChild{
             flex: 0 0 calc(100%/3);
             border: 1px solid #F2F2F2;
             border-right: none;
             border-bottom: none;
             box-sizing: border-box;
             &:nth-of-type(3),&:nth-of-type(6),&:nth-of-type(9){
               border-right: 1px solid #F2F2F2
             }
             &:nth-of-type(7),&:nth-of-type(8),&:nth-of-type(9){
               border-bottom: 1px solid #F2F2F2
             }
          }
        }
    }
</style>
