const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b58f3bd7ec9c2c',
    password: 'c391577b',
    database: 'heroku_4ac144dba217cc8',
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('listening on port 3001');
})