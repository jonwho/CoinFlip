var gulp = require('gulp');
var uncss = require('gulp-uncss');
var minify = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('uncss', function() {
  return gulp.src(['css/bootstrap.css', 'style/style.css']) 
    .pipe(uncss({
      // all new html files go into views directory so that this task
      // knows which css selectors to keep and which to get rid of
      html: ['index.html', 'views/**/*.html', './**/*.html']
    }))
    // uncss'd file saved into this directory
    .pipe(gulp.dest('css/uncss'));
});

// minify css in css directory
gulp.task('minify', function() {
  return gulp.src('css/*.css')
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});

// minify our uncss'd file and save to the same folder so we can compare
gulp.task('minify-uncss', function() {
  return gulp.src('css/uncss/*.css')
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(gulp.dest('css/uncss/mini.css'));
});

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
