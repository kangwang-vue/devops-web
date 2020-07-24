import router from '../../router';
<template>
  <div class="modeleD">
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
      this.$store.dispatch("moduleD/increment", { name: "老母鸡" });
    },
    joinxxxx() {
      this.$store.dispatch("moduleD/join");
    },
    clear() {
      this.$store.dispatch("moduleD/clear");
    },
    reverse() {
      this.$store.dispatch("moduleD/reverse");
    },
    forEach() {
      this.$store.dispatch("moduleD/forEach");
    },
    find() {
      this.$store.dispatch("moduleD/find");
    },
    concat() {
      this.$store.dispatch("moduleD/concat");
    },
    sort() {
      this.$store.dispatch("moduleD/sort");
    },
  },
  computed: {
    count() {
      debugger;
      return this.$store.getters["moduleD/add"];
    },
    count2() {
      return this.$store.state.moduleD.count;
    },
  },
};
</script>
