<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name:"g-collapse",
    data(){
      return{
        eventBus:new Vue()
      }
    },
    provide(){
      if(this.single){
        return{
          eventBus:this.eventBus
        }
      }
    },
    props:{
      single:{
        type:Boolean,
        default:false
      }
    },
    computed:{

    },
    created() {

    },
    mounted() {

    },
    methods:{

    },
    destroyed() {

    }
  }
</script>
<style lang="scss" scoped>
  $grey:#ddd;
  $border-radius:4px;
  .collapse{
    border: 1px solid $grey;
    border-radius: $border-radius;
    /*border-bottom: none;*/
  }
</style>