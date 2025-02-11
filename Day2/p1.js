const fs = require('fs');
const data = " i am the data"

fs.writeFile("./data.txt",data,(err) =>{
    if(err) throw err;
    console.log("File saved!");
})