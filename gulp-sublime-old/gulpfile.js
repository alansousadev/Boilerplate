const gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var pug = require('gulp-pug');
var stylus      = require('gulp-stylus');
var postcss = require('gulp-postcss');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');
// var uncss = require('gulp-uncss');
// var fontmagician = require('postcss-font-magician');
var gcmq = require('gulp-group-css-media-queries');
var errorNotifier = require('gulp-error-notifier');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');


// // browser-sync/serv
function serve(){
	browserSync.init({
		server: {
				 baseDir: "./src"
		}
	});

	gulp.watch('src/pug/**/*.pug', gulp.series(pug1));
	gulp.watch(['src/assets/js/**.js','!src/assets/js/main.js'], gulp.series(js1));
	gulp.watch('src/styl/**/*.styl', gulp.series(stylus1));
	gulp.watch("src/*.html").on('change', browserSync.reload);

};

function pug1(done) {
	return gulp.src('./src/pug/pages/*.pug')
		.pipe(errorNotifier())
		.pipe(pug({
			pretty: true
		}))
		// .pipe(gulp.dest('./front'))
		.pipe(gulp.dest('./src'))
		.pipe(browserSync.stream());
	done();
}

function js1(done) {
	return gulp.src([
		// 'node_modules/wowjs/dist/wow.min.js',
		'src/assets/js/**.js',
		'!src/assets/js/main.js'])
		.pipe(uglify())
		.pipe(concat('main.js', {newLine: '\n\n'}))
		.pipe(gulp.dest('./src/assets/js'))
		.pipe(browserSync.stream());
	done();
}

function stylus1(done) {
	return gulp.src('./src/styl/*.styl')
		.pipe(errorNotifier())
		.pipe(stylus({
			use: [
				poststylus([ autoprefixer, rucksack, ])
			]
		}))
		.pipe(gcmq())
		.pipe(cleanCSS({compatibility: 'ie8'}))
		// .pipe(gulp.dest('./front/assets/css/'))
		.pipe(gulp.dest('./src/assets/css'))
		.pipe(browserSync.stream());
	done();
}

var src = ['./src/**/*','!src/pug/**', '!src/styl/**'];
var dist = './front';

var comp = function(){
    return gulp.src(src)
        .pipe(gulp.dest(dist));
};

function clean(cb) {
  // 
  cb();
}


exports.default = gulp.series(clean, gulp.parallel(serve));
exports.comp = comp;

