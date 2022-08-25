// Пакеты

const {src, dest} = require("gulp");                // импорт методов гальпа


// Конфигурация

const path = require("../config/path.js");
const app  = require("../config/app.js");


// Плагины

const gulpPlumber   = require("gulp-plumber");      // обработчик ошибок
const gulpNotify    = require("gulp-notify");       // всплывающее окно при ошибке
const gulpNewer     = require("gulp-newer");        // отслеживание и пропуск уже обработанных файлов
const gulpFonter    = require("gulp-fonter");       // обработка и конвертация шрифтов
const gulpTtf2Woff2 = require("gulp-ttf2woff2");    // добавочная конвертация шрифтов в формат woff2 


// Обработка font

const font = () => {
  return src(path.font.src)
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "FONT",
        message: error.message
      }))
    }) )
    .pipe( gulpNewer(path.font.dest) )
    .pipe( gulpFonter(app.gulpFonter) )
    .pipe( dest(path.font.dest) )
    .pipe( gulpTtf2Woff2() )
    .pipe( dest(path.font.dest) )
}


module.exports = font;