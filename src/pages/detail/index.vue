<template>
 <div>
   <banner
    :bannerImg="bannerImg"
    :imgList="imgList"></banner>
 </div>
</template>

<script>
import Banner from './banner'
import axios from 'axios'
export default {
  name: 'detail',
  props: {
    sightid: [Number, String]
  },
  data () {
    return {
      bannerImg: '',
      imgList: []
    }
  },
  components: {
    Banner
  },
  created () {
    this.getDetailInfo()
  },
  watch: {
    sightid () {
      if (this.sightid) {
        this.getDetailInfo()
      }
    }
  },
  methods: {
    getDetailInfo () {
      axios.get('/api/detail.json', {
        params: {
          id: this.sightid
        }
      })
        .then(this.handleGetDetailSucc.bind(this))
        .catch(this.handleGetDetailErr.bind(this))
    },
    handleGetDetailSucc (res) {
      res && (res = res.data)
      if (res && res.ret && res.data) {
        this.bannerImg = res.data.bannerImg
        this.imgList = res.data.imgList
      } else {
        this.handleGetDetailErr()
      }
    },
    handleGetDetailErr () {
      console.log('error')
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
