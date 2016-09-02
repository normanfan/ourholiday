var gulp = require('gulp');
var plumber = require('gulp-plumber')
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var swig = require('gulp-swig');
//编译swig 模板
gulp.task('templates', function() {
  gulp.src('swig/**/*.html')
    .pipe(swig({
      defaults: {
        cache: false
      }
    }))
    .pipe(gulp.dest('views'))
});

// 编译sass
gulp.task('sass', function() {
    gulp.src('sass/**/*.scss')
      .pipe(plumber())
      .pipe(sass()).pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest('public/stylesheets'))
  })
  //观察
gulp.task('sass:w', function() {
  gulp.watch('sass/**/*.scss', ['sass'])
})

gulp.task('template:w', function() {
  gulp.watch('swig/**/*.html', ['templates'])
})

gulp.task('default', ['sass','sass:w'], function() {
  console.log('compiler');
})
