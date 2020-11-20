<template>
  <div class="row" :style="{marginLeft:-gutter/2+'px',marginRight:-gutter/2+'px'}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:"row",
    props:{
      gutter:{
        type:[Number,String]
      }
    },
    data(){
      return{

      }
    },
    created() {

    },
    mounted() {
      this.$children.forEach((vm)=>{
        vm.gutter = this.gutter
      })
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
.row{
  display: flex;
}
</style>