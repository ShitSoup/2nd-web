var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sassP', function(){
  // ['index.scss', 'style.scss']引入多个资源文件
  // *.scss 匹配当前目录下所有以.scss结尾的文件
  // **/*.scss匹配前目录的所有子目录下，以.scss结尾的文件
  // !index.scss不包含名为index.scss文件
  // *.+(scss|sass) 匹配当前目录下所有以.scss或者.sass结尾的文件
  return gulp.src('*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
});
// 编译后，如果想监听修改编译，只需增加wacth
gulp.task('watch-sass', function () {
  gulp.watch('*.scss', gulp.series('sassP'));
})
