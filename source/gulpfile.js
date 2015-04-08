var gulp = require('gulp');
var babel = require('gulp-babel');
var cp = require('child_process');

gulp.task('default', ['build:client', 'build:server', 'watch'], function () {
  gulp.start('server:spawn');
});

gulp.task('watch', function () {
  gulp.watch('src/client/**/*.js', ['build:client']);
  gulp.watch('src/server/*.js', ['build:server']);
  gulp.watch('server.js', ['server:restart']);
});

gulp.task('build:client', function () {
  cp.spawn('webpack', {stdio: 'inherit'});
});

gulp.task('build:server', function () {
  return gulp.src('src/server/*.js')
    .pipe(babel({ optional: 'runtime' }))
    .pipe(gulp.dest('server'));
});

gulp.task('server:spawn', function () {
    spawnServer();
});

gulp.task('server:kill', function () {
    killServer();
});

gulp.task('server:restart', function () {
    killServer();
    spawnServer();
});

var _p;

function spawnServer () {
    if (_p) {
        _p.kill();
    }

    _p = cp.spawn('node', ['server/server.js'], {
        stdio: 'inherit'
    });
}

function killServer () {
    if (_p) {
        _p.kill();
    }
}

process.on('exit', function () {
    killServer();
});

