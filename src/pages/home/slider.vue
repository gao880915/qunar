<template>
  <swiper class="banner index-banner" :options="swiperOption">
    <swiper-slide v-for="slider in sliders" :key="slider.id">
      <img class="banner-img" :src="slider.imgUrl" alt="" />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-slider',
  props: ['sliders'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>
<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .banner
    overflow:hidden;
    height:0
    padding-bottom:29.25%;
    .banner-img
      width:100%
</style>
<style lang="stylus">
  .index-banner
    .swiper-pagination-bullet
      background:#fff
</style>
