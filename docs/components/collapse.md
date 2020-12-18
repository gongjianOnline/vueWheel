# Collapse 折叠面板

<ClientOnly>
<collapse-demos></collapse-demos>
</ClientOnly>

```vue
<template>
    <div>
      <g-collapse single :selected.sync="selectedTabs">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
    </div>
</template>
<script>
export default{
    data(){
        return{
            selectedTabs:'1'
        }
    }
}
</script>
```

