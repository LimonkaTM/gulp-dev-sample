// Пакеты

const {src, dest} = require("gulp");                                 // импорт методов гальпа


// Конфигурация

const path = require("../config/path.js");
const app  = require("../config/app.js");


// Плагины

const gulpPlumber      = require("gulp-plumber");                    // обработчик ошибок
const gulpNotify       = require("gulp-notify");                     // всплывающее окно при ошибке
const gulpAutoprefixer = require("gulp-autoprefixer");               // автопрефиксер для css файлов
const gulpRename       = require("gulp-rename");                     // переименование файлов
const gulpShorthand    = require("gulp-shorthand");                  // сокращение css свойств
const gulpGCMQ         = require("gulp-group-css-media-queries");    // группировка медиазапросов в css
const gulpSass         = require("gulp-sass")( require("sass") );    // компилятор sass, scss
const gulpSourceMaps   = require("gulp-sourcemaps");                 // сурс мапы для файлов
const gulpWebpCss      = require("gulp-webp-css");                   // создание конструкций для webp стилей
const gulpCsso         = require("gulp-csso");                       // минификация файла
const gulpIf           = require("gulp-if");                         // подключение плагина с условием
// const gulpSize         = require("gulp-size");                       // вывод в консоль размеров до сжатия и после
 

// Обработка scss

const scss = () => {
  return src(path.scss.src)
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "SCSS",
        message: error.message
      }) )
    }) )
    .pipe( gulpIf(app.isDev, gulpSourceMaps.init()) )
    .pipe( gulpSass() )
    .pipe( gulpWebpCss(['.jpg','.jpeg']) )
    .pipe( gulpAutoprefixer() )
    .pipe( gulpShorthand() )
    .pipe( gulpGCMQ() )
    // .pipe( gulpSize(app.gulpSize.before) )
    .pipe( gulpIf(app.isDev, gulpSourceMaps.write()) )
    .pipe( gulpIf(app.isProd, dest(path.scss.dest)) )
    .pipe( gulpRename(app.gulpRename) )
    .pipe( gulpIf(app.isDev, gulpSourceMaps.init()) )
    .pipe( gulpIf(app.isProd, gulpCsso(app.gulpCssO)) )
    .pipe( gulpIf(app.isDev, gulpSourceMaps.write()) )
    // .pipe( gulpSize(app.gulpSize.after) 
    .pipe( dest(path.scss.dest) )
}


module.exports = scss;