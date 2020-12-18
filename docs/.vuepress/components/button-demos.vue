<template>
  <div>
    <g-button class="xxx">默认按钮</g-button>
    <g-button icon="i-settings" class="xxx">设置</g-button>
    <g-button :loading="true" class="xxx">等待</g-button>
    <g-button disabled class="xxx">禁用</g-button>
    <pre><code>{{content}}</code></pre>
    <p>分页器</p>
    <g-button-group>
      <g-button icon="i-left" class="xxx">上一页</g-button>
      <g-button class="xxx">更多</g-button>
      <g-button icon="i-right" icon-position="right" class="xxx">下一页</g-button>
    </g-button-group>
    <pre><code>{{content2}}</code></pre>
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
        `.replace(/\t+| +/g,"").trim(),
        content2:`
        <g-button-group>
          <g-button icon="i-left" class="xxx">上一页</g-button>
          <g-button class="xxx">更多</g-button>
          <g-button icon="i-right" icon-position="right" class="xxx">下一页</g-button>
        </g-button-group>
        `.replace(/\t+| +/g,"").trim()
      }
    },
  }
</script>
<style lang="scss" scoped>
.xxx/deep/.content{
   padding: 0px;
 }
</style>
