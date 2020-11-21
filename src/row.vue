<template>
  <div class="row">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:"g-row",
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
.row{
  display: flex;
}
</style>