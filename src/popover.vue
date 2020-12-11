<template>
  <div class="wrapper" @click.stop="xxx">
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
        this.visible = !this.visible;
        console.log("切换了visible")
        if(this.visible === true){
          this.$nextTick(()=>{
            console.log("新增 document click 监听器")
            let eventHandler = ()=>{
              console.log("点击body就关闭了popover")
              this.visible = false;
              console.log("删除监听器")
              document.removeEventListener("click",eventHandler)
            }
            document.addEventListener('click',eventHandler)
          })
        }
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