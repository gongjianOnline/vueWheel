<template>
  <div>
    <g-button class="xxx">默认按钮</g-button>
    <g-button icon="i-settings" class="xxx">设置</g-button>
  </div>
</template>
<script>
  import Button from "../../../src/button"
  export default {
    components:{
      'g-button':Button
    },
    data () {
      return{
        test:'11'
      }
    },



  }
</script>
<style lang="scss" scoped>
.xxx/deep/.content{
   padding: 0px;
 }
</style>
