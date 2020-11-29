<template>
  <div class="tabs-header">
    <slot></slot>
    <div class="line" ref="line" ></div>
    <div class="actions-wrapper">
      <slot name="actions" ></slot>
    </div>
  </div>
</template>
<script>
export  default {
  name:"g-tabsHeader",
  inject:["eventBus"],
  mounted() {
    this.eventBus.$on("update:selected",(item,vm)=>{
      let {width,height,top,left} = vm.$el.getBoundingClientRect()
      console.log(width,height,top,left);
      this.$refs.line.style.width = `${width}px`;
      this.$refs.line.style.transform = `translateX(${left-41}px)`
    })
  },
  data(){
    return{
      x:false
    }
  }
}
</script>
<style lang="scss" scoped>
$tab-height:40px;
$blue:blue;
$border-color:#ddd;
.tabs-header{
  display: flex;
  height: $tab-height;
  justify-content: flex-start;
  position: relative;
  border-bottom:1px solid $border-color;
  > .actions-wrapper{
    margin-left: auto;
    display: flex;
    align-items: center;
    padding: 0 1em;
  }
  > .line{
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom:1px solid $blue;
    transition: all 350ms;
  }
}
</style>