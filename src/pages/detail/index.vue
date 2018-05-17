<template>
 <div>
   <banner
    :bannerImg="bannerImg"
    :imgList="imgList"></banner>
    <detail-header></detail-header>
    <!--<download @close="handleCloseClick" v-show="download">下载条</download>-->
    <download v-show="showdownload">下载条</download>
    <list :list="ticketList"></list>
 </div>
</template>

<script>
import Banner from './banner'
import axios from 'axios'
//  import download from 'mixins/download'
import Download from 'components/common/download/download'
import List from './list'
import DetailHeader from './header'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'detail',
  //  mixins: [download],
  props: {
    sightid: [Number, String]
  },
  computed: {
    ...mapState(['city', 'showdownload'])
  },
  data () {
    return {
      bannerImg: '',
      imgList: [],
      ticketList: []
      //  download: true
    }
  },
  components: {
    Banner,
    Download,
    List,
    DetailHeader
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
        this.ticketList = res.data.ticketList
      } else {
        this.handleGetDetailErr()
      }
    },
    handleGetDetailErr () {
      console.log('error')
    },
    ...mapMutations(['changeCity'])
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
