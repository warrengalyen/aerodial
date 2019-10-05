require('babel/register');

const $ = require('gulp-load-plugins')();
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const del = require('del');
const gulp = require('gulp');
const runSequence = require('run-sequence');
const source = require('vinyl-source-stream');

const GulpConfig = require('./gulp_config');
const util = require('gulp-util');
const config = new GulpConfig(!!util.env.production);

gulp.task('clean', () => {
	return del(config.clean.patterns);
});

gulp.task('main:cjs', () => {
	return gulp.src(config.main.js.srcPattern)
		.pipe($.babel({
			presets: ['es2015'],
			plugins: ['add-module-exports']
		}))
		.pipe(gulp.dest(config.main.js.cjsDir));
});

gulp.task('main:js', ['main:cjs'], () => {
	return browserify(config.main.js.indexFile)
		.bundle()
		.pipe(source(config.main.js.dstName))
		.pipe(buffer())
		.pipe(config.forProduction ?
			$.uglify({
				compress: config.uglify.compressor
			}) :
			$.util.noop())
		.pipe(gulp.dest(config.main.js.dstDir))
		.pipe(gulp.dest(config.doc.js.dstDir));
});

gulp.task('doc:js', () => {
	return gulp.src(config.doc.js.srcPattern)
		.pipe($.babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(config.doc.js.dstDir));
});

gulp.task('doc:nunjucks', () => {
	return gulp.src(config.doc.nunjucks.srcPattern)
		.pipe($.nunjucks.compile(config.getNunjucksData()))
		.pipe(gulp.dest(config.doc.nunjucks.dstDir));
});

gulp.task('main:sass', () => {
	return gulp.src(config.main.sass.srcPattern)
		.pipe($.sass(config.main.sass.options))
		.on('error', $.sass.logError)
		.pipe($.autoprefixer())
		.pipe($.rename(config.main.sass.dstName))
		.pipe(gulp.dest(config.main.sass.dstDir))
		.pipe(gulp.dest(config.doc.sass.dstDir));
});

gulp.task('doc:sass', () => {
	return gulp.src(config.doc.sass.srcPattern)
		.pipe($.sass()).on('error', $.sass.logError)
		.pipe($.autoprefixer())
		.pipe(gulp.dest(config.doc.sass.dstDir));
});

gulp.task('main:watch', (callback) => {
	gulp.watch(config.main.js.srcPattern, () => {
		gulp.start(['main:js'])
			.on('end', callback);
	});
	gulp.watch(config.main.sass.srcPattern, () => {
		gulp.start(['main:sass'])
			.on('end', callback);
	});
});

gulp.task('doc:watch', (callback) => {
	gulp.watch(config.doc.js.srcPattern, () => {
		gulp.start(['doc:js'])
			.on('end', callback);
	});
	gulp.watch(config.doc.nunjucks.pattern, () => {
		gulp.start(['doc:nunjucks'])
			.on('end', callback);
	});
	gulp.watch(config.doc.sass.srcPattern, () => {
		gulp.start(['doc:sass'])
			.on('end', callback);
	});
});

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

gulp.task('release:js', ['main:js'], () => {
	return gulp.src(config.release.js.srcFile)
		.pipe($.rename(config.release.js.dstName))
		.pipe(gulp.dest(config.release.js.dstDir));
});

gulp.task('pack:css', ['main:sass'], () => {
	return gulp.src(config.release.css.srcFile)
		.pipe($.rename(config.release.css.dstName))
		.pipe(gulp.dest(config.release.css.dstDir));
});

gulp.task('release', (callback) => {
	runSequence(
		['release:js', 'release:css'],
		callback
	);
});

gulp.task('main:build', ['main:sass', 'main:js']);
gulp.task('doc:build', ['doc:js', 'doc:nunjucks', 'doc:sass']);
gulp.task('default', ['main:build', 'doc:build']);