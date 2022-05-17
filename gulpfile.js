const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const del = require('del');

gulp.task('styles', () => {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/'));
});

gulp.task('clean', () => {
  return del([
    'assets/main.css',
  ]);
});

gulp.task('default', gulp.series(['clean', 'styles']));