<template>
  <div class="col"
       :class="colClass"
        :style="colStyle">
    <slot></slot>
  </div>
</template>
<script>
  export  default {
    name:"g-col",
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      }
    },
    data(){
      return{
        gutter:0
      }
    },
    computed:{
      colClass(){
        return [this.span &&`col-${this.span}`,this.offset && `offset-${this.offset}`]
      },
      colStyle(){
        return{
          paddingLeft:this.gutter/2+'px',
          paddingRight:this.gutter/2+'px'
        }
      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  .col{
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n /24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-right: ($n /24) * 100%;
      }
    }

  }




</style>