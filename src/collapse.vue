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
      return {
        eventBus: this.eventBus
      }
    },
    props:{
      single:{
        type:Boolean,
        default:false
      },
      selected:{
        type:String
      }
    },
    computed:{

    },
    created() {

    },
    mounted() {
      this.eventBus.$emit('update:selected',this.selected)
      this.eventBus.$on('update:selected',(name)=>{
        this.$emit('update:selected',name)
      })

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