<template>
  <div>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="woman" disabled>教育</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">美女相关资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>
<script>
  import Tabs from "../../../src/tabs";
  import TabsHead from "../../../src/tabs-head"
  import TabsBody from "../../../src/tabs-body"
  import TabsPane from "../../../src/tabs-pane"
  import TabsItem from "../../../src/tabs-item"
  export default {
    components:{
      "g-tabs":Tabs,
      "g-tabs-head":TabsHead,
      "g-tabs-body":TabsBody,
      "g-tabs-pane":TabsPane,
      "g-tabs-item":TabsItem,
    },
    data(){
      return{
        selectedTab:"sports",
      }
    },
    methods:{

    }
  }
</script>
<style lang="scss">

</style>
