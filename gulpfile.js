const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const concat = require('gulp-concat');

function build_css() {

    return src('./src/sass/**/main.scss')
        // Add source files into respective (sub)folders

        // Include the pipe command for sourcemaps
        .pipe(sourcemaps.init())

        // Build Sass, log the errors if there are any errors
        .pipe(sass({
            // minify/compress the sass file by defining the outputStyle
            outputStyle: 'compressed'
        }).on('error', sass.logError))

        // Print the sourcemap into the same main.css file
        .pipe(sourcemaps.write())

        // Build into the build/css folder
        .pipe(dest('./build/css'));
    
}

function build_js() {
    // Files are concatenated in the order that they would be printed in the destination folder/file
    return src([
            './src/js/aos/aos.js', 
            './src/js/main.js',])
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(concat({ path: 'main.js'}))
        .pipe(sourcemaps.write())
        .pipe(dest('./build/js/'));
};

function watchTasks() {
    watch('./src/sass/**/*.scss', build_css);
    watch('./src/js/**/*.js', build_js);
}

// Add 'exports' for gulp to perform the series of functions
exports.default = series(build_css, build_js, watchTasks);