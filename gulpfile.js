const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
// The second require in Line 2 defines the dependency
const sourcemaps = require('gulp-sourcemaps');
// Line 4 links the sourcemaps needed for main.css to load on most browsers

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

// Get Gulp/SASS to watch the styles for changes and will run the "build" script (aka the build_css function)
exports.watch = function () {
    gulp.watch('./src/sass/**/*.scss', gulp.series(build_css) );
}