// Пакеты

const {watch, series, parallel} = require("gulp");                     // импорт гальпа
const browserSync               = require("browser-sync").create();    // лайв сервер 


// Конфигурация

const path = require("./config/path.js");
const app  = require("./config/app.js");


// Задачи

const clear = require("./tasks/clear.js");
const html  = require("./tasks/html.js");
const pug   = require("./tasks/pug.js");
const css   = require("./tasks/css.js");
const scss  = require("./tasks/scss.js");
const js    = require("./tasks/js.js");
const img   = require("./tasks/img.js");
const font  = require("./tasks/font.js");


// Сервер

const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
};


// Наблюдение

const watcher = () => {
  watch(path.html.watch, html).on("all", browserSync.reload)
  watch(path.pug.watch, pug).on("all", browserSync.reload)
  // watch(path.css.watch, css).on("all", browserSync.reload)
  watch(path.scss.watch, scss).on("all", browserSync.reload)
  watch(path.js.watch, js).on("all", browserSync.reload)
  watch(path.img.watch, img).on("all", browserSync.reload)
  watch(path.font.watch, font).on("all", browserSync.reload)
};


// Задачи

const build   = series(
  clear,
  parallel(/* html,*/pug, /* css */ scss, js, img, font),
);

const dev = series(
  build,
  parallel(watcher, server)
);

exports.watch = watcher;
exports.clear = clear;
exports.html  = html;
exports.pug   = pug;
exports.css   = css;
exports.scss  = scss;
exports.js    = js;
exports.img   = img;
exports.font  = font;

exports.dev   = dev;
exports.build = build;

exports.default = app.isProd ? build : dev;