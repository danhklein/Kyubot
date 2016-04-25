
var gulp = require('gulp'),
  gutil = require('gulp-util'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  precss = require('precss'),
  cssnano = require('cssnano'),
  animation = require('postcss-animation'),
  lost = require('lost')


  source = 'process/css/',
  dest = 'style/';

gulp.task('html', function() {
  gulp.src(dest + '*.html');
});

gulp.task('css', function() {
  gulp.src(source + 'style.css')
  .pipe(postcss([
    precss(),
    animation(),
    autoprefixer(),
    cssnano(),
    lost()
  ]))
  .on('error', gutil.log)
  .pipe(gulp.dest(dest + 'css'));
});


gulp.task('default', ['html', 'css']);
