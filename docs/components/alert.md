# Alert 警告


<ClientOnly>
<alert-demos></alert-demos>
</ClientOnly>

```vue
<template>
  <div>
    <g-button @click="showToast('从上面的弹窗','top')" class="xxx">向上弹窗</g-button>
    <g-button @click="showToast('从上面的弹窗','middle')" class="xxx">中间弹窗</g-button>
    <g-button @click="showToast('从下面的弹窗','bottom')" class="xxx">向下弹窗</g-button>
  </div>
</template>
<script >
export default{
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
```

**事件描述**

|  参数   | 说明  | 类型 | 可选值 | 默认值|
|  ----  | ----  |  ----  | ----  |  ----  |
| enableHtml  | 是否注入HTML | boolean  | -  |  false  |
| position  | 弹出的方向 |String  | 'top' 'middle' 'bottom'  |  top  |
| autoClose  | 弹出的时间(秒) |Number  | -  |  -  |





