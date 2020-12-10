<template>
  <div class="wrapper" @click="xxx">
    <slot name="content" v-if="visible"></slot>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:'g-popover',
    data(){
      return{
        visible:false
      }
    },
    props:{

    },
    created() {
    },
    mounted() {
    },
    computed:{

    },
    watch:{

    },
    methods:{
      xxx(){
        console.log("1")
        console.log(this.visible)
        this.visible = !this.visible
      }
    },
    destroyed() {
    }

  }
</script>
<style lang="scss" scoped>
  .wrapper{
    display: inline-block;
    vertical-align: top;
  }

</style>