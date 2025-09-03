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
      console.error('❌ umi.2615c28a.js 文件不存在');
      return false;
    }

    // 读取文件内容
    console.log('✅ 正在读取文件...');
    let content = fs.readFileSync(filePath, 'utf8');
    const originalLength = content.length;

    // 执行替换操作
    let totalReplacements = 0;
    replacements.forEach((replacement, index) => {
      const { a, b } = replacement;

      if (!a || !b) {
        console.warn(`⚠️ 第 ${index + 1} 个替换项缺少 a 或 b 属性，跳过`);
        return;
      }

      // 使用全局替换
      const regex = new RegExp(escapeRegExp(a), 'g');
      const matches = content.match(regex);
      const matchCount = matches ? matches.length : 0;

      if (matchCount > 0) {
        content = content.replace(regex, b);
        totalReplacements += matchCount;
        console.log(`✅ 替换 "${a}" -> "${b}"：${matchCount} 处`);
      } else {
        console.log(`⚠️  未找到匹配项："${a}"`);
      }
    });

    // 写入文件
    if (totalReplacements > 0) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`\n✅ 替换完成！`);
      console.log(`✅ 总共替换了 ${totalReplacements} 处内容`);
      console.log(`✅ 文件大小变化：${originalLength} -> ${content.length} 字符`);
    } else {
      console.log('⭕️ 没有进行任何替换操作');
    }

    return true;

  } catch (error) {
    console.error('❌ 替换过程中发生错误：', error.message);
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
 * 重命名 static 目录中的文件
 * @param {Array} replacements - 替换数组，格式为 [{a: '原内容', b: '新内容'}, ...]
 * @param {string} staticDir - static 目录路径，默认为 '../age06/static'
 */
function renameStaticFiles(replacements, staticDir = '../age06/static') {
  const fullStaticPath = path.join(__dirname, staticDir);

  try {
    // 检查目录是否存在
    if (!fs.existsSync(fullStaticPath)) {
      console.error(`❌ ${staticDir} 目录不存在`);
      return false;
    }

    // 读取目录中的所有文件
    const files = fs.readdirSync(fullStaticPath);
    console.log(`✅ 在 ${staticDir} 目录中找到 ${files.length} 个文件`);

    let totalRenamed = 0;
    const renameResults = [];

    // 遍历每个替换项
    replacements.forEach((replacement, index) => {
      const { a, b } = replacement;

      if (!a || !b) {
        console.warn(`⚠️ 第 ${index + 1} 个替换项缺少 a 或 b 属性，跳过`);
        return;
      }

      // 查找匹配的文件
      const matchingFiles = files.filter(file => {
        // 提取文件名（不含扩展名）
        const fileNameWithoutExt = path.parse(file).name;
        return fileNameWithoutExt === a;
      });

      if (matchingFiles.length === 0) {
        console.log(`❌ 未找到匹配的文件："${a}"`);
        return;
      }

      // 重命名匹配的文件
      matchingFiles.forEach(file => {
        const oldPath = path.join(fullStaticPath, file);
        const fileExt = path.extname(file);
        const newFileName = b + fileExt;
        const newPath = path.join(fullStaticPath, newFileName);

        try {
          // 检查新文件名是否已存在
          if (fs.existsSync(newPath)) {
            console.warn(`⚠️ 目标文件 "${newFileName}" 已存在，跳过重命名 "${file}"`);
            return;
          }

          // 执行重命名
          fs.renameSync(oldPath, newPath);
          totalRenamed++;
          renameResults.push({
            old: file,
            new: newFileName,
            success: true
          });
          console.log(`✅ 重命名成功：${file} -> ${newFileName}`);
        } catch (error) {
          console.error(`❌ 重命名失败：${file} -> ${newFileName}，错误：${error.message}`);
          renameResults.push({
            old: file,
            new: newFileName,
            success: false,
            error: error.message
          });
        }
      });
    });

    // 输出结果统计
    console.log(`\n✅ 重命名完成！`);
    console.log(`✅ 总共重命名了 ${totalRenamed} 个文件`);

    if (renameResults.length > 0) {
      console.log('\n✅ 重命名详情：');
      renameResults.forEach(result => {
        const status = result.success ? '✅' : '❌';
        console.log(`${status} ${result.old} -> ${result.new}`);
        if (!result.success) {
          console.log(`❌ 错误：${result.error}`);
        }
      });
    }

    return true;

  } catch (error) {
    console.error('❌ 重命名过程中发生错误：', error.message);
    return false;
  }
}

// 导出函数供其他模块使用
module.exports = {
  replaceInUmiFile,
  renameStaticFiles,
  escapeRegExp
};
