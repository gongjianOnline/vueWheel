<template>
  <div class="tabs-pane" :class="classes" v-show="active">
    <slot></slot>
  </div>
</template>
<script>
export  default {
  name:"g-tabsPane",
  inject:['eventBus'],
  props:{
    name:{
      type:String|Number,
      required:true
    }
  },
  computed:{
    classes(){
      return {
        active:this.active
      }
    }
  },
  created(){
    this.eventBus.$on("update:selected",(name)=>{
      this.active = name === this.name;
    })
  },
  data(){
    return{
      active:false
    }
  }
}
</script>
<style lang="scss" scoped>
.tabs-pane{
  &.active{
    background: red;
  }

}
</style>