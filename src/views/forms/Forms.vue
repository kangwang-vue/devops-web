<template>
    <div>
        <First /><br />
        <Second /><br />
        <Thirdly /><br />
        <Fourthly /><br />
        <Fifth />
    </div>
</template>
<script>
import First from './First';
import Second from './Second';
import Thirdly from './Thirdly';
import Fourthly from './Fourthly';
import Fifth from './Fifth';
export default {
  components:{
      First,
      Second,
      Thirdly,
      Fourthly,
      Fifth,
  }
}
</script>