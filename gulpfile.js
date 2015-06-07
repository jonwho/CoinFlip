var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var del = require('del');
var reload = browserSync.reload;

/*
 * Checks if the HTML files actually use all the the CSS
 * if not then only build a CSS file that has classes used.
 */
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

/*
 * Minifies the uncss'd version to save on file size.
 */
gulp.task('minify', ['uncss'], function() {
  return gulp.src('dist/css/style.css')
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css/style.min.css'));
});

/*
 * Linter that notifies us if we write
 * bad JavaScript based on jshintrc settings.
 */
gulp.task('lint', function() {
  return gulp.src('/scripts/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

/*
 * Loads our app and reloads whenever the files we
 * watch change. This task saves us time on refreshing
 * our browsers and it syncs to all open browsers.
 * i.e. can test on the big 3 Firefox, Chrome, and IE
 * at once since it syncs user usage.
 */
gulp.task('browser-sync', ['lint'], function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  // sync the browser when these files change
  gulp.watch(['index.html', 'styles/**/*.css', 'scripts/**/*.js', 'views/**/*.html'], {cwd: './'}, reload);
});

/*
 * Same task as browser-sync excpe this time it's
 * serving the distribution version of the app.
 */
gulp.task('serve-dist', ['lint'], function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    }
  });

  // sync the browser when these files change
  gulp.watch(['index.html', 'styles/**/*.css', 'scripts/**/*.js', 'views/**/*.html'], {cwd: './'}, reload);
});

/*
 * Deletes the dist directory. Uses a callback so
 * that other tasks have to wait on this task to
 * finish first before running itself.
 */
gulp.task('clean-dist', function(cb) {
  del(['dist'], cb);
});

/*
 * Builds the assets for index.html and had to do
 * this separate because of file structure.
 */
gulp.task('build-index', ['clean-dist'], function () {
  var assets = useref.assets();
  
  return gulp.src(['index.html'])
  .pipe(assets)
  //.pipe(gulpif('js/**/*.js', uglify()))
  .pipe(gulpif('style/style.css', minify()))
  .pipe(assets.restore())
  .pipe(useref())
  .pipe(gulp.dest('dist'));
});

/*
 * Builds fonts to dist.
 */
gulp.task('build-fonts', ['clean-dist'], function () {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));
});

/*
 * Builds assets to dist.
 */
gulp.task('build-assets', ['clean-dist'], function () {
  return gulp.src('assets/**/*')
    .pipe(gulp.dest('dist/assets'));
});

/*
 * Builds firebase.json to dist. Useful if you're using
 * the 'firebase deploy' command to serve in production.
 */
gulp.task('build-firebase', ['clean-dist'], function () {
  return gulp.src('firebase.json')
    .pipe(gulp.dest('dist'));
});

/*
 * Calls the other build tasks to run concurrently and also
 * builds the views to dist.
 */
gulp.task('build', ['build-index', 'build-fonts', 'build-assets'], function () {
  var assets = useref.assets();
    
  return gulp.src(['views/**/*.html'])
    .pipe(assets)
    //.pipe(gulpif('js/**/*.js', uglify()))
    .pipe(gulpif('style/style.css', minify()))
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(gulp.dest('dist/views'));
});

/*
 * The default gulp task that runs when
 * no tasks are supplied.
 */
gulp.task('default', ['browser-sync']);