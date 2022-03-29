const fs = require("fs-extra");

module.exports  =  async function copyFiles() {
    fs.copyFile('source/admin/config.yml', 'dist/admin/config.yml');
    fs.copySync('static/', 'dist/');
  }