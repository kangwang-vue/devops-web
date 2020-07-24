import router from '../../router';

<template>
  <div class="test">
    {{ count }}
    {{ count2 }}
    <button @click="increment">点击</button>
    <button @click="joinxxxx">点击xx</button>
    <button @click="clear">还原</button>
    <button @click="reverse">翻转</button>
    <button @click="forEach">循环</button>
    <button @click="find">查找</button>
    <button @click="concat">拼接</button>
    <button @click="sort">排序</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", { name: "老母鸡" });
    },
    joinxxxx() {
      this.$store.dispatch("join");
    },
    clear() {
      this.$store.dispatch("clear");
    },
    reverse() {
      this.$store.dispatch("reverse");
    },
    forEach() {
      this.$store.dispatch("forEach");
    },
    find() {
      this.$store.dispatch("find");
    },
    concat() {
      this.$store.dispatch("concat");
    },
    sort() {
      this.$store.dispatch("sort");
    },
  },
  computed: {
    count() {
      return this.$store.getters.add;
    },
    count2() {
      return this.$store.state.count;
    },
  },
};
</script>
