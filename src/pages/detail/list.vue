<template>
<div class="list">
  <div v-for="(area, index) in ticketList" :key="index">
   <h3 class="title">{{area.title}}</h3>
   <ul >
      <li class="list-item"
        v-show="ticket.show"
        v-for="(ticket, tIndex) in area.list"
        :key="tIndex">
        {{ticket.title}}--{{ticket.desc}}--{{ticket.price}}
        <div v-show="true">
          <div
            v-for="(supplier, sIndex) in ticket.suppliers"
            :key="sIndex"
            v-show="supplier.show">
            {{supplier.name}}
          </div>
          <div v-if="ticket.hasMore"
            @click="handleSupplierClick(index,tIndex,$event)">
                        更多供应商
          </div>
        </div>
      </li>
   </ul>
   <div class="more" v-show="area.hasmore" @click="handleClick(index, $event)">点击查看更多</div>
  </div>
</div>
</template>

<script>
export default {
  name: 'detail-list',
  props: {
    list: Array
  },
  data () {
    return {
      ticketList: []
    }
  },
  watch: {
    list () {
      this.ticketList = JSON.parse(JSON.stringify(this.list))
    }
  },
  methods: {
    handleClick (index, e) {
      e.target.style.display = 'none'
      this.ticketList[index].list.map((value, index) => {
        value.show = true
        return value
      })
    },
    handleSupplierClick (index, childIndex, e) {
      e.target.style.display = 'none'
      this.ticketList[index].list[childIndex].suppliers.map((value, index) => {
        value.show = true
        return value
      })
    }
  }
}
</script>

<style scoped lang="stylus">
  .title
    line-height:.7rem
    padding:0 .4rem
  .list-item
    line-height:.6rem
    padding:0 .4rem
  .more
    text-align:center
    line-height:.6rem
</style>
