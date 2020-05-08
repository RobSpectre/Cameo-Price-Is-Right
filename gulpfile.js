var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');
var livereload = require('gulp-livereload');
var open = require('gulp-open');
var postcss = require('gulp-postcss');
var babelify = require('babelify');
var vueify = require('vueify-next');
var bro = require('gulp-bro');


gulp.task('sass', function () {
  return gulp.src('./styles/source/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'))
    .pipe(livereload());
});

gulp.task('lint', function() {
  return gulp.src(['./js/*.js', '*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('watch', function() {
  gulp.watch('./styles/source/*.scss', gulp.series('sass', 'css'));
  gulp.watch('tailwind.config.js', gulp.series('sass', 'css'));
  gulp.watch('./js/*.js', gulp.series('lint', 'js'));
  gulp.watch('./js/App.vue', gulp.series('js'));
  gulp.watch('./components/*', gulp.series('js'));
  gulp.watch('*.html', livereload());
  gulp.watch('./decks/*.json', gulp.series('js'));
  livereload.listen()
});

gulp.task('serve', function() {
  gulp.src('./')
    .pipe(webserver({
      host: '0.0.0.0',
      livereload: true,
    }));
});

gulp.task('open', function() {
  var options = {
    app: 'google-chrome',
    uri: 'http://localhost:8000'
  };
  return gulp.src(__filename)
  .pipe(open(options));
});

gulp.task('css', function () {
  return gulp.src('./styles/*.css')
    .pipe(postcss())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});


gulp.task('js', function() {
  return gulp.src(['./js/app.*', './js/App.vue', './components/*.vue'])
    .pipe(bro({transform: ['babelify',
                           vueify]}))
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('default',
          gulp.series('sass', 'css', 'lint', 'js', gulp.parallel('serve', 'watch', 'open')));
