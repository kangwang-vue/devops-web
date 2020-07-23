import router from '../../router';
<template>
  <div class="test">
    {{ name }}
    <button @click="console">点击</button>
  
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    console() {
      this.$store.dispatch("consoleString");
    },
  },
  computed: {
    name() {
      return this.$store.state.moduleB.name;
    },
  
  },
};
</script>
