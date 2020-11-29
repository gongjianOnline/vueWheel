<template>
  <div class="tabs-header">
    <slot></slot>
    <slot name="actions"></slot>
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
.tabs-header{


}
</style>