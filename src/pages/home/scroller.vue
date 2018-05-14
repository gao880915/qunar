<template>
  <div ref="scroller">
    <ul class="content">
      <div class="item" v-for="item in sights" :key="item.id">
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-content">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">
          	<span>&yen;</span>
            {{item.price}}
            <span>起</span>
          </p>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  watch: {
    sights () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.scroller)
  }
}
</script>
<style scoped lang="stylus">
@import '../../assets/styles/common/varibles.styl'
.item
  display:flex
  padding:.24rem
  .item-img
    width:1.4rem
    height:1.4rem
    margin-right:.2rem
   .item-content
    flex:1
    .item-title
      margin:.04rem 
      font-size:.3rem 0 .1rem 0
      color:$fontColor
    .item-desc
      margin-bottom:.1rem
      font-size:.28rem
      color:$lightFontColor
</style>
