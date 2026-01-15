#!/bin/bash

# if [ $# -ne 1 ]; then
#     echo "错误: 需要提供一个参数"
#     echo "用法: $0 <参数1>"
#     exit 1
# fi

DATE_FORMAT=$(date +"%Y%m%d")
ORIGIN_FILENAME="./data/history/${DATE_FORMAT}_origin.js"
NEW_FILENAME="./data/history/${DATE_FORMAT}_replace.js"

cp "./data/origin.js" "$ORIGIN_FILENAME"
echo "\n🍎 文件 origin.js 已重命名"

echo "\n🍎 开始执行合并流程..."
node ./script/index.js

echo "\n🍎 开始执行打包流程..."
node ./script/build.js