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
    });
});

// Reset plackage OK
app.post ('/plaquage-ok/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ok SET sum_plaquage_ok = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;     
    });
});

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
    });
});

// Reset plackage KO
app.post ('/plaquage-ko/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE plaquage_ko SET sum_plaquage_ko = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;      
    });
});

// Mêlée OK
app.get('/melee-ok/get',(req,res) => {
    connection.query('select * from melee_ok' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente Mêlée OK
app.post ('/melee-ok/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE melee_ok SET sum_melee_ok=sum_melee_ok+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;        
    });
});

// reset Mêlées OK
app.post ('/melee-ok/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE melee_ok SET sum_melee_ok = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;      
    });
});

// Mêlée KO
app.get('/melee-ko/get',(req,res) => {
    connection.query('select * from melee_ko' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente Mêlée KO
app.post ('/melee-ko/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE melee_ko SET sum_melee_ko=sum_melee_ko+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;        
    });
});

// Reset Mêlée KO
app.post ('/melee-ko/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE melee_ko SET sum_melee_ko = 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;   
    });
});

// Touche OK
app.get('/touche-ok/get',(req,res) => {
    connection.query('select * from touche_ok' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente Touche OK
app.post ('/touche-ok/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE touche_ok SET sum_touche_ok=sum_touche_ok+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;        
    });
});

// Reset Touches OK
app.post ('/touche-ok/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE touche_ok SET sum_touche_ok= 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;   
    });
});

// Touche KO
app.get('/touche-ko/get',(req,res) => {
    connection.query('select * from touche_ko' , (error,results) => {
        if(error) throw error;
        res.end(JSON.stringify({results}));
    })
});

// Incremente Touche KO
app.post ('/touche-ko/add', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE touche_ko SET sum_touche_ko=sum_touche_ko+1 WHERE Id = 1' , postData,(error, results,fields) => {
        if (error) throw error;        
    });
});

// Reset Touches KO
app.post ('/touche-ko/reset', (req,res) => {
    let postData = req.body;
    connection.query('UPDATE touche_ko SET sum_touche_ko= 0 where id = 1' , postData,(error, results,fields) => {
        if (error) throw error;   
    });
});


app.listen(5500)