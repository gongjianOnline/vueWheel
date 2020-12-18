# Tabs 选项卡


<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

```vue
<template>
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name="woman" disabled>教育</g-tabs-item>
        <g-tabs-item name="finance">财经</g-tabs-item>
        <g-tabs-item name="sports">体育</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="woman">教育相关资讯</g-tabs-pane>
        <g-tabs-pane name="finance">财经相关资讯</g-tabs-pane>
        <g-tabs-pane name="sports">体育相关资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
</template>
<script>
  export default {
    data(){
        return{
            selectedTab:"sports"
        }
    }
  }
</script>
```





