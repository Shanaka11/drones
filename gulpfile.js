const gulp = require('gulp');
const run = require('gulp-run');
const gulpClean = require('gulp-clean');
const replace = require('gulp-replace');

function clean() {
    console.log("Start cleaning old builds.");
    return gulp.src('dist', {read: false, allowEmpty: true})
        .pipe(gulpClean())
}

function runWebpack() {
    console.log("Start building server with webpack.");
    return run('yarn webpack --mode production').exec();
}

function copyPackageJson() {
    console.log("Copying package.json file to dist directory.");
    // gulp.src('build/index.js.map', {read: false}).pipe(gulpClean());
    return gulp.src('package.json').pipe(gulp.dest('dist/'));
}

function installingDependencies() {
    process.env.NODE_ENV = "production";
    process.chdir('dist/');
    console.log("Running npm install to fetch bundle dependencies.");
    return run('yarn install').exec();
}

const build = gulp.series(runWebpack, copyPackageJson, installingDependencies);

exports.build = build;
exports.clean = clean;
exports.default = gulp.series(clean, build);