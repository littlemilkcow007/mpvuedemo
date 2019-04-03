<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 热卖精选
-->

 <template>
<div class="selected_sell">
    <title :title="title"/>
    <div class="goodsBox">
        <div class="goodsList" v-for="(item,index) in goodsList" :key="index">
            <goods :goodsItem='item'/>
        </div>
    </div>
</div>
</template>

<script>
import title from '@Components/title'
import goods from '@Components/goods'
export default {
  data () {
    return {
      title: '-热卖精选-',
      goodsList: [
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        {url: '/static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'}
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'},
        // {url: '../../../static/images/goods.jpg', name: '莱茵河莓妖精Blue', brandName: '诺心LEcake', price: '288'}
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
    goods
  }
}
</script>
<style lang="less" scoped>
    .selected_sell{
        .goodsBox{
            display: flex;
            flex-flow: row wrap;
            align-content: flex-start;
            justify-content: space-around;
            // width: 100%;
            .goodsList{
                flex: 0 0 48%;
                height: 400rpx;
                margin: 20rpx 0;
            }
        }
    }
</style>
