const gulp = require("gulp");
const shell = require("gulp-shell");
// const imagemin = require("gulp-imagemin");
// var tiny = require("gulp-tinypng-nokey-plus");
gulp.task(
    "copy",
    shell.task([
        // 'ls'
        // "git checkout gh-pages",
        "rm -rf ./docs",
        "npm run build:docs",
        "npm run build:icons",
        "cp -R ./dist/* ./docs",
        "cp -R ./404.html ./docs/",
        "git add ./docs/*",
        "git commit -a -m'deploy docs'",
        "git push",
        //#// "cp docs/RostelecomBasis*.* docs/promo/",
        //#// "cp ./static/fonts.css ./docs/",
        // "perl -pi -w -e 's/src=\\//src=/g' ./docs/index.html",
        // "perl -pi -w -e 's/src=\\//src=/g' ./docs/index.html" ,
        //  'perl -pi -w -e \'s/"\\/"/""/\' ./docs/main.js',
        // "perl -pi -w -e 's/\\/static\\/example-images\\//\\/vue-rt-style-kit-pages\\/static\\/example-images\\//g' ./docs/main.js\n",
        // "perl -pi -w -e 's/\\/static\\/images\\//\\/vue-rt-style-kit-pages\\/static\\/images\\//g' ./docs/main.js\n",
        //
        // "perl -pi -w -e 's/to\\:\\\"\\//to\\:\\\"\\/vue-rt-style-kit-pages\\/docs\\//g' ./docs/main.js\n",
        // "perl -pi -w -e 's/src=/src=\\/vue-rt-style-kit-pages\\//g' ./docs/index.html\n",
        // "perl -pi -w -e 's/vue-rt-style-kit-pages\\/docs\\/vue-rt-style-kit-pages\\/static\\/images/vue-rt-style-kit-pages\\/static\\/images/g' ./docs/main.js\n",
        // // "perl -pi -w -e 's/BasisGrotesqu/docs\\/BasisGrotesqu/g' ./docs/main.js",
        // 'perl -pi -w -e \'s/\\<\\/script\\>\\<\\/head\\>/\\<\\/script\\>\\<link rel\\=\\"stylesheet\\" href\\=\\"\\/vue-rt-style-kit-pages\\/fonts.css\\"\\/\\>\\<\\/head\\>/g\' ./docs/index.html\n',
        // "perl -p -i -e 's/docs\\/\"vendors/docs\\/vendors/g' ./docs/index.html\n",
        // "perl -p -i -e 's/docs\\/\"main/docs\\/main/g' ./docs/index.html\n",
        // // "perl -p -i -e 's/src=\\/vue-rt-style-kit-pages/src=\"\\/vue-rt-style-kit-pages/g' ./docs/index.html\n",
        //     "perl -p -i -e 's/path: \"\\//path: \"\\/vue-rt-style-kit-pages\\//g' ./docs/main.js\n",
        // 'perl -p -i -e \'s/\\{path:\"\\//\\{path:\\"\\/vue\\-rt\\-style\\-kit\\-pages\\//g\' ./docs/main.js \n',
        // "rm -rf ./dist\n",
        // "git commit -a -m'deploy docs'\n",
        // "git push\n",
        // "git checkout master"
    ])
);


// todo need to update this tasks for gulp 4
// gulp.task("start", shell.task(["npm start"]));
//
// gulp.task("deploy", ["copy", "start"]);
//
// gulp.task("image", () => {
//   gulp
//     .src("./newImages/*")
//     .pipe(
//       imagemin([
//         imagemin.jpegtran({
//           progressive: true
//         }),
//         imagemin.optipng({
//           optimizationLevel: 5,
//           progressive: true,
//           interlaced: true,
//           multipass: true
//         })
//       ])
//     )
//     .pipe(gulp.dest("tmpImages/"));
// });
//
// gulp.task("imageTiny", () => {
//   gulp
//     .src("./tmpImages/*")
//     .pipe(tiny())
//     .pipe(gulp.dest("./dist/"));
// });
//
// gulp.task("optimize", ["image", "imageTiny"]);
