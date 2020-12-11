#!/bin/bash
echo "执行脚本啦"

cd ../
git add .
git commit -m '修改--'$1
git push