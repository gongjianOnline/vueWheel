<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>


</template>
<script>
export  default {
  name:"g-layout",
  data(){
    return{
      layoutClass:{
        hasSider:false
      }
    }
  },
  props:{

  },
  created() {
  },
  mounted() {
    this.$children.forEach((vm)=>{
      console.log(vm.$options.name);
      if(vm.$options.name === "g-sider"){
        this.layoutClass.hasSider = true
      }
    })
  },
  methods:{

  },
}

</script>
<style lang="scss" scoped>
.layout{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  border: 1px solid red;
  &.hasSider{
    flex-direction: row;
  }
}
</style>