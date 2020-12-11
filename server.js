const express = require('express');

const app = express();

app.get('/', (req, res) => 
    res.json({ msg : 'Welcome'})
);

//Defining routes
app.use('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/users', require('./routes/users'));
app.use('https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020/login', require('./routes/auth'));