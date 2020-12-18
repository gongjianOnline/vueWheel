<template>
  <div>
    <g-button class="xxx">默认按钮</g-button>
    <g-button icon="i-settings" class="xxx">设置</g-button>
    <g-button :loading="true" class="xxx">设置</g-button>
    <g-button disabled class="xxx">设置</g-button>
    <pre>
      <code>{{content}}</code>
    </pre>
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
        content:`
          <g-button>默认按钮</g-button>
          <g-button icon="i-settings">设置</g-button>
          <g-button :loading="true">设置</g-button>
          <g-button disabled>设置</g-button>
        `
      }
    },



  }
</script>
<style lang="scss" scoped>
.xxx/deep/.content{
   padding: 0px;
 }
</style>
