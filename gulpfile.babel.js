const fs = require('fs');
const path = require('path');

const $ = require('gulp-load-plugins')();
const babelify = require('babelify');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');

const GulpConfig = require('./gulp_config');
const config = new GulpConfig(!!$.util.env.production);

gulp.task('main:js', () => {
    return browserify(config.main.js.entryFile)
        .transform(babelify)
        .bundle()
        .pipe(source(config.main.js.dstFile))
        .pipe(buffer())
        .pipe(config.forProduction ?
            $.uglify({
                compress: config.uglify.compressor
            }) :
            $.util.noop())
        .pipe(gulp.dest(config.main.js.tmpDir));
});

gulp.task('doc:nunjucks', () => {
    return gulp.src(config.doc.nunjucks.srcPattern)
        .pipe($.nunjucks.compile(config.getNunjucksData()))
        .pipe(gulp.dest(config.doc.nunjucks.dstDir));
});

gulp.task('main:sass', () => {
    return gulp.src(config.main.sass.srcPattern)
        .pipe($.sass({
            outputStyle: 'compressed'
        })).on('error', $.sass.logError)
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.main.sass.tmpDir));
});

gulp.task('doc:sass', () => {
    return gulp.src(config.doc.sass.srcPattern)
        .pipe($.sass()).on('error', $.sass.logError)
        .pipe($.autoprefixer())
        .pipe(gulp.dest(config.doc.sass.dstDir));
});

gulp.task('main:watch', (callback) => {
    gulp.watch(config.main.js.srcPattern, () => {
        gulp.start(['main:build'])
            .on('end', callback);
    });
    gulp.watch(config.main.sass.srcPattern, () => {
        gulp.start(['main:build'])
            .on('end', callback);
    });
});

gulp.task('doc:watch', (callback) => {
    gulp.watch(config.doc.nunjucks.pattern, () => {
        gulp.start(['doc:build'])
            .on('end', callback);
    });
    gulp.watch(config.doc.sass.srcPattern, () => {
        gulp.start(['doc:build'])
            .on('end', callback);
    });
});

gulp.task('main:embed_css', () => {
    const srcJs = path.join(
        config.main.js.tmpDir,
        config.main.js.dstFile
    );
    const srcCss = path.join(
        config.main.sass.tmpDir,
        config.main.sass.dstFile
    );

    return gulp.src(srcJs)
        .pipe($.replace(config.main.cssMarker, () => {
            return fs.readFileSync(
                path.join(srcCss),
                'utf8'
            ).trim().replace(/"/g, '\\"');
        }))
        .pipe(gulp.dest(config.main.js.dstDir));
});

gulp.task('main:build', (callback) => {
    runSequence(
        ['main:sass', 'main:js'],
        'main:embed_css',
        callback
    );
});

gulp.task('doc:build', ['doc:nunjucks', 'doc:sass']);

gulp.task('webserver', () => {
    return gulp.src(config.serverDirs)
        .pipe($.webserver({
            host: '0.0.0.0',
            livereload: true
        }));
});

gulp.task('dev', (callback) => {
    runSequence(
        ['main:build', 'doc:build'],
        ['main:watch', 'doc:watch', 'webserver'],
        callback
    );
});

gulp.task('default', ['main:build', 'doc:build']);