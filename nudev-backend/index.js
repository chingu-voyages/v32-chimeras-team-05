const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

const {resolve} = require("path");
const {config} = require("dotenv");
config({ path: resolve(__dirname + "/.env") });

const url = process.env.DATABASE_STRING;
const PORT = 8000 || process.env.PORT;

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => { app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }) })
    .catch((error) => { console.log(error.message) })