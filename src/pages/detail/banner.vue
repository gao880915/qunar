<template>
 <div>
   <div class="banner" @click="showGallay">
      <img class="banner-image" :src="bannerImg" alt="" />
   </div>
   <gallary v-show="show" :imgList="imgList"
    @close="handleGallaryClose"></gallary>
 </div>
</template>

<script>
import Gallary from 'components/common/gallary/index'
export default {
  name: 'detail-banner',
  components: {
    Gallary
  },
  props: {
    bannerImg: String,
    imgList: Array
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    showGallay () {
      this.show = true
    },
    handleGallaryClose () {
      this.show = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    overflow:hidden
    height:0
    padding-bottom: 55%
    .banner-image
      width:100%
</style>
