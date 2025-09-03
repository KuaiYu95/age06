const fs = require('fs');
const path = require('path');
const { replaceInUmiFile } = require('./replace.js');

/**
 * 高级替换脚本 - 支持从 JSON 文件读取配置
 * @param {string} configPath - 配置文件路径
 */
function replaceFromConfig(configPath) {
  try {
    // 检查配置文件是否存在
    if (!fs.existsSync(configPath)) {
      console.error(`错误：配置文件 ${configPath} 不存在`);
      return false;
    }

    // 读取配置文件
    const configContent = fs.readFileSync(configPath, 'utf8');
    const config = JSON.parse(configContent);

    // 验证配置格式
    if (!Array.isArray(config.replacements)) {
      console.error('错误：配置文件中缺少 replacements 数组');
      return false;
    }

    console.log(`从配置文件 ${configPath} 读取到 ${config.replacements.length} 个替换项`);

    // 执行替换
    return replaceInUmiFile(config.replacements);

  } catch (error) {
    console.error('读取配置文件时发生错误：', error.message);
    return false;
  }
}

/**
 * 创建示例配置文件
 * @param {string} configPath - 配置文件保存路径
 */
function createExampleConfig(configPath) {
  const exampleConfig = {
    "description": "UMI 文件替换配置",
    "replacements": [
      {
        "a": "oldText1",
        "b": "newText1",
        "description": "替换示例1"
      },
      {
        "a": "oldText2",
        "b": "newText2",
        "description": "替换示例2"
      }
    ]
  };

  try {
    fs.writeFileSync(configPath, JSON.stringify(exampleConfig, null, 2), 'utf8');
    console.log(`示例配置文件已创建：${configPath}`);
    return true;
  } catch (error) {
    console.error('创建配置文件时发生错误：', error.message);
    return false;
  }
}

// 如果直接运行此脚本
if (require.main === module) {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('=== 高级 UMI 文件替换脚本 ===\n');
    console.log('使用方法：');
    console.log('1. 创建配置文件：node replace-advanced.js --create-config');
    console.log('2. 使用配置文件替换：node replace-advanced.js config.json');
    console.log('3. 直接替换：node replace-advanced.js --direct');
  } else if (args[0] === '--create-config') {
    const configPath = args[1] || 'replace-config.json';
    createExampleConfig(configPath);
  } else if (args[0] === '--direct') {
    // 直接替换示例
    const replacements = [
      { a: 'example1', b: 'replacement1' },
      { a: 'example2', b: 'replacement2' }
    ];
    replaceInUmiFile(replacements);
  } else {
    // 使用配置文件
    replaceFromConfig(args[0]);
  }
}

module.exports = {
  replaceFromConfig,
  createExampleConfig
};
