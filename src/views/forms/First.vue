<template>
  <div>
    <h3>{{add}}</h3>
    <h3>{{counted}}</h3>
     <button @click="increment">点击</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex';
export default {
   data() {
    return {};
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
  },
  computed:{
    ...mapGetters(['add']),
    
    coumted(){
      return this.$store.getters.add
    }
  },
}
</script>

<style>

</style>