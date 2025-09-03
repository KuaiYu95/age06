const fs = require('fs');
const path = require('path');

/**
 * 替换脚本 - 将 umi.2615c28a.js 文件中的匹配内容进行替换
 * @param {Array} replacements - 替换数组，格式为 [{a: '原内容', b: '新内容'}, ...]
 */
function replaceInUmiFile(replacements) {
  const filePath = path.join(__dirname, '../age06', 'umi.2615c28a.js');

  try {
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      console.error('错误：umi.2615c28a.js 文件不存在');
      return false;
    }

    // 读取文件内容
    console.log('正在读取文件...');
    let content = fs.readFileSync(filePath, 'utf8');
    const originalLength = content.length;

    // 执行替换操作
    let totalReplacements = 0;
    replacements.forEach((replacement, index) => {
      const { a, b } = replacement;

      if (!a || !b) {
        console.warn(`警告：第 ${index + 1} 个替换项缺少 a 或 b 属性，跳过`);
        return;
      }

      // 使用全局替换
      const regex = new RegExp(escapeRegExp(a), 'g');
      const matches = content.match(regex);
      const matchCount = matches ? matches.length : 0;

      if (matchCount > 0) {
        content = content.replace(regex, b);
        totalReplacements += matchCount;
        console.log(`替换 "${a}" -> "${b}"：${matchCount} 处`);
      } else {
        console.log(`未找到匹配项："${a}"`);
      }
    });

    // 写入文件
    if (totalReplacements > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`\n替换完成！`);
      console.log(`总共替换了 ${totalReplacements} 处内容`);
      console.log(`文件大小变化：${originalLength} -> ${content.length} 字符`);
    } else {
      console.log('没有进行任何替换操作');
    }

    return true;

  } catch (error) {
    console.error('替换过程中发生错误：', error.message);
    return false;
  }
}

/**
 * 转义正则表达式特殊字符
 * @param {string} string 
 * @returns {string}
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * 示例用法
 */
function example() {
  // 示例替换数组
  const replacements = [
    { a: 'oldText1', b: 'newText1' },
    { a: 'oldText2', b: 'newText2' },
    // 添加更多替换项...
  ];

  console.log('示例替换数组：');
  console.log(JSON.stringify(replacements, null, 2));
  console.log('\n使用方法：');
  console.log('replaceInUmiFile(replacements);');
}

// 如果直接运行此脚本，显示示例
if (require.main === module) {
  console.log('=== UMI 文件替换脚本 ===\n');
  example();
  console.log('\n请修改 replacements 数组后调用 replaceInUmiFile() 函数');
}

// 导出函数供其他模块使用
module.exports = {
  replaceInUmiFile,
  escapeRegExp
};
