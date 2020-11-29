<template>
  <div class="tabs-item">
    <slot></slot>
  </div>
</template>
<script>
export  default {
  name:"g-tabsItem",
  props:{
    disabled:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{

    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-item{


}
</style>