#!/bin/bash
echo "执行脚本啦"

git add .
git commit -m '修改--'$1
git push -u origin feat1.0

#  bash git.sh '你的注释'