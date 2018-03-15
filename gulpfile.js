
var gulp = require('gulp'),
    minifyCSS = require('gulp-minify-css'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    prefix = require('gulp-autoprefixer')
    sass = require('gulp-sass'),
    rename = require('gulp-rename');


gulp.task('js', function(){
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('styles', function(){
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(prefix('last 2 versions'))
    .pipe(concat('leaflet-gesture-handling.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(minifyCSS())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('dist/css'))
});


// gulp.task('dev', function() {
//     gulp.run('styles')
//     gulp.run('js')
//     gulp.watch('src/sass/**/*.sass', function(){
//         gulp.run('styles')
//     })
// });


gulp.task('dev', function () {

    gulp.run('styles')
    gulp.run('js')
    gulp.watch('src/scss/*.scss',['styles']);
    gulp.watch('src/js/*.js',['js']);

  });