// Пакеты
const {src, dest} = require("gulp"); //импорт методов гальпа

// Конфигурация
const path = require("../config/path.js");
const app  = require("../config/app.js");

// Плагины
const gulpPlumber = require("gulp-plumber"); //обработчик ошибок
const gulpNotify  = require("gulp-notify"); //всплывающее окно при ошибке
const gulpBabel   = require("gulp-babel"); //бабел для преобразования js файлов в старые версии

const webpuckStream = require("webpack-stream");

const js = () => {
  return src(path.js.src, {sourcemaps: app.isDev})
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "JS",
        message: error.message
      }))
    }) )
    .pipe( gulpBabel() )
    .pipe( webpuckStream(app.webpack) )
    .pipe( dest(path.js.dest, {sourcemaps: app.isDev}) )
}

module.exports = js;