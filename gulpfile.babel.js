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
		.pipe($.rename(config.main.sass.dstFile))
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

gulp.task('main:build', ['main:sass', 'main:js']);
gulp.task('doc:build', ['doc:js', 'doc:nunjucks', 'doc:sass']);
gulp.task('default', ['main:build', 'doc:build']);