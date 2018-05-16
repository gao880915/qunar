<template>
 <div class="download" @click="handleClick">
   <slot></slot>
 </div>
</template>

<script>
export default {
  name: 'index-download',
  methods: {
    handleClick () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
 .download
   z-index:2
   position:fixed
   bottom:0
   left:0
   right:0
   line-height:1rem
   background:#000
   color:#fff
</style>
