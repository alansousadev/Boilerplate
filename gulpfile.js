var gulp = require('gulp');
//var postcss = require('gulp-postcss');
//var autoprefixer = require('autoprefixer');
//var precss = require('precss');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var errorNotifier = require('gulp-error-notifier');
var pug = require('gulp-pug');
var stylus      = require('gulp-stylus');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var gcmq = require('gulp-group-css-media-queries');




gulp.task("serve", ["browser-sync", "pug", "stylus"], function(){
    gulp.start("watch:html");
    gulp.start("watch:pug");
    gulp.start("watch:stylus");
});

// browser-sync
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
        .pipe(stylus())
        .pipe(gcmq())
        .pipe(gulp.dest('./build/css/'))
        .pipe(gulp.dest('./src/css'))
        .on('end', browserSync.reload);
});

// Funções de monitoramento 
gulp.task("watch:pug", function () {
    browserSync.watch("./src/pug/**/*.pug").on("change", function () {
        gulp.start("pug");
    });
});

gulp.task("watch:html", function () {
    browserSync.watch("./src/*.html").on("change", function () {
        browserSync.reload();
    });
});

gulp.task("watch:stylus", function () {
    browserSync.watch("src/styl/*.styl").on("change", function () {
        gulp.start("stylus");
    });
});

gulp.task("watch:css", function () {
    browserSync.watch("./src/css/*.css").on("change", function () {
        browserSync.reload();
    });
});

// icones spritee css
gulp.task('sprite', function () {
  var spriteData = gulp.src('src/img/ico*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '../../src/css/sprite.css',
    algorithm: 'top-down'
  }));
  return spriteData.pipe(gulp.dest('build/img'));
});


// imagem minificada
gulp.task('images', () =>
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
);


//copy fonts e js
gulp.task('fonts',function() {
  gulp.src('src/css/**/*')
      .pipe(gulp.dest('build/css'));
});

gulp.task('js',function() {
  gulp.src('src/js/**/*')
      .pipe(gulp.dest('build/js'));
});


gulp.task('default', ['serve','sprite','images','fonts', 'js']);
