// Пакеты

const {src, dest} = require("gulp");              // импорт методов гальпа


// Конфигурация

const path = require("../config/path.js");
const app  = require("../config/app.js");


// Плагины

const gulpPlumber  = require("gulp-plumber");     // обработчик ошибок
const gulpNotify   = require("gulp-notify");      // всплывающее окно при ошибке
const gulpImagemin = require("gulp-imagemin");    // минификация изображений
const gulpNewer    = require("gulp-newer");       // отслеживание и пропуск уже обработанных изображений
const gulpWebp     = require("gulp-webp");        // преобразование картинок в формат webp
const gulpIf       = require("gulp-if");          // подключение плагина с условием


// Обработка img

const img = () => {
  return src([path.img.src, `!${path.img.excep}`])
    .pipe( gulpPlumber({
      errorHandler: gulpNotify.onError( error => ({
        title: "IMG",
        message: error.message
      }))
    }) )
    .pipe( gulpNewer(path.img.dest) )
    .pipe( gulpWebp() )
    .pipe( dest(path.img.dest) )
    .pipe( src([path.img.src, `!${path.img.excep}`]) )
    .pipe( gulpNewer(path.img.dest) )
    .pipe( gulpIf(app.isProd, gulpImagemin(app.gulpImagemin)) )
    .pipe( dest(path.img.dest) )
    .pipe( src(path.img.excep) )
    .pipe( dest(path.img.excepDest) )
}


module.exports = img;