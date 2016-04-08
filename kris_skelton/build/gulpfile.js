const gulp = require("gulp");
const eslint = require("gulp-eslint");
const mocha = require("gulp-mocha");
const watch = require("gulp-watch");
const plumber = require("gulp-plumber");

var files = ["./lib/*.js", "gulpfile.js"];
gulp.task("lint:test", () => {
  return gulp
  .src("./test/**/*test.js")
  .pipe(mocha({reporter: "nyan"}))
  .pipe(eslint({
    rules: {
      "indent": ["error", 2],
      "quotes": [2, "double", "avoid-escape"],
      "no-console": [0]
    },
    env:[
      "es6",
      "mocha"
    ]
  }))
  .pipe(eslint.format());
});
gulp.task("lint:nontest", () => {
  return gulp
  .src(files)
  .pipe(eslint({
    rules: {
      "indent": ["error", 2],
      "quotes": [2, "double", "avoid-escape"],
      "no-console": [0]
    },
    env: [
      "es6"
    ]
  }))
  .pipe(eslint.format());
});
var watching = ["./lib/*.js", "gulpfile.js", "./test/**/*test.js"];
gulp.task("stream", () => {
  return gulp
  .src(watching)
  .pipe(plumber({
    handleError: function(err){
      console.log(err);
      this.emit("end");
    }
  }))
  .pipe(watch(watching))
  .pipe(gulp.dest("build"));
});
gulp.task("callback", function(cb) {
  watch(watching, () => {
    gulp
    .src(watching)
    .pipe(plumber({
      handleError: function(err){
        console.log(err);
        this.emit("end");
      }
    }))
    .pipe(watch(watching))
    .on("end",cb);
  });
});
gulp.task("default",["lint:test", "lint:nontest", "stream", "callback"]);
