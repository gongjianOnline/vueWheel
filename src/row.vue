<template>
  <div class="row"
       :style="rowStyle"
       :class="rowClass">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:"row",
    props:{
      gutter:{
        type:[Number,String]
      },
      align:{
        type:String,
        validator(){
          return ['left','right','center'].includes(value)
        }
      }
    },
    data(){
      return{

      }
    },
    computed:{
      rowStyle(){
        return{
          marginLeft:-this.gutter/2+'px',
          marginRight:-this.gutter/2+'px'
        }
      },
      rowClass(){
        let {align} = this;
        return [align && `align-${align}`]
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
  &.align-left{
    justify-content: flex-start;
  }
  &.align-right{
    justify-content: flex-end;
  }
  &.align-center{
    justify-content: center;
  }
}
</style>