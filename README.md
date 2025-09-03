# Age06

## 安装依赖

首先需要安装 Node.js 依赖包：

```bash
npm install
```

## 使用方法

### 使用 npm 脚本

```bash
# 重命名引入的图片
npm run img

# 替换标题链接，合并新旧数据
npm run merge

# 打包 age06 目录
npm run build
```

## build 输出结果

- 打包后的文件会保存在 `dist/` 目录下
- 文件命名格式：`age06-YYYY-MM-DD.zip`
- 脚本会自动创建 `dist` 目录（如果不存在）

## 功能特性

1. **自动打包**: 将整个 age06 目录打包成 zip 格式
2. **日期命名**: 使用当前日期命名输出文件
3. **高压缩率**: 使用最高压缩级别（level 9）
4. **旧文件清理**: 自动删除 7 天前的旧 zip 文件
5. **错误处理**: 完善的错误处理和日志输出

## 目录结构

```
age06/
├── script/
│   └── build.js        # 打包脚本
├── age06/              # 要打包的源目录
├── dist/               # 输出目录（自动创建）
│   └── age06-YYYY-MM-DD.zip
├── package.json        # 依赖配置
└── BUILD_README.md     # 本说明文件
```

## 注意事项

- 确保已安装 Node.js（版本 >= 14.0.0）
- 打包前会自动清理 7 天前的旧文件
- 如果源目录不存在，脚本会报错并退出
