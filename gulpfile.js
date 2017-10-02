var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var pug = require('gulp-pug');
var stylus      = require('gulp-stylus');
var postcss = require('gulp-postcss');
var poststylus = require('poststylus');
var autoprefixer = require('autoprefixer');
var rucksack = require('rucksack-css');
var fontmagician = require('postcss-font-magician');
var gcmq = require('gulp-group-css-media-queries');
var errorNotifier = require('gulp-error-notifier');

// browser-sync
gulp.task("serve", ["browser-sync", "pug", "stylus"], function(){
    gulp.start("watch:pug");
    gulp.start("watch:stylus");
});
gulp.task("browser-sync", function(){
      browserSync.init({
       server: {
           baseDir: "./src"
      }
   });

});

// template engina jade/pug
gulp.task("pug", function(){
    return gulp.src('./src/pug/*.pug')
      .pipe(errorNotifier())
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest('./build'))
      .pipe(gulp.dest('./src'))
      .on('end', browserSync.reload);
});

// pre-processador stylus
gulp.task("stylus", function(){
  return gulp.src('./src/styl/*.styl')
        .pipe(errorNotifier())
        .pipe(stylus({
          use: [
            poststylus([ autoprefixer, rucksack,fontmagician ])
          ]
        }))
        .pipe(gcmq())
        //.pipe(gulp.dest('./build/css/'))
        .pipe(gulp.dest('./src/css'))
        .on('end', browserSync.reload);
});

// Funções de monitoramento 
gulp.task("watch:pug", function () {
    browserSync.watch("./src/pug/**/*.pug").on("change", function () {
        gulp.start("pug");
    });
});

gulp.task("watch:stylus", function () {
    browserSync.watch("src/styl/**/*.styl").on("change", function () {
        gulp.start("stylus");
    });
});

//compilar 
gulp.task('comp',function() {
  gulp.src('src/css/**/*')
      .pipe(gulp.dest('./build/css')),
  gulp.src('src/js/**/*')
    .pipe(gulp.dest('./build/js')),    
  gulp.src('src/img/**/*')
    .pipe(gulp.dest('./build/img')),
  gulp.src('src/favicon.png')
      .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['serve']);
gulp.task('compilar', ['comp']);
