<template>
  <div ref="wrapper">
    <div class="list">
      <div class="area" ref="current">
        <div class="title border-topbottom">当前位置</div>
        <div class="content">
          <div class="button" @click="handleCityClick(city)">
            <div class="button-text button-active">
              {{city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" ref="hotcity">
        <div class="title border-topbottom">热门城市</div>
        <div class="content">
          <div class="button"
               v-for="item in hotcity"
               @click="handleCityClick(item.city)"
               :key="item.id">
            <div class="button-text"
                 :class="{'button-active': item.city === city}">
              {{item.city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in list" :ref="key" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="content">
          <div class="content-item border-bottom"
               v-for="innerItem in item"
               @click="handleCityClick(innerItem.name)"
               :key="innerItem.id">
             {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'city-list',
  props: {
    list: Object,
    hotcity: Array
  },
  computed: {
    ...mapState({
      city (state) {
        return state.city || '北京'
      }
    }),
    areaPositions () {
      const arr = []
      arr.push(this.$refs.current.offsetTop)
      arr.push(this.$refs.hotcity.offsetTop)
      for (let i in this.list) {
        arr.push(this.$refs[i][0].offsetTop)
      }
      return arr
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$nextTick(() => {
        this.$router.push('/')
      })
    },
    scrollToIndex (item) {
      this.scroll.scrollToElement(this.$refs[item][0])
    },
    handleScroll (e) {
      const y = -e.y
      let flag = false
      for (var i = 0; i < this.areaPositions.length; i++) {
        if (y > this.areaPositions[i] - 27 && y < this.areaPositions[i]) {
          const diff = y - this.areaPositions[i] + 27
          flag = true
          this.$emit('fixchange', diff)
          break
        }
      }
      !flag && this.$emit('fixchange')
      this.$emit('scroll', e)
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: 3
    })
    this.scroll.on('scroll', this.handleScroll.bind(this))
  },
  activated () {
    this.scroll && this.scroll.refresh()
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles.styl'
  .area
    .title
      line-height: .54rem;
      padding-left: .3rem;
      background: #eee
      color: #616161;
      font-size: .26rem;
      &::before, &::after
        border-color: #9e9e9e
    .content
      overflow: hidden
      padding: 0 .4rem .2rem .2rem
      .button
        float: left
        width: 33.33%
        .button-text
          line-height: .6rem
          margin: .2rem .1rem 0 .1rem
          border: .02rem solid #999
          border-radius: .06rem
          text-align: center
        .button-active
          color: $bgColor
          border-color: $bgColor
      .content-item
        line-height: .6rem

</style>
