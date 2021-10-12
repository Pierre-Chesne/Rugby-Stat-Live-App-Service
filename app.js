const express = require('express');
const cors = require('cors');
const index = require('./routes/index');

app = express();
app.use(cors());


// Routes
app.use('/', index);



app.listen(5500)