const del = require("del"); //удаление дирректории

// Конфигурация
const path = require("../config/path.js");

// Удаление папки public
const clear = () => {
  return del(path.root)
}

module.exports = clear;