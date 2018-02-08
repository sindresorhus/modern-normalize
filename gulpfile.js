const gulp = require('gulp');
const plumber = require('gulp-plumber');
const cleanCss = require('gulp-clean-css');
const rename = require('gulp-rename');

gulp.task('cleancss', () => {
  return (
    gulp.src('./modern-normalize.css')
      .pipe(plumber())
      .pipe(cleanCss())
      .pipe(rename('modern-normalize.min.css'))
      .pipe(gulp.dest('./'))
  );
});

gulp.task('default', () => {
  gulp.watch('./modern-normalize.css', ['cleancss']);
});
