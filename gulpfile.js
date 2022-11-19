const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function build_css() {

    return gulp.src('./src/sass/**/main.scss')
        /* Return gulp method of our object. 
        1: Source file into the source file into the folder and any subfolder, looking for the scss file */

        // Pipe commands:

        // Include the pipe command for sourcemaps
        .pipe(sourcemaps.init())

        // Build Sass, log the errors if there are any errors
        .pipe(sass({
            // minify/compress the sass file by defining the outputStyle
            outputStyle: 'compressed'
        }).on('error', sass.logError))

        // Print the sourcemap into the main.css file
        .pipe(sourcemaps.write())

        // Build into the build/css folder
        .pipe(gulp.dest('./build/css'));
    
}

// Make the function available
exports.build_css = build_css;

function build_js() {
    // Files are concatenated in the order they're put in
    return gulp.src([
            './src/js/aos/aos.js', 
            './src/js/main.js',])
        // 
        .pipe(concat({ path: 'main.js'}))
        .pipe(minify({
            ext:{
                min:'.js'
            },
        }))
        // Build into the build/js folder
        .pipe(gulp.dest('./build/js/'));
};

exports.build_js = build_js;

// Watch the styles and scripts for changes to rebuild the files
exports.watch = function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series(build_css));
    gulp.watch('./src/js/**/*.js', gulp.series(build_js));
}