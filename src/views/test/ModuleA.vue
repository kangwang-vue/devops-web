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
      this.$store.dispatch("moduleA/increment", { name: "老母鸡" });
    },
    joinxxxx() {
      this.$store.dispatch("moduleA/join");
    },
    clear() {
      this.$store.dispatch("moduleA/clear");
    },
    reverse() {
      this.$store.dispatch("moduleA/reverse");
    },
    forEach() {
      this.$store.dispatch("moduleA/forEach");
    },
    find() {
      this.$store.dispatch("moduleA/find");
    },
    concat() {
      this.$store.dispatch("moduleA/concat");
    },
    sort() {
      this.$store.dispatch("moduleA/sort");
    },
  },
  computed: {
    count() {debugger
      return this.$store.getters["moduleA/add"];
    },
    count2() {
      return this.$store.state.moduleA.count;
    },
  },
};
</script>
