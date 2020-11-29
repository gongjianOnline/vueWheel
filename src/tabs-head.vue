<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>
<script>
export  default {
  name:"g-tabsHeader",
  inject:["eventBus"],
  created() {
    console.log("123456")
    console.log(this.eventBus)
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
$tab-height:40px;
.tabs-header{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid red;
  >.actions-wrapper{
    margin-left: auto;
  }
}
</style>