<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>
    
<style>
   .goods{
       display: flex;
       flex-wrap: wrap;
       overflow: hidden;
       justify-content: space-evenly;
       padding-bottom: 60px;
   }
</style>