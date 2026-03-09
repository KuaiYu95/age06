// 引入需要的模块
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');
const { replaceInUmiFile } = require('./replace.js');
console.log('\n1️⃣  开始读取替换数据...');

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
const oldData = loadOldData('../data/origin.js');
const newData = loadOldData('../data/new_data.js');

// 将 title 转为与打包产物一致的格式：仅非 ASCII 用 \uXXXX，ASCII（如 "-"）保持原样
function titleToUmiForm(str) {
  return str.split('').map(char => {
    const code = char.charCodeAt(0);
    return code > 127 ? '\\u' + code.toString(16).padStart(4, '0') : char;
  }).join('');
}

// 根据 newData 中的 img 从 oldData 筛选出旧数据
function processDataReplacement() {
  console.log('\n2️⃣  开始查询替换数据...');
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
          a: titleToUmiForm(it.a.title),
          b: titleToUmiForm(it.b.title)
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
      console.log(`\n3️⃣  开始替换标题 ${replaceTitle.length} 项`);
      replaceInUmiFile(replaceTitle);
    } else {
      console.log(`\n3️⃣  无替换标题`)
    }
    if (replaceHref.length) {
      console.log(`\n4️⃣  开始替换链接 ${replaceHref.length} 项`);
      replaceInUmiFile(replaceHref);
    } else {
      console.log(`\n4️⃣  无替换链接`)
    }
  } else {
    console.log('\n⭕️ 没有找到需要替换的数据');
  }
}

// 数据合并函数
function mergeData() {
  console.log('\n5️⃣  开始合并数据...');

  // 创建合并后的数据数组，从 oldData 开始
  const mergedData = [...oldData];

  // 遍历 newData，替换 oldData 中相同 img 的项目
  newData.forEach(newItem => {
    const index = mergedData.findIndex(oldItem => oldItem.img === newItem.img);
    if (index !== -1) {
      console.log(`✅ 替换项目: ${newItem.img}`);
      mergedData[index] = newItem;
    } else {
      console.log(`⚠️  新项目未在原数据中找到: ${newItem.img}`);
    }
  });

  console.log(`✅ 合并完成：总共 ${mergedData.length} 条数据，替换了 ${newData.length} 条数据`);
  return mergedData;
}

// 保存合并后的数据
function saveMergedData(mergedData, fileName) {

  const filePath = path.join(__dirname, '../data', fileName);

  // 格式化数据为 JS 文件内容
  const fileContent = `const data = ${JSON.stringify(mergedData, null, 2)};`;

  try {
    fs.writeFileSync(filePath, fileContent, 'utf8');
    console.log(`✅ 数据已成功保存到: ${filePath}`);
    console.log(`✅ 文件名: ${fileName}`);
    return filePath;
  } catch (error) {
    console.error('❌ 保存文件失败:', error.message);
    return null;
  }
}

// 执行完整的合并流程
function executeDataMerge() {
  // 1. 合并数据
  const mergedData = mergeData();

  const fileName = dayjs().format('YYYYMMDD_HHmmss');

  // 2. 保存合并后的数据
  console.log('\n6️⃣  保存合并后的数据...');
  const savedPath = saveMergedData(mergedData, `${fileName}_merge.js`);
  console.log('\n7️⃣  替换源文件...');
  const originPath = saveMergedData(mergedData, 'origin.js');

  if (savedPath || originPath) {
    console.log('\n🎉 数据合并流程完成！');
  } else {
    console.log('\n❌ 数据合并流程失败！');
  }
}

// 执行数据替换
processDataReplacement();

// 执行数据合并
executeDataMerge();

