var gulp = require("gulp"),
    minifyCSS = require("gulp-minify-css"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    prefix = require("gulp-autoprefixer"),
    sass = require("gulp-sass"),
    eslint = require("gulp-eslint"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename"),
    rollup = require("gulp-better-rollup"),
    babel = require("rollup-plugin-babel");

gulp.task("lint", function () {
    return gulp
        .src("src/js/**.js")
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task("js", function() {
    return gulp
        .src("src/js/leaflet-gesture-handling.js")
        .pipe(sourcemaps.init())
        .pipe(
            rollup(
                { plugins: [babel()] },
                {
                    file: "dist/leaflet-gesture-handling.js",
                    format: "umd"
                }
            )
        )
        .pipe(gulp.dest("dist/"))
        .pipe(uglify())
        .pipe(rename({ extname: ".min.js" }))
        .pipe(sourcemaps.write(""))
        .pipe(gulp.dest("dist/"));
});

gulp.task("styles", function() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(sass())
        .pipe(prefix("last 2 versions"))
        .pipe(concat("leaflet-gesture-handling.css"))
        .pipe(gulp.dest("dist/"))
        .pipe(minifyCSS())
        .pipe(rename({ extname: ".min.css" }))
        .pipe(gulp.dest("dist/"));
});

gulp.task("test", function () {
    gulp.run("lint");
});

gulp.task("dev", function() {
    gulp.run("styles");
    gulp.run("js");
    gulp.watch("src/scss/*.scss", ["styles"]);
    gulp.watch("src/js/*.js", ["lint", "js"]);
});

gulp.task("build", function() {
    gulp.run("test");
    gulp.run("styles");
    gulp.run("js");
});
