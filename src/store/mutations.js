export default {
  changeCity (state, city) {
    state.city = city
  },
  changDownload (state, flag) {
    if (flag === false) {
      try {
        localStorage.download = true
      } catch (e) {
        // TODO handle the exception
      }
    }
    state.showdownload = flag
  }
}
