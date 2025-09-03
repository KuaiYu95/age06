// 引入需要的模块
const fs = require('fs');
const path = require('path');
const { replaceInUmiFile } = require('./replace.js');
console.log('\n----------------------------------------------------------------------------------------');
console.log('1️⃣  开始执行脚步操作...');
console.log('----------------------------------------------------------------------------------------');

function loadOldData(pathname) {
  try {
    const dataFilePath = path.join(__dirname, pathname);
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');

    // 使用 eval 来执行文件内容并获取 data 数组
    // 创建一个沙箱环境来安全地执行代码
    const data = eval(`(function() { ${fileContent}; return data; })()`);

    console.log(`✅ 成功从 ${dataFilePath} 读取了 ${data.length} 条数据`);
    return data;
  } catch (error) {
    console.error('❌ 读取 oldData 失败:', error.message);
    return [];
  }
}

// 获取 oldData
const oldData = loadOldData('../data/20250903.js');
const newData = loadOldData('../data/20250905.js');

// 根据 newData 中的 img 从 oldData 筛选出旧数据
function processDataReplacement() {
  console.log('\n----------------------------------------------------------------------------------------');
  console.log('2️⃣  开始执行替换操作...');
  console.log('----------------------------------------------------------------------------------------');
  const filters = [];

  newData.forEach(newItem => {
    // 从 oldData 中找到匹配的旧数据
    const oldItem = oldData.find(oldItem => oldItem.img === newItem.img);

    if (oldItem) {
      // 创建替换项：将旧数据替换为新数据
      filters.push({
        a: oldItem,
        b: newItem
      });
    }
  });

  // 执行替换操作
  if (filters.length > 0) {
    console.log(`✅ 需要替换 ${newData.length} 项，匹配 ${filters.length} 项:`);
    console.log(`   --> ${filters.map(it => it.a.img).join(', ')}`);

    const replaceTitle = [], replaceHref = [];
    filters.forEach(it => {
      if (it.a.title) {
        replaceTitle.push({
          a: it.a.title.split('').map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join(''),
          b: it.b.title.split('').map(char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')).join('')
        })
      }
      if (it.a.href) {
        replaceHref.push({
          a: it.a.href,
          b: it.b.href
        })
      }
    })
    if (replaceTitle.length) {
      console.log('\n----------------------------------------------------------------------------------------');
      console.log(`3️⃣  替换标题 ${replaceTitle.length} 项`);
      console.log('----------------------------------------------------------------------------------------');
      replaceInUmiFile(replaceTitle);
    }
    if (replaceHref.length) {
      console.log('\n----------------------------------------------------------------------------------------');
      console.log(`4️⃣  替换链接 ${replaceHref.length} 项`);
      console.log('----------------------------------------------------------------------------------------');
      replaceInUmiFile(replaceHref);
    }
  } else {
    console.log('\n⭕️ 没有找到需要替换的数据');
  }
}

// 执行数据替换
processDataReplacement();

