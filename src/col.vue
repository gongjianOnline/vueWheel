<template>
  <div class="col" :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>
<script>
  export  default {
    name:"g-col",
    props:{
      span:{
        type:[Number,String]
      }
    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  .col{
    height: 100px;
    width: 50%;
    background: gray;
    border: 1px solid red;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n /24) * 100%;
      }
    }
  }




</style>