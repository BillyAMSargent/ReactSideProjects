"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); // run dev server
var open = require('gulp-open'); // open url in browser
var concat = require('gulp-concat') // concats files (duh)
var lint = require('gulp-eslint') // lints.. are these comments worth it? 

var browserify = require('browserify'); // bundle js
var reactify = require('reactify'); // transform React jsx to js
var source = require('vinyl-source-stream'); // text streams with gulp

var config = {
    port: 9000,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ],
        mainJs: './src/main.js',
        dist: './dist'
    }
};

// start local dev server
gulp.task('connect', function (done) {
    connect.server({
        name: 'dummy',
        root: 'dist',
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    })
    done();
});

// open browser after starting server
gulp.task('open', gulp.series('connect', function() {
    return gulp.src('dist/index.html')
        .pipe(open({ 
            uri: config.devBaseUrl + ':' + config.port + '/',
            app: 'chrome'
        }))
}));

// html from src to dist
gulp.task('html', function() {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});

// js from src to dist
gulp.task('js', function() {
    return browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('css', function() {
    return gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
})


gulp.task('lint', function() {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format())
        .pipe(lint.failAfterError());
})

gulp.task('watch', function() {
    gulp.watch(config.paths.html, gulp.series('html'));
    gulp.watch(config.paths.js, gulp.series('js', 'lint'));
});

gulp.task('default', gulp.series('html', 'js', 'css', 'lint', 'open', 'watch'));
