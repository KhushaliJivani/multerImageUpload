'use strict';
const express = require('express');
// const dotenv = require('dotenv');
// dotenv.config();
const port = process.env.PORT || 8080;
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
require('./src/database/connection');
app.use(bodyParser.json());
// console.log(__dirname);
app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
app.use('/',require('./src/Routes/routes'));
app.listen(port, () => {
    console.log("server is listen")
});
