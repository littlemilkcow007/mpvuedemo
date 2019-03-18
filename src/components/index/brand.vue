<!--
* @Author:      liyao
* @DateTime:    2019-03-18
* @Description: 品牌馆
-->

 <template>
<div class="brand">
    <!-- 分割线 -->
    <p class="divider"></p>
    <!-- 标题 -->
    <div class="title">
        <div class="content">
           <p>品牌馆</p> 
           <p class="subTitle">Brand Library</p> 
        </div> 
        <p class="greatThan">〉 </p>
    </div>
    <!-- 品牌列表 -->
    <div class="brandList">
        <fastTrackIcon v-for="(item,index) in imagesUrl" :key="index" :imgUrl='item.url' :width='width' :height='height'/>
    </div>
</div>
</template>

<script>
import fastTrackIcon from '@Components/index/fast_track_icon'
export default {
  data () {
    return {
      imagesUrl: [
        {url: '../../../static/images/xingfuxibing.jpg'},
        {url: '../../../static/images/haolilai.png'},
        {url: '../../../static/images/andeluseng.jpg'},
        {url: '../../../static/images/aidale.jpg'}
      ],
      width: '140rpx',
      height: '80rpx'
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
.brand{
    font-size:30rpx;
    //分割线
    .divider{
        background-color: #f8f8f8;
        height: 20rpx;
    }
    //标题
    .title{
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding:60rpx 40rpx;
        box-sizing: border-box;
        position: relative;
        text-align: center;
        //标题内容
        .content{
           .subTitle{
              font-size: 20rpx;
              text-align: center
           }
        }
        //大于符号
        .greatThan{
            align-self: center;
            font-weight: bold;
            color:#908F8D;
            position: absolute;
            right: 10rpx;
            top: 50%;
            transform: translate(0, -50%);
        }       
    }
    //品牌列表
    .brandList{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // padding: 0 10rpx;
    }
}
</style>
