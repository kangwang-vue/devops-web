<template>
  <div class="tab">
    <ul>
      <li
        v-on:click="change(index)"
        :class="currentIndex == index ? 'active' : ''"
        :key="item.id"
        v-for="(item, index) in list"
      >
        {{ item.title }}
      </li>
    </ul>
    <div
      :class="currentIndex == index ? 'current' : ''"
      :key="item.id"
      v-for="(item, index) in list"
    >
      <img :src="item.path" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0, // 选项卡当前的索引
      list: [
        {
          id: 1,
          title: "apple",
          path: require("../../assets/img/apple.png"),
        },
        {
          id: 2,
          title: "orange",
          path: require("../../assets/img/orange.png"),
        },
        {
          id: 3,
          title: "lemon",
          path: require("../../assets/img/lemon.png"),
        },
      ],
    };
  },
  methods: {
    change: function(index) {
      // 在这里实现选项卡切换操作：本质就是操作类名
      // 如何操作类名？就是通过currentIndex
      this.currentIndex = index;
    },
  },
};
</script>

<style></style>
