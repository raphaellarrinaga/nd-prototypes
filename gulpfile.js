'use strict';

var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var php2html = require("gulp-php2html");
var del = require('del');

gulp.task('cleandist', function() {
  return del('./dist/v1/*');
});

gulp.task('phptohtml', function() {
  return gulp.src("./v1/*.php")
    .pipe(php2html())
    .pipe(gulp.dest("./dist/v1"));
});

gulp.task('copybootstrap', function() {
  return gulp.src("./bootstrap/**/*")
    .pipe(gulp.dest("./dist/bootstrap"));
});

gulp.task('copyimages', function() {
  return gulp.src("./v1/images/**/*")
    .pipe(gulp.dest("./dist/v1/images"));
});

gulp.task('build', ['cleandist'], function() {
  gulp.src("./index.php")
    .pipe(php2html())
    .pipe(gulp.dest("./dist"));
  gulp.src("./version/*.php")
    .pipe(php2html())
    .pipe(gulp.dest("./dist/v1"));
  gulp.src("./bootstrap/**/*")
    .pipe(gulp.dest("./dist/bootstrap"));
  gulp.src("./version/images/**/*")
    .pipe(gulp.dest("./dist/v1/images"));
});

/**
 * Deploy production style guide on github
 * Automatically publish on a gh-pages branch
 */

gulp.task('deploy', function() {
  return gulp.src(`./dist/**/*`)
    .pipe(ghPages({
      'push': false, // false will run dry test
    }));
});
