// 原始对象数据
var material_list = {
  title: "\u7d20\u6750\u8d44\u6e90",
  type: [{
    name: "\u6d4f\u89c8\u91cf",
    rank: [
      {
        name: "室外种植园地",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/986072ec-240f-40c2-bc94-3d0d2ecf257d"
      },
      {
        name: "新型种植园地",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/6abba0bb-d827-4487-ba21-72bc79b72ea3"
      },
      {
        name: "超市购物",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/205c648b-5a45-45fd-8653-4c503c2f649d"
      },
      {
        name: "红旗操",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/1938021d-871b-4956-9536-e22b3eeebcae"
      },
      {
        name: "中班-医院",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/9ce4959e-b39f-490f-9354-001c29ec1e31"
      },
      {
        name: "艺术探索室",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ec7605b2-9041-4c10-b042-13842bdacf74"
      },
      {
        name: "太阳和月亮-上课版压缩包",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ba051196-b00a-438e-9601-237fc3671537"
      },
      {
        name: "门窗开合的安全措施",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/8c45e601-2867-404c-9221-b87145a59760"
      }
    ]
  }]
}

var old_material_list = {
  title: "\u7d20\u6750\u8d44\u6e90",
  type: [{
    name: "\u6d4f\u89c8\u91cf",
    rank: [
      {
        name: "室外种植园地",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/986072ec-240f-40c2-bc94-3d0d2ecf257d"
      },
      {
        name: "新型种植园地",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/6abba0bb-d827-4487-ba21-72bc79b72ea3"
      },
      {
        name: "超市购物",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/205c648b-5a45-45fd-8653-4c503c2f649d"
      },
      {
        name: "红旗操",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/1938021d-871b-4956-9536-e22b3eeebcae"
      },
      {
        name: "中班-医院",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/9ce4959e-b39f-490f-9354-001c29ec1e31"
      },
      {
        name: "艺术探索室",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ec7605b2-9041-4c10-b042-13842bdacf74"
      },
      {
        name: "太阳和月亮-上课版压缩包",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/ba051196-b00a-438e-9601-237fc3671537"
      },
      {
        name: "门禁开放的安全措施",
        link: "https://yyt.age06.edu.sh.cn/Age06.ImplementSupport/Resource/Detail/8c45e601-2867-404c-9221-b87145a59760"
      }
    ]
  }]
}

/**
 * 将字符串转换为unicode编码
 * @param {string} str 
 * @returns {string}
 */
function toUnicode(str) {
  return str.replace(/[^\x00-\x7F]/g, function (char) {
    return '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0');
  });
}

/**
 * 将对象转换为压缩的字符串格式
 * @param {Object} obj 
 * @returns {string}
 */
function compressObjectToString(obj) {
  // 递归处理对象，将name字段转换为unicode
  function processObject(obj) {
    if (typeof obj === 'string') {
      return '"' + toUnicode(obj) + '"';
    } else if (Array.isArray(obj)) {
      return '[' + obj.map(processObject).join(',') + ']';
    } else if (obj && typeof obj === 'object') {
      const entries = Object.entries(obj).map(([key, value]) => {
        return `${key}:${processObject(value)}`;
      });
      return '{' + entries.join(',') + '}';
    }
    return JSON.stringify(obj);
  }

  return processObject(obj);
}

// 将对象转换为压缩字符串
const material_list_str = compressObjectToString(material_list);
const old_material_list_str = compressObjectToString(old_material_list);

console.log({ material_list_str, old_material_list_str })

// 导入替换函数
const { replaceInUmiFile } = require('./replace.js');

// 执行替换操作
function replaceMaterialList() {
  console.log('🚀 开始替换素材列表数据...\n');

  const replacements = [
    {
      a: old_material_list_str,
      b: material_list_str
    }
  ];

  const result = replaceInUmiFile(replacements);

  if (result) {
    console.log('\n✅ 素材列表数据替换完成！');
  } else {
    console.log('\n❌ 素材列表数据替换失败');
  }

  return result;
}

// 如果直接运行此脚本
if (require.main === module) {
  replaceMaterialList();
}

// 导出函数和数据
module.exports = {
  material_list_str,
  old_material_list_str,
  replaceMaterialList
};
