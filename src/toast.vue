<template>
  <div class="toast">
    <slot></slot>
    <div class="line"></div>
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
            callback:(toast)=>{
              toast.close()
            }
          }
        }
      }
    },
    computed:{

    },
    created() {
    },
    mounted() {
      if(this.autoClose){
        setTimeout(()=>{
          this.close()
        },this.autoCLoseDelay*1000)
      }
    },
    methods:{
      close(){
        this.$el.remove();
        this.$destroy();
      },
      onClickClose(){
        this.close()
        this.closeButton.callback()
      }
    }
  }
</script>
<style lang="scss" scoped>
  $font-size:14px;
  $toast-height:40px;
  $toast-background:black;
.toast{
  position: fixed;
  top:0;
  left: 50%;
  transform: translate(-50%);
  font-size: $font-size;
  line-height: 1.8;
  height: $toast-height;
  display: flex;
  justify-items: center;
  align-items: center;
  background: $toast-background;
  box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
  border-radius: 4px;
  color: white;
  padding: 0 16px;
}
.close{
  padding-left: 16px;
}
.line{
  border: 1px solid #666;
  height: 100%;
  margin-left: 16px;
}

</style>