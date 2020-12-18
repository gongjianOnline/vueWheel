<template>
  <div class="wrapper">
    <p>基础布局</p>
    <template>
      <g-row>
        <g-col span="24" class="bg-purple-dark"></g-col>
      </g-row>
    </template>
    <template>
      <g-row>
        <g-col span="12" class="bg-purple-dark"></g-col>
        <g-col span="12" class=" bg-purple-light"></g-col>
      </g-row>
    </template>
    <template>
      <g-row>
        <g-col span="8" class="bg-purple-dark"></g-col>
        <g-col span="8" class=" bg-purple-light"></g-col>
        <g-col span="8" class="bg-purple-dark"></g-col>
      </g-row>
    </template>
    <template>
      <g-row>
        <g-col span="6" class="bg-purple-dark"></g-col>
        <g-col span="6" class=" bg-purple-light"></g-col>
        <g-col span="6" class="bg-purple-dark"></g-col>
        <g-col span="6" class=" bg-purple-light"></g-col>
      </g-row>
    </template>
    <template>
      <g-row>
        <g-col span="4" class="bg-purple-dark"></g-col>
        <g-col span="4" class="bg-purple-light"></g-col>
        <g-col span="4" class="bg-purple-dark"></g-col>
        <g-col span="4" class="bg-purple-light"></g-col>
        <g-col span="4" class="bg-purple-dark"></g-col>
        <g-col span="4" class="bg-purple-light"></g-col>
      </g-row>
    </template>
    <pre><code>{{content}}</code></pre>


    <p>分栏间隔</p>
    <template>
      <g-row gutter="40">
        <g-col span="6" class="bg-purple-dark"></g-col>
        <g-col span="6" class="bg-purple-light"></g-col>
        <g-col span="8" class="bg-purple-dark"></g-col>
      </g-row>
    </template>
    <pre><code>{{content2}}</code></pre>



    <p>混合布局</p>
    <template>
      <g-row gutter="40">
        <g-col span="13" class="bg-purple-dark"></g-col>
        <g-col span="8" class="bg-purple-light"></g-col>
      </g-row>
      <g-row gutter="40">
        <g-col span="8" class="bg-purple-dark"></g-col>
        <g-col span="13" class="bg-purple-light"></g-col>
      </g-row>
    </template>
    <pre><code>{{content3}}</code></pre>


    <p>分栏偏移</p>
    <template>
      <g-row>
        <g-col span="12" offset="2" class="bg-purple-light"></g-col>
      </g-row>
      <g-row>
        <g-col span="12" offset="10" class="bg-purple-light"></g-col>
      </g-row>
    </template>
    <pre><code>{{content4}}</code></pre>

    <p>响应式布局</p>
    <template>
      <g-row>
        <g-col span="24"
               :ipad="{span:8}"
               :narrow-pc="{span:4}"
               :pc="{span:12}"
               :wide-pc="{span:12}"
               class="bg-purple-dark"></g-col>
        <g-col span="24"
               :ipad="{span:16}"
               :narrow-pc="{span:20}"
               :pc="{span:12}"
               :wide-pc="{span:12}"
               class="bg-purple-light"></g-col>
      </g-row>
    </template>
    <pre><code>{{content5}}</code></pre>








  </div>
</template>
<script>
  import Row from "../../../src/row";
  import Col from "../../../src/col"
  export default {
    components:{
      "g-row":Row,
      "g-col":Col
    },
    data(){
      return{
        content:`
          <template>
            <g-row>
              <g-col span="24" class="bg-purple-dark"></g-col>
            </g-row>
          </template>
          <template>
            <g-row>
              <g-col span="12" class="bg-purple-dark"></g-col>
              <g-col span="12" class=" bg-purple-light"></g-col>
            </g-row>
          </template>
          <template>
            <g-row>
              <g-col span="8" class="bg-purple-dark"></g-col>
              <g-col span="8" class=" bg-purple-light"></g-col>
              <g-col span="8" class="bg-purple-dark"></g-col>
            </g-row>
          </template>
          <template>
            <g-row>
              <g-col span="6" class="bg-purple-dark"></g-col>
              <g-col span="6" class=" bg-purple-light"></g-col>
              <g-col span="6" class="bg-purple-dark"></g-col>
              <g-col span="6" class=" bg-purple-light"></g-col>
            </g-row>
          </template>
          <template>
            <g-row>
              <g-col span="4" class="bg-purple-dark"></g-col>
              <g-col span="4" class="bg-purple-light"></g-col>
              <g-col span="4" class="bg-purple-dark"></g-col>
              <g-col span="4" class="bg-purple-light"></g-col>
              <g-col span="4" class="bg-purple-dark"></g-col>
              <g-col span="4" class="bg-purple-light"></g-col>
            </g-row>
          </template>
        `.replace(/\t+| +/g,"").trim(),
        content2:`
          <template>
            <g-row gutter="40">
              <g-col span="6" class="bg-purple-dark"></g-col>
              <g-col span="6" class="bg-purple-light"></g-col>
              <g-col span="8" class="bg-purple-dark"></g-col>
            </g-row>
          </template>
        `.replace(/\t+| +/g,"").trim(),
        content3:`
        <template>
          <g-row gutter="40">
            <g-col span="13" class="bg-purple-dark"></g-col>
            <g-col span="8" class="bg-purple-light"></g-col>
          </g-row>
          <g-row gutter="40">
            <g-col span="8" class="bg-purple-dark"></g-col>
            <g-col span="13" class="bg-purple-light"></g-col>
          </g-row>
        </template>`.replace(/\t+| +/g,"").trim(),
        content4:`<template>
      <g-row>
        <g-col span="12" offset="2" class="bg-purple-light"></g-col>
      </g-row>
      <g-row>
        <g-col span="12" offset="10" class="bg-purple-light"></g-col>
      </g-row>
    </template>`.replace(/\t+| +/g,"").trim(),
        content5:`
        <template>
          <g-row>
            <g-col span="24"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:12}"
                   :wide-pc="{span:12}"
                   class="bg-purple-dark"></g-col>
            <g-col span="24"
                   :ipad="{span:16}"
                   :narrow-pc="{span:20}"
                   :pc="{span:12}"
                   :wide-pc="{span:12}"
                   class="bg-purple-light"></g-col>
          </g-row>
        </template>`.replace(/\t+| +/g,"").trim(),


      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper{
  margin:20px;
}
.wrapper/deep/.row{
  margin-top: 10px;
}
.wrapper/deep/.col-content{
  height: 40px;
}
.bg-purple-dark/deep/.col-content{
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

</style>