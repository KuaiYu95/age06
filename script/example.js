const { replaceInUmiFile } = require('./replace.js');

// 示例：定义替换数组
const replacements = [
  { a: 'oldString1', b: 'newString1' },
  { a: 'oldString2', b: 'newString2' },
  { a: 'oldString3', b: 'newString3' },
  // 添加更多替换项...
];

// 执行替换
console.log('开始执行替换操作...\n');
const success = replaceInUmiFile(replacements);

if (success) {
  console.log('\n✅ 替换操作完成！');
} else {
  console.log('\n❌ 替换操作失败！');
}
