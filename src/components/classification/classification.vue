<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 分类商品
-->

 <template>
<div class="classification">
    <!-- 分类 -->
    <title :title="title"/>
    <!-- 商品列表 -->
    <div class="goodsList">

    </div>
</div>
</template>

<script>
import title from '@Components/title'
export default {
  props: ['classificationItem'],
  data () {
    return {
      title: `——${this.classificationItem.name}——`
    }
  },
  mounted () {

  },
  computed: {},
  methods: {

  },
  components: {
    title
  }
}
</script>
<style lang="less" scoped>
    .classification{
      color: #C4C4C4;
      text-align: center;
      flex: 1
    }
</style>
