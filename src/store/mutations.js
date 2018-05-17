export default {
  changeCity (state, city) {
    state.city = city
  },
  changDownload (state, flag) {
    if (flag === false) {
      localStorage.download = true
    }
    state.showdownload = flag
  }
}
