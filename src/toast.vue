<template>
  <div class="toast">
    <slot></slot>
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

    },
    computed:{

    },
    created() {
    },
    mounted() {
    },
    methods:{

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


</style>