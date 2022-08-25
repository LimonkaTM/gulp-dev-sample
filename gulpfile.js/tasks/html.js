// Пакеты
const {src, dest} = require("gulp"); //импорт методов гальпа


// Конфигурация

const path = require("../config/path.js");
const app  = require("../config/app.js");


// Плагины

const gulpPlumber     = require("gulp-plumber");        //обработчик ошибок
const gulpNotify      = require("gulp-notify");         //всплывающее окно при ошибке
const gulpFileInclude = require("gulp-file-include");   //всатвка блоков в HTML
const gulpHtmlMin     = require("gulp-htmlmin");        //минификация HTML файла
const gulpWebpHtml    = require("gulp-webp-html");      //вставка конструкции picture в html для поддержки webp
// const gulpSize        = require("gulp-size");        //вывод в консоль размеров до сжатия и после


// Обработка HTML

const html = () => {
  return src(path.html.src)
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "HTMl",
        message: error.message
      }))
    }) )
    .pipe( gulpFileInclude() )
    .pipe( gulpWebpHtml() )
    // .pipe( gulpSize(app.gulpSize.before) )
    .pipe( gulpHtmlMin(app.gulpHtmlMin) )
    // .pipe( gulpHtmlMin(app.gulpSize.after) )
    .pipe( dest(path.html.dest) )
};


module.exports = html;