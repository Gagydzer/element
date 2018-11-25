<template>
  <div style="margin: 20px; width: 1000px;">
    <el-table
    :data="dataArr"
    :highlight-current-row="false"
    height="300"
    style="width: 100%">
    <el-table-column
    fixed="left"
      type="index">
    </el-table-column>
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column v-for="n in 30" label="123" :key="n">
      <template slot-scope="{ row }">
        111
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
    fixed="right"
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
  ;)
  </div>
</template>

<script>
//import { RecycleScroller } from 'vue-virtual-scroller'
//import '../../src/directives/scroll'

const dataRow = {
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }
export default {
  name: 'play',
  data: () => {

    return {
      dataArr: []
    }
  },
  methods: {
    getCols(row) {
      return Object.values(row)
    }
  },
  mounted() {
    setTimeout(() => this.dataArr = new Array(100).fill(dataRow), 100)
  }
}
</script>
