<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 分类商品
-->

 <template>
<div class="classification">
    <scroll-view
      scroll-y
      style="height: 100%"
      bindscrolltoupper="upper"
      bindscrolltolower="lower"
      bindscroll="scroll"
      :scroll-into-view="toView"
      :scroll-top="scrollTop"
    >
      <!-- 分类 -->
      <title :title="title"/>
      <!-- 商品列表 -->
      <div class="goodsBox">
          <div class="goodsList" v-for="(item,index) in goodsList" :key="index">
              <goods :goodsItem='item'/>
          </div>
      </div>
    </scroll-view>
</div>
</template>

<script>
import title from '@Components/title'
import goods from '@Components/goods'
export default {
  props: ['classificationItem'],
  data () {
    return {
      title: `——-${this.classificationItem.name}——-`,
      goodsList: [
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'}
      ],
      toView: 'red',
      scrollTop: 100
    }
  },
  mounted () {
  },
  computed: {},
  methods: {

  },
  components: {
    title,
    goods
  }
}
</script>
<style lang="less">
    .classification{
      color: #C4C4C4;
      text-align: center;
        .title{
          margin-top: 20rpx;
          margin-bottom: 0;
        }
        .goodsBox{
          display: flex;
          flex-flow: row wrap;
          align-content: flex-start;
          justify-content: space-around;
          .goodsList{
              flex: 0 0 48%;
              height: 100%;
              margin: 20rpx 0;
              image{
                height: 240rpx !important;
              }
          }
        }
    }
</style>
