<template>
  <div class="main">
    <city-header></city-header>
    <search :list="list"></search>
    <list class="list"
          :list="list"
          :hotcity="hotcity"
          @scroll="handleListScroll"
          @fixchange="handleFixChange"
          @gettitlename="handleGetTitleName"
          ref="list">
    </list>
    <side-bar ref="sideBar" :list="list" @changeLetter="handleChangeLetter"></side-bar>
    <fixed-title ref="fixedTitle"></fixed-title>
  </div>
</template>

<script>
import CityHeader from './header'
import Search from './search'
import List from './list'
import SideBar from './sidebar'
import FixedTitle from './title'
import axios from 'axios'
export default {
  name: 'city',
  data () {
    return {
      list: {},
      hotcity: []
    }
  },
  components: {
    CityHeader,
    Search,
    List,
    SideBar,
    FixedTitle
  },
  methods: {
    getListInfo () {
      axios.get('/api/city.json')
        .then(this.handleGetListSucc.bind(this))
        .catch(this.handleGetListErr.bind(this))
    },
    handleGetListSucc (res) {
      res && (res = res.data)
      if (res && res.data) {
        res.data.list && (this.list = res.data.list)
        res.data.hotcity && (this.hotcity = res.data.hotcity)
      } else {
        this.handleGetListErr()
      }
    },
    handleGetListErr () {
      ('请求返回失败')
    },
    handleChangeLetter (item) {
      this.$refs.list.scrollToIndex(item)
    },
    handleListScroll (e) {
      this.$refs.fixedTitle.SetShow(!(e.y > 0))
    },
    handleFixChange (num) {
      this.$refs.fixedTitle.setMove(num || 0)
    },
    handleGetTitleName (titlename) {
      this.$refs.fixedTitle.setTitleName(titlename)
      this.$refs.sideBar.setCurrentPos(titlename)
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style scoped lang="stylus">
  .main
    display: flex
    flex-direction: column
    position: absolute
    left: 0
    right: 0
    top: 0
    bottom: 0
    .list
      overflow: hidden
      flex: 1
</style>
