<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBaritem",
  props: {
    link: String
  },
  data() {
    return {
      //isActive: 0
    };
  },
  methods: {
    itemClick() {
      //console.log(this.$route.path);
      this.$router.replace(this.link)
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  margin: 0 auto;
  display: block;
  height: 24px;
  width: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
}
.tab-bar-item {
  font-size: 14px;
}
.active {
  color: red;
}
</style>