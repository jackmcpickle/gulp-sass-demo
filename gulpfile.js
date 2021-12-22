'use strict';
const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
    return src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass.sync({ includePaths: ['node_modules'] }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./dist/css'));
}

exports.buildStyles = buildStyles;
