<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
     <home-swiper :banners="banners"></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <ul>
       <li>101</li>
       <li>102</li>
       <li>103</li>
       <li>104</li>
       <li>105</li>
       <li>106</li>
       <li>107</li>
       <li>108</li>
       <li>109</li>
       <li>1010</li>
       <li>1011</li>
       <li>1012</li>
       <li>1013</li>
       <li>1014</li>
       <li>1015</li>
       <li>1016</li>
       <li>1017</li>
       <li>1018</li>
       <li>1019</li>
       <li>1020</li>
       <li>1021</li>
       <li>1022</li>
       <li>1023</li>
       <li>1024</li>
       <li>1025</li>
       <li>1026</li>
       <li>1027</li>
       <li>1028</li>
       <li>1029</li>
       <li>1030</li>
       <li>1031</li>
       <li>1032</li>
       <li>1033</li>
       <li>1034</li>
       <li>1035</li>
       <li>1036</li>
       <li>1037</li>
       <li>1038</li>
       <li>1039</li>
       <li>1040</li>
       <li>1041</li>
       <li>1042</li>
       <li>1043</li>
       <li>1044</li>
       <li>1045</li>
       <li>1046</li>
       <li>1047</li>
       <li>1048</li>
       <li>1049</li>
       <li>1050</li>
       <li>1051</li>
       <li>1052</li>
       <li>1053</li>
       <li>1054</li>
       <li>1055</li>
       <li>1056</li>
       <li>1057</li>
       <li>1058</li>
       <li>1059</li>
       <li>1060</li>
       <li>1061</li>
       <li>1062</li>
       <li>1063</li>
       <li>1064</li>
       <li>1065</li>
       <li>1066</li>
       <li>1067</li>
       <li>1068</li>
       <li>1069</li>
       <li>1070</li>
       <li>1071</li>
       <li>1072</li>
       <li>1073</li>
       <li>1074</li>
       <li>1075</li>
       <li>1076</li>
       <li>1077</li>
       <li>1078</li>
       <li>1079</li>
       <li>1080</li>
       <li>1081</li>
       <li>1082</li>
       <li>1083</li>
       <li>1084</li>
       <li>1085</li>
       <li>1086</li>
       <li>1087</li>
       <li>1088</li>
       <li>1089</li>
       <li>1090</li>
       <li>1091</li>
       <li>1092</li>
       <li>1093</li>
       <li>1094</li>
       <li>1095</li>
       <li>1096</li>
       <li>1097</li>
       <li>1098</li>
       <li>1099</li>
       <li>10100</li>
     </ul>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

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
    RecommendView,
    FeatureView
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
#home{
  padding-top:42px;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
  position:fixed;
  z-index: 9;
  top:0;
  left:0;
  right:0;
}
</style>