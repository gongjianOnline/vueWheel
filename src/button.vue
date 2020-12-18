<template>
  <button class="g-button"
          :class="{[`icon-${iconPosition}`]:true}"
          @click="$emit('click')">
    <g-icon v-if="icon && !loading" :name="icon" class="icon"></g-icon>
    <g-icon name="i-loading" v-if="loading" class="loading icon"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import Icon from "./icon"
  export default {
    components:{
      'g-icon':Icon
    },
    props:{
      icon:{},
      loading:{
        type:Boolean,
        default: false
      },
      iconPosition:{
        type:String,
        default:'left',
        validator(value){
          return value === "left" || value ==="right"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-height: 32px;
  $font-size: 14px;
  $button-bg: #fff;
  $button-active-bg: #eee;
  $border-radius: 4px;
  $color: #333;
  $border-color: #999;
  $border-color-hover: #666;
  @keyframes spin {
    0%{transform: rotate(0deg)}
    100%{transform: rotate(360deg)}
  }
  .g-button {
    font-size: $font-size;
    height: $button-height;
    padding: 0 1em;
    border-radius: $border-radius;
    border: 1px solid $border-color;
    background: $button-bg;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color-hover;
    }

    &:active {
      background: $button-active-bg;
    }

    &:focus {
      outline: none;
    }

    > .icon {
      order: 1;
      margin-left: 0;
      margin-right: .3em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .3rem;
      }

      > .content {
        order: 1;
      }
    }

    .loading{
      animation:spin 2s infinite linear;
    }
  }


</style>