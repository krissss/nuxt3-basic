// https://stylelint.io/user-guide/configure
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-html/vue', 'stylelint-config-recess-order'],
  rules: {
    'scss/at-import-partial-extension': null, // 关闭 @import 不加后缀
    'scss/at-import-no-partial-leading-underscore': null, // 关闭 @import 忽略 _ 的规则
  },
}
