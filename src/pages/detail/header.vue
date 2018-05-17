<template>
  <div class="header" ref="header">
      景点详情
  </div>
</template>

<script>
export default {
  name: 'detail-header',
  activated () {
    this.bindScroll()
  },
  deactivated () {
    this.unbindScroll()
  },
  methods: {
    bindScroll () {
      window.onscroll = this.handleScroll
      // this.proxyFn = this.handleScroll.bind(this)
      //  window.addEventListener('scroll', this.proxyFn)
    },
    unbindScroll () {
      window.onscroll = null
      //  window.removeEventListener('scroll', this.proxyFn)
    },
    handleScroll (e) {
      let opacity = document.documentElement.scrollTop / 220
      opacity = opacity > 1 ? 1 : opacity
      this.$refs.header.style.opacity = opacity
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .header
    position:fixed
    top:0
    width:100%
    height:.8rem
    background:$bgColor
    opacity:0
</style>
