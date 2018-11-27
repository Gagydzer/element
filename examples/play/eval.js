/**
 * @Author: jianglei
 * @Date:   2017-10-12 12:06:49
 */
'use strict';
import Vue from 'vue';
export default function treeToArray(
  data,
  expandAll,
  expandLevels = [],
  parent = null,
  level = null
) {
  var a = performance.now()
  let tmp = []
  Array.from(data).forEach(function(record) {
    let _level = 1
    if (level !== undefined && level !== null) {
      _level = level + 1
    }
    if (record._expanded === undefined) {
      Vue.set(record, '_expanded', expandAll || expandLevels.includes(_level))
    }
    Vue.set(record, '_level', _level)
    // 如果有父元素
    if (parent) {
      Vue.set(record, 'parent', parent)
    }
    tmp.push(record)
    if (record.children && record.children.length > 0) {
      const children = treeToArray(record.children, expandAll, expandLevels, record, _level)
      tmp = tmp.concat(children)
    }
  })
  var b = performance.now();
  console.log('It took ' + (b - a) + ' ms.');
  return tmp
}
