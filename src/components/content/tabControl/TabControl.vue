<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      @click="itemClick(index)"
      v-for="(item,index) in titles"
      :class="{active:index === currentIndex}"
      :key="index"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabclick',index)
    }
  }
};
</script>

<style>
.tab-control {
  text-align: center;
  display: flex;
  font-size: 15px;
}
.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tab-control span {
  padding: 5px;
}
.active {
  color: #ff8198;
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
.tab-control {
  position: sticky;
  top: 44px;
  background-color: aliceblue;
}
</style>