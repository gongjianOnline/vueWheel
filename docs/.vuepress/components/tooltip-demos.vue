<template>
  <div class="wrapper">
    <h3>hover触发</h3>
    <template>
      <g-popover position="top" trigger="hover">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向上的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="bottom" trigger="hover">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向下的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="left" trigger="hover">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向左的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="right" trigger="hover">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向右的提示</g-button>
        </template>
      </g-popover>
    </template>

    <h3>click触发</h3>
    <template>
      <g-popover position="top" trigger="click">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向上的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="bottom" trigger="click">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向下的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="left" trigger="click">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向左的提示</g-button>
        </template>
      </g-popover>
      <g-popover position="right" trigger="click">
        <template slot="content">
          <div>这是提示信息</div>
        </template>
        <template>
          <g-button class="xxx">向右的提示</g-button>
        </template>
      </g-popover>
    </template>

  </div>
</template>
<script>
  import Popover from "../../../src/popover"
  import Button from "../../../src/button"
  export default {
    components:{
      'g-popover':Popover,
      "g-button":Button
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss" scoped>
.wrapper{
  margin-top: 60px;
}
.xxx/deep/.content{
  padding: 0px;
}
</style>