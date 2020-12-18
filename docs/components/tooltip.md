# Tooltip 文字提示


<ClientOnly>
<tooltip-demos></tooltip-demos>
</ClientOnly>

```vue
<template>
    <g-popover position="top" trigger="click">
      <template slot="content">
        <div>这是提示信息</div>
      </template>
      <template>
        <g-button class="xxx">向上的提示</g-button>
      </template>
    </g-popover>
</template>
```
**事件说明**
|参数|说明|类型|可选值|默认值|
|---|---|---|---|---|
|trigger|触发事件切换|String|'click' 'hover'|-|
|position|显示方向|String|'top' 'bottom' 'left' 'right'|-|







