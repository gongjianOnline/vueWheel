<template>
  <div class="col"
       :class="colClass"
        :style="colStyle">
    <div class="col-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  let validator = (value)=>{
    let keys = Object.keys(value);
    let valid = true;
    keys.forEach((key)=>{
      if(!['span','offset'].includes(value)){
        valid = false
      }
    })
    return valid
  }
  export  default {
    name:"g-col",
    props:{
      span:{
        type:[Number,String]
      },
      offset:{
        type:[Number,String]
      },
      ipad:{type:Object, validator,},
      narrowPc:{type:Object, validator,},
      pc:{type:Object, validator,},
      widePc:{type:Object, validator,},

    },
    data(){
      return{
        gutter:0
      }
    },
    computed:{
      colClass(){
        let {span,offset,ipad,narrowPc,pc,widePc} = this;
        return [
          span && `col-${span}`,
          offset && `offset-${offset}`,
          ... (ipad ? [`col-ipad-${ipad.span}`] : []),
          ... (narrowPc ? [`col-narrowPc-${narrowPc.span}`] : []),
          ... (pc ? [`col-pc-${pc.span}`] : []),
          ... (widePc ? [`col-wide-pc-${widePc.span}`] : [])
        ]
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

    width: 50%;
    //border: 1px solid red;
    //padding: 0 10px;
    $class-prefix: col-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n /24) * 100%;
      }
    }
    $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n /24) * 100%;
      }
    }
    @media (min-width: 577px){
      $class-prefix: col-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n /24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n /24) * 100%;
        }
      }
    }
    @media (min-width: 769px) {
      $class-prefix: col-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n /24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n /24) * 100%;
        }
      }
    }
    @media (min-width: 993px){
      $class-prefix: col-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n /24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n /24) * 100%;
        }
      }
    }
    @media (min-width: 1201px){
      $class-prefix: col-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n /24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n /24) * 100%;
        }
      }
    }










  }







</style>