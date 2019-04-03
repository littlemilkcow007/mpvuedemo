<!--
* @Author:      liyao
* @DateTime:    2019-03-19
* @Description: 商品
-->

 <template>
<div class="goods">
    <p class="imageBox">
      <image class="image" :src='goodsItem.url'/>
    </p>
    <p class="nameBox">{{ goodsItem.name }}</p>
    <p>{{ goodsItem.brandName }}</p>
    <p class="price">￥ {{ goodsItem.price }}</p>
</div>
</template>

<script>
 export default {
   props: ['goodsItem'],
   data () {
     return {
       goods: []
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
<style lang="less">
  .goods{
    font-size: 24rpx;
    display: flex;
    flex-direction: column;
    justify-content: center;
      p{
        text-align: center
      }
      .imageBox{
        box-sizing: border-box;
        border: 1px solid #F2F2F2;
        padding: 4rpx;
        .image{
          width: 100%;
          height: 300rpx;
          border: 1px solid #F2F2F2;
          box-sizing: border-box;
        }
      }
      .nameBox{
        margin-top: 10rpx;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .price{
        color:#E84A3F
      }
  }
</style>
