const express = require('express');
const cors = require('cors');
const mysql = require ('mysql');
require('dotenv').config();


app = express();
app.use(cors());
app.use(express.static('public'));


// Info conexion DB
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_MANE
});

// Connexion à la base
connection.connect(error => {
    if (error) throw error;
});


app.listen(5500)