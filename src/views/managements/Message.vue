<template>
  <a-button type="primary" @click="success">Customized display duration</a-button>
</template>
<script>
  export default {
    methods: {
      success() {
        this.$message.success(
          'This is a prompt message for success, and it will disappear in 10 seconds',
          10,
        );
      },
    },
  };
</script>