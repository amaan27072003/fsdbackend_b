const fs = require('fs');
const newdata = 'Hello, this is a new data';
// const data = fs.readFileSync('./data.txt', 'utf8');
// console.log(data);
fs.writeFileSync('./data.txt',newdata);