var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
   gulp.watch("*.html").on("change", browserSync.reload);
   gulp.watch("css/*.css").on("change", browserSync.reload);
});