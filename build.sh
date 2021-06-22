npm run build:docs
rm ./docs/*.js
mv ./dist/*.js ./docs
rm -rf ./dist
