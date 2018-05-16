export default {
  activated () {
    this.showDownload()
  },
  methods: {
    showDownload () {
      throw new Error('使用的download组件')
    }
  }
}
