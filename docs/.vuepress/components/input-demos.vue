<template>
  <div>
    <g-input value="禁用输入框" disabled></g-input>
    <g-input value="只读输入框" readonly></g-input>
    <pre><code>{{content}}</code></pre>
    <g-input value="普通输入框"></g-input>
    <g-input v-model="message"></g-input>{{message}}
    <pre><code>{{content2}}</code></pre>
    <p>验证表单</p>
    <g-input value="王五" error="不能少于两个字"></g-input>
    <pre><code>{{content3}}</code></pre>
  </div>
</template>
<script>
  import Input from "../../../src/input"
  export default {
    components:{
      'g-input':Input
    },
    data(){
      return{
        message:"双向数据绑定",
        content:`
          <template>
            <g-input value="禁用输入框" disabled></g-input>
            <g-input value="只读输入框" readonly></g-input>
          </template>
          `.replace(/\t+| +/g,"").trim(),
        content2:`
          <template>
            <g-input value="普通输入框"></g-input>
            <g-input v-model="message"></g-input>
          </template>
          `.replace(/\t+| +/g,"").trim(),
        content3:`
          <g-input value="王五" error="不能少于两个字"></g-input>
        `.replace(/\t+| +/g,"").trim()
      }
    }
  }
</script>
<style lang="scss" scoped>

</style>