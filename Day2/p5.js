const fs = require('fs');

fs.mkdir("mydir", (err) => {
    if (err)
        console.log("Error",err);
    else
    console.log("Directory created successfully!")
})