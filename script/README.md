# UMI 文件替换脚本

这个脚本集合用于替换 `umi.2615c28a.js` 文件中的内容。

## 文件说明

- `replace.js` - 基础替换脚本
- `replace-advanced.js` - 高级替换脚本，支持配置文件
- `example.js` - 使用示例
- `README.md` - 说明文档

## 使用方法

### 方法一：基础替换脚本

```javascript
const { replaceInUmiFile } = require("./replace.js");

// 定义替换数组
const replacements = [
  { a: "oldText1", b: "newText1" },
  { a: "oldText2", b: "newText2" },
  // 添加更多替换项...
];

// 执行替换
replaceInUmiFile(replacements);
```

### 方法二：使用配置文件

1. 创建配置文件：

```bash
node replace-advanced.js --create-config
```

2. 编辑生成的 `replace-config.json` 文件：

```json
{
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
}
```

3. 执行替换：

```bash
node replace-advanced.js replace-config.json
```

### 方法三：直接运行示例

```bash
node example.js
```

## 注意事项

1. 脚本会自动备份原文件（通过读取和写入操作）
2. 替换是全局的，会替换文件中所有匹配的内容
3. 支持正则表达式特殊字符的转义
4. 会显示详细的替换统计信息

## 错误处理

- 如果文件不存在，会显示错误信息
- 如果替换数组格式不正确，会跳过无效项
- 所有操作都有详细的日志输出

## 示例输出

```
正在读取文件...
替换 "oldText1" -> "newText1"：3 处
替换 "oldText2" -> "newText2"：1 处
未找到匹配项："oldText3"

替换完成！
总共替换了 4 处内容
文件大小变化：1234567 -> 1234567 字符
```
