const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

var autoprefixer = require('gulp-autoprefixer');
const rtlcss = require('gulp-rtlcss');
const rename = require('gulp-rename');
// var sourcemaps = require('gulp-sourcemaps');
function style() {
  // 1. where is scss file
  return gulp.src('./sass/**/*.scss')
  // 2. pass that file through scss compiler
    .pipe(sass())
  // 3. Where I save my compiled css
      .pipe(autoprefixer(["last 2 versions", "> 1%"]))
    .pipe(gulp.dest('./css/'))
    .pipe(rtlcss()) // Convert to RTL.
    .pipe(rename({ suffix: '-rtl' }))
      .pipe(gulp.dest('./css/'))
    // stream changes to all browser
    .pipe(browserSync.stream());
}

// function miniCss() {
//   // 1. where is css file
//   return gulp.src('css/style.css')
//   // 2. pass that file through uglifycss
//     .pipe(uglifycss())
//   // 3. Where I save my minify css
//     .pipe(gulp.dest('dist/'))
//
//     // stream changes to all browser
//     .pipe(browserSync.stream());
// }

// function miniJs() {
//   // 1. where is js file
//   return gulp.src('js/main.js')
//   // 2. pass that file through uglify
//     .pipe(uglify())
//   // 3. Where I save my minify js
//     .pipe(gulp.dest('/'))
//
//     // stream changes to all browser
//     .pipe(browserSync.stream());
// }


// add watch function for all functions
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./sass/**/*.scss', style);
  // gulp.watch('css/style.css', miniCss);
  // gulp.watch('css/style.css', miniJs);
  gulp.watch('./*.html').on('change', browserSync.reload);
  // gulp.watch('js/**/*.js').on('change', browserSync.reload);
}
exports.style = style;
// exports.miniCss = miniCss;
// exports.miniJs = miniJs;
exports.watch = watch;