var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

//script paths
var jsFiles = 'assets/**/*.js',
    jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest(jsDest))
      .pipe(rename('scripts.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest(jsDest));
});

//scss paths
var scssFiles = 'assets/**/*.scss',
    cssDest = 'dist/css';

gulp.task('sass', function(){
  return gulp.src(scssFiles)
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(cssDest))
});
