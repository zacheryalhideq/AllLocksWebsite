const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Task to minify JavaScript files
gulp.task('minify-js', function() {
  return gulp.src('scripts/*.js')  // Source all JS files under /scripts
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' })) // Add .min suffix to minified files
    .pipe(gulp.dest('scripts/mini')); // Output to /scripts/mini
});

// Default task to run the minify task
gulp.task('default', gulp.series('minify-js'));
