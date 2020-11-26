<template>
  <div class="toast" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-html="$slots.default" v-else></div>
    </div>
    <div class="line" ref="line"></div>
    <span v-if="closeButton" class="close" @click="onClickClose()">{{closeButton.text}}</span>
  </div>
</template>
<script>
  export  default {
    name:"g-toast",
    data(){
      return{

      }
    },
    props:{
      autoClose:{
        type:Boolean,
        default:true
      },
      autoCLoseDelay:{
        type:Number,
        default:5
      },
      closeButton:{
        type:Object,
        default:()=>{
          return {
            text:"关闭",
            // callback:(toast)=>{
            //   toast.close()
            // }
            callback:undefined
          }
        }
      },
      enableHtml:{
        type:Boolean,
        default:false
      }
    },
    computed:{

    },
    created() {
    },
    mounted() {
      this.execAutoClose();
      this.updateStyle()
    },
    methods:{
      updateStyle(){
        this.$nextTick(()=>{
          this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
        })
      },
      execAutoClose(){
        if(this.autoClose){
          setTimeout(()=>{
            this.close()
          },this.autoCLoseDelay*1000)
        };
      },
      close(){
        this.$el.remove();
        this.$destroy();
      },
      onClickClose(){
        this.close()
        if(this.closeButton  && typeof this.closeButton.callback === "function"){
          this.closeButton.callback()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size:14px;
  $toast-min-height:40px;
  $toast-background:black;
.toast{
  position: fixed;
  top:0;
  left: 50%;
  transform: translate(-50%);
  font-size: $font-size;
  line-height: 1.8;
  min-height: $toast-min-height;
  display: flex;
  justify-items: center;
  align-items: center;
  background: $toast-background;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
  border-radius: 4px;
  color: white;
  padding: 0 16px;
  .message{
    padding: 8px 0;
  }
  .close{
    padding-left: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
  .line{
    border: 1px solid #666;
    height: 100%;
    margin-left: 16px;
  }
}


</style>