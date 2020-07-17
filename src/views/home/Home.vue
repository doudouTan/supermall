<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control @tabclick="tabClick" :titles="['精选','流行','新款']"></tab-control>
    <goods-list :goods="showCode"></goods-list> 
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/content/tabControl/TabControl";
import GoodsList from '../../components/content/goods/GoodsList'

import { getHomeMultidata, getHomeGoods } from "network/home";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop'
    };
  },
  components: {
    HomeSwiper,
    RecommendView,
    NavBar,
    FeatureView,
    TabControl,
    GoodsList,
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
  },
  computed:{
      showCode(){
        return this.goods[this.currentType].list
      }
  },
  methods: {
   /*  事件监听事件 */
    tabClick(index){
      switch(index){
        case 0:
          this.currentType ='pop'
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
      }
    },


    
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type){
       const page =this.goods[type].page+1
       getHomeGoods(type, 1).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page +1;
    });
    },
  }
};
</script>

<style>
#home {
  padding-top: 42px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
}
</style>