const gulp = require('gulp');

const browserify = require('browserify');
const babelify    = require('babelify');
const source      = require('vinyl-source-stream');
const buffer      = require('vinyl-buffer');
const uglify      = require('gulp-uglify');
const sourcemaps  = require('gulp-sourcemaps');
const livereload  = require('gulp-livereload');


gulp.task('build', function () {
  // app.js is your main JS file with all your module inclusions
  return browserify({entries: './src/app.js', debug: true})
    .transform("babelify", { presets: ["es2015"] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

gulp.task('watch', ['build'], function () {
  livereload.listen();
  gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ['watch']);
