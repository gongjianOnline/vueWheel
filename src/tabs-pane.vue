<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export  default {
  name:"g-tabsPane",
  inject:['eventBus'],
  created(){
    this.eventBus.$on("update:selected",(name)=>{
      console.log(name)
    })
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane{


}
</style>