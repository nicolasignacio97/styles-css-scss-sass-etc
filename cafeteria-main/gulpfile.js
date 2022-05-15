const { src, dest, watch, series } = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));



function css(done) {
    src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('build/css'));
    done();
}

function dev() {
    watch('src/scss/**/*.scss', css);
    watch('src/img/**/*', imagenes);
}

function imagenes(done) {
    src('src/img/**/*')
        .pipe(imagemin({ optimizationLevel: 3 }))
        .pipe(dest('build/img'));
    done();
}
exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;

exports.default = series(imagenes, css, dev);
