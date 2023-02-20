const fs = require('fs');
const path = require('path');

const dirPath = __dirname; // substitua pelo caminho do diretório de imagens
const prefix = 'ScreenShot_';

fs.readdir(dirPath, (err, files) => {
  if (err) {
    throw err;
  }

  let num = files.length + 1000;

  files.forEach((file) => {
    const ext = path.extname(file);
    if (ext === '.jpg' || ext === '.png' || ext === '.bmp' || ext === '.gif') {
      const oldPath = path.join(dirPath, file);
      const newPath = path.join(dirPath, prefix + num + ext);
      fs.rename(oldPath, newPath, (err) => {
        if (err) {
          throw err;
        }
      });
      num++;
    }
  });
});
