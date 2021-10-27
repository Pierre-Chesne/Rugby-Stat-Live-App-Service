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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Plaquage OK
app.get('/plaquage-ok/get',(req,res) => {
    connection.query('select * from plaquage_ok' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente plackage OK
app.post ('/plaquage-ok/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ok SET sum_plaquage_ok=sum_plaquage_ok+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;
        //res.end(JSON.stringify(results));
        //res.end();
        //res.sendfile('./public/plaquage.html')        
    });
});

// Reset plackage OK
app.post ('/plaquage-ok/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ok SET sum_plaquage_ok = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;
        //res.end(JSON.stringify(results));
        //res.end();
        //res.sendfile('./public/plaquage.html')        
    });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Plaquage KO
app.get('/plaquage-ko/get',(req,res) => {
    connection.query('select * from plaquage_ko' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente plackage KO
app.post ('/plaquage-ko/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ko SET sum_plaquage_ko=sum_plaquage_ko+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;
        //res.end(JSON.stringify(results));
        //res.end();
        //res.sendfile('./public/plaquage.html')        
    });
});

// Reset plackage KO
app.post ('/plaquage-ko/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ko SET sum_plaquage_ko = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;
        //res.end(JSON.stringify(results));
        //res.end();
        //res.sendfile('./public/plaquage.html')        
    });
});

app.listen(5500)