var gulp = require('gulp'),
  gulpUtil = require('gulp-util'),
  path = {
    src: 'src/',
    srcHelpers: 'src/helpers/',
    srcImages: 'src/images/',
    srcLib: 'src/lib/',
    srcStyles: 'src/styles/',
    srcModules: 'src/modules/',
    srcComponents: 'src/modules/components/',
    srcScenes: 'src/modules/scenes/',
    build: 'build/',
    buildJS: 'build/js/',
    buildLib: 'build/js/lib/',
    buildStyles: 'build/styles/',
    buildImages: 'build/styles/images/'
  },

  BUILD_DEBUG = true;


gulp.task('lint',function() {
  var jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish');

  return gulp.src([path.src + '*.js' , path.modules + '*.js', path.modules + '**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('javascript',function() {
  var browserify = require('gulp-browserify'),
    uglify,
    stream;

  stream = gulp.src(path.src + '*.js')
    .pipe(browserify());

  if(!BUILD_DEBUG) {
    uglify = require('gulp-uglify');
    stream.pipe(uglify());
  }

  return stream.pipe(gulp.dest(path.buildJS));

});

gulp.task('scss',function() {
  var sass = require('gulp-sass');
  return gulp.src(path.srcStyles + '*.scss')
    .pipe(sass())
    .pipe(gulp.dest(path.buildStyles));
});

gulp.task('jade',function() {
  var jade = require('gulp-jade');
  return gulp.src(path.src + '*.jade')
    .pipe(jade())
    .pipe(gulp.dest(path.build));
});

gulp.task('jslib',function() {
  return gulp.src(path.srcLib + '*.js')
    .pipe(gulp.dest(path.buildLib));
});

gulp.task('images',function() {
  return gulp.src(path.srcImages + '*.*')
    .pipe(gulp.dest(path.buildImages));
});

gulp.task('copy',['jslib','images']);
gulp.task('styles',['scss']);
gulp.task('default',['lint','copy','jade','styles','javascript']);


