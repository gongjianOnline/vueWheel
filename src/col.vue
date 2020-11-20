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
      },
      phone:{
        type:Object,
        validator(value){
          let keys = Object.keys(value)
          let invalid = true;
          keys.forEach((key)=>{
            if(!['span','offset'].includes(key)){
              invalid = false
            }
          })
          return invalid
        }
      },
      iPad:{
        type:Object,
        validator(value){
          let keys = Object.keys(value)
          let invalid = true;
          keys.forEach((key)=>{
            if(!['span','offset'].includes(key)){
              invalid = false
            }
          })
          return invalid
        }
      },
      narrowPc:{
        type:Object,
        validator(value){
          let keys = Object.keys(value)
          let invalid = true;
          keys.forEach((key)=>{
            if(!['span','offset'].includes(key)){
              invalid = false
            }
          })
          return invalid
        }
      },
      pc:{
        type:Object,
        validator(value){
          let keys = Object.keys(value)
          let invalid = true;
          keys.forEach((key)=>{
            if(!['span','offset'].includes(key)){
              invalid = false
            }
          })
          return invalid
        }
      },
      widePc:{
        type:Object,
        validator(value){
          let keys = Object.keys(value)
          let invalid = true;
          keys.forEach((key)=>{
            if(!['span','offset'].includes(key)){
              invalid = false
            }
          })
          return invalid
        }
      }

    },
    data(){
      return{
        gutter:0
      }
    },
    computed:{
      colClass(){
        let {span,offset,phone} = this;
        let phoneClass = [];
        return [
          this.span &&`col-${this.span}`,
          this.offset && `offset-${this.offset}`,
          ... (phoneClass && [`col-phone-${phone.span}`])
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

    @media (max-width: 576px){
      $class-prefix: tol-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-phone-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media ((min-width: 577px) and (max-width: 768px)){
      $class-prefix: tol-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-ipad-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media ((min-width: 769px) and (max-width: 992px)){
      $class-prefix: tol-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-narrow-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media ((min-width: 993px) and (max-width: 1200px)){
      $class-prefix: tol-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }
    @media (min-width: 1201px){
      $class-prefix: tol-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          width: ($n / 24) * 100%;
        }
      }
      $class-prefix: offset-wide-pc-;
      @for $n from 1 through 24 {
        &.#{$class-prefix}#{$n} {
          margin-left: ($n / 24) * 100%;
        }
      }
    }


  }







</style>