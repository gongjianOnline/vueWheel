<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line"></div>
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
    this.eventBus.$on("update:selected",(item,vm)=>{
      console.log(item)
      console.log(vm.$el)
    })
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
$tab-height:40px;
$blue:blue;
.tabs-header{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  border: 1px solid red;
  position: relative;
  > .actions-wrapper{
    margin-left: auto;
  }
  > .line{
    position: absolute;
    bottom: 0;
    border-bottom:1px solid $blue;
    width: 100px;
  }
}
</style>