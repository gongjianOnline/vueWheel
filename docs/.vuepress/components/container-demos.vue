<template>
  <div>
    <p>常见页面布局A</p>
    <template>
      <g-layout style="height: 300px">
        <g-sider class="demo">sider</g-sider>
        <g-layout>
          <g-header class="demo">header</g-header>
          <g-content class="demo">content</g-content>
          <g-footer class="demo">footer</g-footer>
        </g-layout>
      </g-layout>
    </template>
    <pre><code>{{content}}</code></pre>

    <p>常见页面布局B</p>
    <template>
      <g-layout style="height: 300px">
        <g-header class="demo">header</g-header>
        <g-layout>
          <g-sider class="demo">sider</g-sider>
          <g-content class="demo">content</g-content>
        </g-layout>
        <g-footer class="demo">footer</g-footer>
      </g-layout>
    </template>
    <pre><code>{{content2}}</code></pre>

    <p>常见页面布局C</p>
    <template>
      <g-layout style="height: 300px">
        <g-header class="demo">header</g-header>
        <g-layout>
          <g-content class="demo">content</g-content>
        </g-layout>
        <g-footer class="demo">footer</g-footer>
      </g-layout>
    </template>
    <pre><code>{{content3}}</code></pre>

    <p>常见页面布局D</p>
    <template>
      <g-layout style="height: 300px">
        <g-header class="demo">header</g-header>
        <g-layout>
          <g-content class="demo">content</g-content>
        </g-layout>
      </g-layout>
    </template>
    <pre><code>{{content4}}</code></pre>


  </div>
</template>

<script>
  import Layout from "../../../src/layout";
  import Sider from "../../../src/sider";
  import Header from "../../../src/header";
  import Content from "../../../src/content";
  import Footer from "../../../src/footer"
  export default {
    components:{
      "g-layout":Layout,
      "g-sider":Sider,
      "g-header":Header,
      "g-content":Content,
      "g-footer":Footer,
    },
    data(){
      return{
        content:`
          <template>
            <g-layout style="height: 300px">
              <g-sider class="demo">sider</g-sider>
              <g-layout>
                <g-header class="demo">header</g-header>
                <g-content class="demo">content</g-content>
                <g-footer class="demo">footer</g-footer>
              </g-layout>
            </g-layout>
          </template>
        `.replace(/\t+| +/g,"").trim(),
        content2:`
          <template>
            <g-layout style="height: 300px">
              <g-header class="demo">header</g-header>
              <g-layout>
                <g-sider class="demo">sider</g-sider>
                <g-content class="demo">content</g-content>
              </g-layout>
              <g-footer class="demo">footer</g-footer>
            </g-layout>
          </template>
        `.replace(/\t+| +/g,"").trim(),
        content3:`
          <template>
            <g-layout style="height: 300px">
              <g-header class="demo">header</g-header>
              <g-layout>
                <g-content class="demo">content</g-content>
              </g-layout>
              <g-footer class="demo">footer</g-footer>
            </g-layout>
          </template>
        `.replace(/\t+| +/g,"").trim(),
        content4:`
          <template>
            <g-layout style="height: 300px">
              <g-header class="demo">header</g-header>
              <g-layout>
                <g-content class="demo">content</g-content>
              </g-layout>
            </g-layout>
          </template>
        `.replace(/\t+| +/g,"").trim(),
      }
    }
  }
</script>
<style lang="scss" scoped>
  .demo{
    /*border: 1px solid red;*/
  }
  .sider{
    background: #333;
    width: 100px;
    color: #fff;
  }
  .header{
    background: #999;
    height: 40px;
  }
  .footer{
    background: #ccc;
    height: 40px;
  }
</style>