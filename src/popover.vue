<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
      <slot></slot>
    </span>

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
            document.body.appendChild(this.$refs.contentWrapper)
            let {width,height,top,left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left+ window.scrollX + "px";
            this.$refs.contentWrapper.style.top = top + window.scrollY + "px";
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
  .popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
  }
  .content-wrapper{
    position: absolute;
    border: 1px solid red;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    transform: translateY(-100%);
  }

</style>