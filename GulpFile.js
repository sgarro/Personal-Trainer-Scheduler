// var NwBuilder = require('node-webkit-builder');
// var gulp = require('gulp');
// var gutil = require('gulp-util');
 
// gulp.task('nw', function () {
 
//     var nw = new NwBuilder({
//         version: '0.12.3',
//         files: [ './**'],
//         platforms: ['osx'] // change this to 'win' for/on windows
//     });
 
//     // Log stuff you want
//     nw.on('log', function (msg) {
//         gutil.log('node-webkit-builder', msg);
//     });
 
//     // Build returns a promise, return it so the task isn't called in parallel
//     return nw.build().catch(function (err) {
//         gutil.log('node-webkit-builder', err);
//     });
// });
var gulp  = require('gulp')
var shell = require('gulp-shell')

// Zip directory ( Working in Linux and OSX)
gulp.task('zip', shell.task([
  'zip -r app.nw .'
]))

// Run project
gulp.task('run', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild --run ./'
]))

// Compile project
gulp.task('osx', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p osx ./'
]))

// Compile project
gulp.task('win', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p win ./'
]))

// Compile project
gulp.task('linux', shell.task([
  'node_modules/node-webkit-builder/bin/nwbuild -p linux32,linux64 ./'
]))