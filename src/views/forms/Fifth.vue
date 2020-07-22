<template>
  <div>
    <div>{{ getMessage }}</div>
    <a-button @click="changeName()">改名</a-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "kangkang",
      age: 21,
    };
  },
  methods: {
    changeName() {
      this.name = "wanglinlin";
    },
  },
  computed: {
    // getMessage: {
    //   get: function() {
    //     return `我的名字${this.name}，我的年龄${this.age}`;
    //   },
    //   set: function() {
    //     debugger;
    //     console.log(123); //  set操作
    //   },
    // },
    getMessage: function() {
      return `我的名字${this.name}，我的年龄${this.age}`;
    },
  },
};
</script>

<style></style>
