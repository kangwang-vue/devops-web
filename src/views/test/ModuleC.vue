import router from '../../router';
<template>
  <div class="modeleC">
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
      this.$store.dispatch("moduleC/increment", { name: "老母鸡" });
    },
    joinxxxx() {
      this.$store.dispatch("moduleC/join");
    },
    clear() {
      this.$store.dispatch("moduleC/clear");
    },
    reverse() {
      this.$store.dispatch("moduleC/reverse");
    },
    forEach() {
      this.$store.dispatch("moduleC/forEach");
    },
    find() {
      this.$store.dispatch("moduleC/find");
    },
    concat() {
      this.$store.dispatch("moduleC/concat");
    },
    sort() {
      this.$store.dispatch("moduleC/sort");
    },
  },
  computed: {
    count() {
      debugger;
      return this.$store.getters["moduleC/add"];
    },
    count2() {
      return this.$store.state.moduleC.count;
    },
  },
};
</script>
