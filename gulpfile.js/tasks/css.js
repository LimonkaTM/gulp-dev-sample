// Пакеты

const {src, dest} = require("gulp");                                //импорт методов гальпа


// Конфигурация

const path = require("../config/path.js");
const app  = require("../config/app.js");


// Плагины

const gulpPlumber      = require("gulp-plumber");                   // обработчик ошибок
const gulpNotify       = require("gulp-notify");                    // всплывающее окно при ошибке
const gulpConcat       = require("gulp-concat");                    // конкатенация файлов css в один файл
const gulpCssImport    = require("gulp-cssimport");                 // для подключения сборки css фалов с заменой @import на данные файла
const gulpAutoprefixer = require("gulp-autoprefixer");              // автопрефиксер для css файлов
const gulpCssO         = require("gulp-csso");                      // минификация css файла
const gulpRename       = require("gulp-rename");                    // переименование файлов
const gulpShorthand    = require("gulp-shorthand");                 // сокращение css свойств
const gulpGCMQ         = require("gulp-group-css-media-queries");   // группировка медиазапросов в css
const gulpWebpCss      = require("gulp-webp-css");                  // создание конструкций для webp стилей
const gulpIf           = require("gulp-if");                         // подключение плагина с условием
// const gulpSize         = require("gulp-size");                   // вывод в консоль размеров до сжатия и после


// Обработка css 

const css = () => {
  return src(path.css.src, {sourcemaps: app.isDev})
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "CSS",
        message: error.message
      }))
    }) )
    .pipe( gulpConcat(app.gulpConcat.destCssFile) )
    .pipe( gulpCssImport() )
    .pipe( gulpWebpCss() )
    .pipe( gulpAutoprefixer() )
    .pipe( gulpShorthand() )
    .pipe( gulpGCMQ() )
    // .pipe( gulpSize(app.gulpSize.before) )
    .pipe( dest(path.css.dest, {sourcemaps: app.isDev}) )
    .pipe( gulpIf(app.isProd, gulpRename(app.gulpRename)) )
    .pipe( gulpIf(app.isProd, gulpCssO(app.gulpCssO)) )
    // .pipe( gulpSize(app.gulpSize.after) )
    .pipe( gulpIf(app.isProd, dest(path.css.dest, {sourcemaps: app.isDev})) )
}


module.exports = css;