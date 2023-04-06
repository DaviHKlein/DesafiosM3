const {src, dest, watch, parallel} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');
const connect = require("gulp-connect");

const paths = {
    html:{
        all: "src/templates/**/*.html"
    },

    styles:{
        all: "src/styles/**/*.scss",
        main:"src/styles/main.scss"
    },

    scripts:{
        all: 'src/scripts/**/*.js',
        main: 'src/scripts/script.js'
    },

    images: 'src/images/*.png',

    dist:{
        output: 'dist',
        outputImage: 'dist/images',
    }
}

function styles(){
    return src(paths.styles.main).pipe(sass({ outputStyle: "compressed"}).on("error", sass.logError)).pipe(dest(paths.dist.output)).pipe(connect.reload());
}

function scripts(){
    return browserify(paths.scripts.main)
    .transform(
        babelify.configure({
            presets: ["@babel/preset-env"],
        })
    ).bundle().pipe(source('bundle.js')).pipe(buffer())
    .pipe(uglify())
    .pipe(dest(paths.dist.output)).pipe(connect.reload());
}

function server(){
    connect.server({
        root: paths.dist.output,
        livereload: true,
        port: 3000,
    });
}

function sentinel(){
    watch(paths.images, {ignoreInitial: false}, images);
    watch(paths.html.all, {ignoreInitial: false}, html);
    watch(paths.styles.all, {ignoreInitial: false}, styles);
    watch(paths.scripts.all, {ignoreInitial: false}, scripts);
}

function html(){
    return src(paths.html.all).pipe(dest(paths.dist.output))
}

function images(){
    return src(paths.images).pipe(dest(paths.dist.outputImage))
}

exports.default = parallel(server,sentinel)