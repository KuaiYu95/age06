const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

/**
 * 将 age06 目录打包成 zip 格式
 */
function buildZip() {
  const sourceDir = path.join(__dirname, '../age06');
  const outputDir = path.join(__dirname, '../dist');
  const outputFile = path.join(outputDir, `age06-${new Date().toISOString().slice(0, 10)}.zip`);

  // 确保输出目录存在
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // 创建写入流
  const output = fs.createWriteStream(outputFile);
  const archive = archiver('zip', {
    zlib: { level: 9 } // 设置压缩级别
  });

  // 监听流事件
  output.on('close', () => {
    console.log(`打包完成: ${outputFile}`);
    console.log(`文件大小: ${(archive.pointer() / 1024 / 1024).toFixed(2)} MB`);
  });

  output.on('end', () => {
    console.log('数据传输已完成');
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn('警告:', err);
    } else {
      throw err;
    }
  });

  archive.on('error', (err) => {
    console.error('打包错误:', err);
    throw err;
  });

  // 连接流
  archive.pipe(output);

  // 添加目录到压缩包
  console.log('开始打包 age06 目录...');
  archive.directory(sourceDir, 'age06');

  // 完成打包
  archive.finalize();
}

/**
 * 清理旧的 zip 文件（可选）
 * @param {number} daysToKeep - 保留多少天的文件
 */
function cleanOldZips(daysToKeep = 7) {
  const outputDir = path.join(__dirname, '../dist');

  if (!fs.existsSync(outputDir)) {
    return;
  }

  const files = fs.readdirSync(outputDir);
  const now = Date.now();
  const keepTime = daysToKeep * 24 * 60 * 60 * 1000;

  files.forEach(file => {
    if (file.startsWith('age06-') && file.endsWith('.zip')) {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);

      if (now - stats.mtime.getTime() > keepTime) {
        fs.unlinkSync(filePath);
        console.log(`已删除旧文件: ${file}`);
      }
    }
  });
}

// 主执行函数
function main() {
  try {
    console.log('=== Age06 项目打包工具 ===');

    // 检查源目录是否存在
    const sourceDir = path.join(__dirname, '../age06');
    if (!fs.existsSync(sourceDir)) {
      console.error('错误: age06 目录不存在');
      process.exit(1);
    }

    // 清理旧文件
    cleanOldZips(7);

    // 开始打包
    buildZip();

  } catch (error) {
    console.error('执行失败:', error);
    process.exit(1);
  }
}

// 如果直接运行此脚本则执行主函数
if (require.main === module) {
  main();
}

module.exports = {
  buildZip,
  cleanOldZips
};
