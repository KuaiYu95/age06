#!/bin/bash

rm './data/new_data.js'
cp "$1" './data/new_data.js'

# 生成日期格式的文件名 (YYYYMMDD_HHMMSS.js)
# DATE_FORMAT=$(date +"%Y%m%d_%H%M%S")
DATE_FORMAT=$(date +"%Y%m%d")
NEW_FILENAME="./data/${DATE_FORMAT}_replace.js"

echo "生成日期格式文件名: $NEW_FILENAME"

# 复制新数据文件到data目录，使用日期格式命名
mv "$1" "$NEW_FILENAME"

echo "新数据文件已重命名为: $NEW_FILENAME"