#!/bin/bash
# abort on errors
set -e
# build
yarn run build
# navigate into the build output directory
cd build
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git  push -f git@github.com:iamharshdoshi/iamharshdoshi.github.io.git master:gh-pages
cd -