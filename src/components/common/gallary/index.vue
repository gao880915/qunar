<template>
  <div class="gallary" @click="handleGallaryClose">
    <swiper class="container" :options="{}">
      <swiper-slide v-for="(item, index) of imgList" :key="index">
        <img class="gallary-img" :src="item" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'gallary',
  props: {
    imgList: Array,
    default: []
  },
  methods: {
    handleGallaryClose () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
 .gallary
   position:fixed
   top:0
   right:0
   bottom:0
   left:0
   background:#000
   .container
     display:flex
     flex-direction:column
     justify-content:center
   .gallary-img
     width:100%
</style>
