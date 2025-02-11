const fs = require('fs');
const newdata = " i am the appended data"
fs.appendFile("./data.txt",newdata,(err) =>{
    if (err) 
        console.error(err);
    else
    console.log("Data appended successfully");
})