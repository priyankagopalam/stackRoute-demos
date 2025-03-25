// import os from "os";

// console.log(os.hostname());
// console.log(os.cpus());

import fs from "fs";

const result = fs.readFileSync('Textfile.txt');
console.log(result.toString());

fs.readFile('Textfile.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

fs.writeFileSync('Textfile.txt', 'Welcome to NodeJS');

fs.writeFile('Textfile.txt', 'Hello NodeJS', (err) => {
    if (err) {
        throw err;
    }
    console.log('File written successfully');
})