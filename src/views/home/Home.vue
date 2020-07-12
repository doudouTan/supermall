<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(this.banners);
    });
  }
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>