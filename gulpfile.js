var gulp = require('gulp'),
    browsersync = require('browser-sync'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function () {
    gulp.src('app/stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('app'));
});

gulp.task('browsersync', function() {
    browsersync({
        server: {
            baseDir: 'app'
        },
    });
});

gulp.task('watch', ['browsersync', 'stylus'], function() {
    gulp.watch('app/stylus/*.styl', ['stylus']);
    gulp.watch('app/*.html', browsersync.reload);
    gulp.watch('app/*.css', browsersync.reload);
    gulp.watch('app/*.js', browsersync.reload);
});

gulp.task('default', ['watch']);
