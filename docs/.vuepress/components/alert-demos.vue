<template>
  <div>
    <g-button @click="showToast('从上面的弹窗','top')" class="xxx">向上弹窗</g-button>
    <g-button @click="showToast('从上面的弹窗','middle')" class="xxx">中间弹窗</g-button>
    <g-button @click="showToast('从下面的弹窗','bottom')" class="xxx">向下弹窗</g-button>
  </div>
</template>
<script>
  import Toast  from "../../../src/toast";
  import Button from "../../../src/button";
  import plugin from "../../../src/plugin.js";
  import Vue from "vue";
  Vue.use(plugin)
  export default {
    components:{
      "g-toast":Toast,
      "g-button":Button
    },
    data(){
      return{

      }
    },
    methods:{
      showToast(data,direction){
        this.$toast(data,{
          enableHtml:false,
          position:direction,
          autoClose:2
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .xxx/deep/.content{
    padding: 0px;
  }
</style>