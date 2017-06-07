var gulp = require('gulp');

//Require the gulp sass plugin
var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

//Concats CSS/JS files if needed
var useref = require('gulp-useref');

var uglify = require('gulp-uglify');

var gulpIf = require('gulp-if');

var cssNano = require('gulp-cssnano');

var del = require('gulp-del');

//Run gulp sass plugin
gulp.task('sass', function() {
		return gulp.src('scss/**/*.scss')//Gets all the files ending with.scss in /scss and children dirs
				.pipe(sass()) //Using gulp-sass
				.pipe(gulp.dest('css/'))
				.pipe(browserSync.reload({
				   stream: true
				}))
});

//Tell gulp to reload website automatically
gulp.task('browserSync', function() {
       browserSync.init({
	       server: {
		     baseDir: ''
			 },
	   })
})

//Make sure that gulp funs browserSync and sass before watching for changes
gulp.task('watch', ['browserSync', 'sass'], function() {
       gulp.watch('scss/**/*.scss', ['sass']);
	   //Reloads whenever JS or html changes
	   gulp.watch('*.html', browserSync.reload);
	   gulp.watch('js/**/*.js', browserSync.reload);
})
				

//Concats files into single file!!
gulp.task('useref', function() {
      return gulp.src('*.html')
	  .pipe(useref())
	  // Minifies only if it's a Javascropt file
	  .pipe(gulpIf('*.js', uglify()))
	  .pipe(gulpIf('*.css', cssNano()))
	  .pipe(gulp.dest('dist'))
});

gulp.task('del', function(){
     return del.sync('dis');
}))
