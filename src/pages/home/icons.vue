<template>
  <swiper class="icons index-icons" :options="swiperOption">
    <swiper-slide class="icon-page" v-for="(page,index) in pages" :key="index">
      <div class="icons-list">
        <div class="icons-item" v-for="item in page" :key="item.id">
          <img class="icon-img" :src="item.imgUrl" alt="" />
          <p class="icon-title">{{item.title}}</p>
        </div>
      </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'index-icons',
  props: ['icons'],
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor((index / 8))
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>
<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
  .icons
    padding-bottom:.6rem
    width:100%
    .icon-page
      overflow:hidden
      height:0
      padding-bottom:2.8rem
      .icons-list
        display:flex
        flex-direction:row
        flex-wrap:wrap
        .icons-item
          width:25%
          padding-top:.3rem
          text-align:center
          .icon-img
            width:.66rem
            height:.66rem
          .icon-title
            margin-top:.16rem
            color:#333
            font-size:.28rem
</style>
<style lang="stylus">
@import '../../assets/styles/common/varibles.styl'
  .index-icons
    .swiper-pagination-bullet
      background:$bgColor
</style>
