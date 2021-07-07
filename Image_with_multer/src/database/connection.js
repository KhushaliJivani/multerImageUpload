'use strict';
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/imagesWithMulter", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,

    }).then(() => {
        console.log("connection successful...")
    }).catch((err) => {
        console.log(err)
    });
