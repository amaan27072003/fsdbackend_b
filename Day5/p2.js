const express = require('express');
const app = express();
app.use(express.json());
let users = [
    {id:1,name: 'John Doe', age: 30},
    {id:2,name: 'Jane Smith', age: 28},
    {id:3,name: 'Alice Johnson', age: 35}
];
app.get('/users', (req, res) => {
    const {username,password} = req.body;
    console.log(`User ${username} and Password ${password} received`);
    res.json({message: 'Data received'});
});
app.post('/users', (req, res) => {
    const {username,password} = req.body;
    console.newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
});    
app.post('/reg', (req, res) => {
    const {username,password} = req.body;
    console.newid = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    newuser.id = newid;
    users.push(newuser);    
    res.json(newuser);
});    
   
app.listen(9000, () => {
    console.log('Server is running on port 9000');
});
