<template>
  <el-table :data="formatData"
    v-bind="$attrs"
    :row-height="25"
    ref="table"
    @row-click="toogle">
    <el-table-column :width="nameWidth" :fixed="fixedFirst">
      <template slot-scope="scope">
        <span v-for="space in scope.row._level"
          class="ms-tree-space"
          :key="space"></span>
        {{scope.row.name}}
        <span class="tree-ctrl __pull-right"
          v-if="iconShow(0,scope.row)"
          @click="toggleExpanded(scope.row)">
          <i v-if="!scope.row._expanded"
            class="el-icon-plus"></i>
          <i v-else
            class="el-icon-minus"></i>
        </span>
      </template>
    </el-table-column>
    <!-- <el-table-column v-else v-for="(column, index) in columns" :key="column.value" :label="column.text" :width="column.width">
      <template slot-scope="scope">
        <span v-if="index === 0" v-for="space in scope.row._level" class="ms-tree-space" :key="space"></span>
        <span class="tree-ctrl" v-if="iconShow(index,scope.row)" @click="toggleExpanded(scope.$index)">
          <i v-if="!scope.row._expanded" class="el-icon-plus"></i>
          <i v-else class="el-icon-minus"></i>
        </span>
        {{scope.row[column.value]}}
      </template>
    </el-table-column> -->
    <slot></slot>
  </el-table>
</template>

<script>
/**
  Auth: Lei.j1ang
  Created: 2018/1/19-13:59
*/
//import { Table } from 'element-my'
import treeToArray from './eval';
export default {
  name: 'treeTable',
  /* components: {
    'table': Table
  }, */
  props: {
    nameWidth: {
      type: Number,
      default: 150
    },
    data: {
      type: [Array, Object],
      required: true
    },
    columns: {
      type: Array,
      default: () => []
    },
    evalFunc: Function,
    evalArgs: Array,
    expandAll: {
      type: Boolean,
      default: false
    },
    expandedLevels: {
      type: Array,
      default: () => ([])
    },
    fixedFirst: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
  }),
  /* watch: {
    data: function(data) {
      if (data && Array.isArray(data)) this.formatData = this.format(this.data)
    }
  }, */
  computed: {
    formatData() {
      let tmp
      if (!Array.isArray(this.data)) {
        tmp = [this.data]
      } else {
        tmp = this.data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll], this.evalArgs)
        : [tmp, this.expandAll]
      return func.apply(null, args)
    }
  },
  methods: {
    format(data) {
      console.log('format')
      let tmp
      if (!Array.isArray(data)) {
        tmp = [data]
      } else {
        tmp = data
      }
      const func = this.evalFunc || treeToArray
      const args = this.evalArgs
        ? Array.concat([tmp, this.expandAll, this.expandedLevels], this.evalArgs)
        : [tmp, this.expandAll, this.expandedLevels]
      return func.apply(null, args)
    },
    showRow: function(row) {
      const show = row.row.parent
        ? row.row.parent._expanded && row.row.parent._show
        : true
      row.row._show = show
      return show
        ? ''
        : 'display:none;';
    },
    getRowKey(row) {
      console.log('row', `${row.id}-${row._level}-${row.parent && row.parent.id || null}`)
      return `${row.id}-${row._level}-${row.parent && row.parent.id || null}`

    },
    // 切换下级是否展开
    toggleExpanded: function(record) {
      console.log('toogle', record.__index)
      record._expanded = !record._expanded
      this.$refs.table.updateRenderRows()
    },
    // 图标显示
    iconShow(index, record) {
      return index === 0 && record.children && record.children.length > 0
    },
    toogle(row, e, col) {
      //console.log('toogle', row, col)
    }
  }
}
</script>
<style rel="stylesheet/css">
@keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes treeTableShow {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

<style lang="scss" rel="stylesheet/scss" scoped>
$color-blue: #2196f3;
$space-width: 10px;
.ms-tree-space {
  position: relative;
  top: 1px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  line-height: 1;
  width: $space-width;
  height: 14px;
  &::before {
    content: "";
  }
}
.processContainer {
  width: 100%;
  height: 100%;
}
table td {
  line-height: 26px;
}

.tree-ctrl {
  position: relative;
  cursor: pointer;
  color: $color-blue;
  margin-left: -$space-width;
}
</style>
