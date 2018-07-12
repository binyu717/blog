cd docs/.vuepress/dist

echo git init start
git init
echo git init finished

echo git add start
git add -A
echo git add finished

echo git commit start
git commit -m 'deploy'
echo git commit finished

echo git commit deploy
git push -f https://github.com/qq986063761/blog.git master:gh-pages
echo git commit finished