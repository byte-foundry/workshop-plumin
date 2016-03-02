const gulp = require('gulp');
const shelter = require('gulp-shelter')(gulp);

shelter({
	serve: 'browser-sync start --server --files "script.js, index.html"'
});
