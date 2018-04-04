'use strict'
const gulp = require('gulp');
const bulkSass = require('gulp-sass-bulk-import');
const watchSass = require('gulp-watch-sass');

const sass = require('gulp-sass');

gulp.task('css', () => gulp
  .src('./app/sass/*.scss')
  .pipe(bulkSass())
  .pipe(sass())
  .pipe(gulp.dest('./app/public/css'))
);

gulp.task('sass:watch', () => watchSass([
  './app/sass/**/*.{scss,css}'
]).pipe(sass())
  .pipe(gulp.dest('./app/public/css')));

gulp.task( 'default', [ 'css' ] );
