import {execSync} from "child_process";

export const fileMover = function(){
  execSync('git checkout gh-pages')
  execSync('rm -rf ./docs')
  execSync('mkdir ./docs')
  execSync('cp -R ./dist/* ./docs')
  execSync('mkdir ./docs/static')
  execSync('mkdir ./docs/static/images')
  execSync('mkdir ./docs/static/icons')
  execSync('cp -R ./static/images ./docs/static')
  execSync('cp -R ./static/icons ./docs/static')
  execSync('mkdir ./docs/static/example-images')
  execSync('cp -R ./static/example-images/* ./docs/static/example-images')
  execSync('cp -R ./404.html ./docs/')
  execSync('git add ./docs/*'),
  execSync('git commit -a -m"deploy docs"'),
  execSync('git push'),
  execSync('rm -rf ./dist'),
  process.exit(1)
}