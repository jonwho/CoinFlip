var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var reload = browserSync.reload;

// build a css file of only used classes removing unused css classes
gulp.task('uncss', function() {
  return gulp.src('style/style.css') 
    .pipe(uncss({
      // all new html files go into views directory so that this task
      // knows which css selectors to keep and which to get rid of
      html: ['index.html', 'views/**/*.html', './**/*.html']
    }))
    // uncss'd file saved into this directory
    .pipe(gulp.dest('dist/css'));
});

// minify css in dist/css directory
gulp.task('minify', ['uncss'], function() {
  return gulp.src('dist/css/style.css')
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/style.min.css'));
});

// prepare production ready code into dist directory
// gulp.task('build', ['minify', 'uglifyjs'], function() {
//   console.log("Done.");
// });

// get jshint all js files then concat them into coinflip.min.js
// uglify coinflip.min.js
// save uglify'd coinflip.min.js to dist/js directory
gulp.task('uglifyjs', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint())
    .pipe(concat('coinflip.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
})

// linter for JavaScript
gulp.task('lint', function() {
  return gulp.src('/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

// lints files first then loads app to browser
gulp.task('browser-sync', ['lint'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  // sync the browser when these files change
  gulp.watch(['index.html', 'styles/**/*.css', 'scripts/**/*.js', 'views/**/*.html'], {cwd: './'}, reload);
});

// gulp with no args runs this task
gulp.task('default', ['browser-sync']);

gulp.task('build-index', function () {
  var assets = useref.assets();
  
  return gulp.src(['index.html'])
  .pipe(assets)
  .pipe(gulpif('js/**/*.js', uglify()))
  .pipe(gulpif('style/style.css', minify()))
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest('dist'));
});

gulp.task('build-fonts', function () {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

gulp.task('build-assets', function () {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('dist/assets'));
});

gulp.task('build-firebase', function () {
  return gulp.src('firebase.json')
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['build-index', 'build-fonts', 'build-assets'], function () {
  var assets = useref.assets();
    
  return gulp.src(['views/**/*.html'])
    .pipe(assets)
    .pipe(gulpif('js/**/*.js', uglify()))
    .pipe(gulpif('style/style.css', minify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist/views'));
});