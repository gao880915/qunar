<template>
 <div>
   <banner
    :bannerImg="bannerImg"
    :imgList="imgList"></banner>
    <!--<download @close="handleCloseClick" v-show="download">下载条</download>-->
    <download >下载条</download>
 </div>
</template>

<script>
import Banner from './banner'
import axios from 'axios'
//  import download from 'mixins/download'
import Download from 'components/common/download/download'
export default {
  name: 'detail',
  //  mixins: [download],
  props: {
    sightid: [Number, String]
  },
  data () {
    return {
      bannerImg: '',
      imgList: []
      //  download: true
    }
  },
  components: {
    Banner,
    Download
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
  //  showDownload () {
  //    this.download = true
  //  },
  //  handleCloseClick () {
  //    this.download = false
  //  }
  }
}
</script>

<style scoped lang="stylus">
</style>
