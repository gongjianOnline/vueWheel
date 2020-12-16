<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:"g-collapse",
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
    border-bottom: none;
  }
</style>