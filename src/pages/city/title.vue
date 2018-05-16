<template>
  <div class="fiex-title" v-show="show" ref = "title">当前位置</div>
</template>

<script>
export default {
  name: 'fixed-title',
  data () {
    return {
      show: false
    }
  },
  methods: {
    SetShow (flag) {
      this.show = flag
    },
    setMove (num) {
      console.log(num)
      this.$refs.title.style.top = (81 - num) + 'px'
    }
  }
}
</script>

<style scoped lang="stylus">
  .fiex-title
    position:fixed
    top:1.62rem
    left:0
    right:0
    padding-left:.2rem
    line-height:.54rem
    background:#eee
    font-size:.24rem
</style>
