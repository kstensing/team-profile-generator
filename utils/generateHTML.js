const fs = require('fs');

const createFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.createFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true, 
                message: 'Check out your team!'
            });
        });
    });
};

module.exports = createFile;