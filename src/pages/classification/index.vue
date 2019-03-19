<template>
  <div class="index">
    <!-- 当前位置定位+搜索 -->
    <addressSearch />
    <div class="classificationBox">
      <!-- 分类名称 -->
      <classificationName :classification='classification' />
      <!-- 分类商品 -->
      <div class="classificationList" v-for="(item,index) in classification" :key="index">
        <classification :classificationItem='item' v-if='currentIndex===index'/>
      </div>
    </div>
  </div>
</template>

<script>
import addressSearch from '@Components/address_search'
import classificationName from '@Components/classification/classification_name'
import classification from '@Components/classification/classification'
export default {
  data () {
    return {
      currentIndex: 0,
      classification: [
        {cId: 0, name: '人气推荐'},
        {cId: 1, name: '按品牌'},
        {cId: 2, name: '按口味'},
        {cId: 3, name: '按人群'}
      ]
    }
  },
  computed: {
  },
  methods: {

  },
  components: {
    addressSearch,
    classificationName,
    classification
  }
}
</script>

<style lang="less" scoped>
  .index{
    font-size: 30rpx;
    .classificationBox{
      display: flex;
      flex-direction: row;
      border-top: 1px solid #F2F2F2;
      .classificationList{
        display: flex;
        justify-content: center
      }
    }
  }
</style>

