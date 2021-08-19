import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

const DATABASE_URL = "mongodb+srv://aditya:aditya1234@cluster0.mh3oa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

const PORT = 5000;

mongoose.connect(DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => { app.listen(PORT, () => { console.log(`Server running on port: ${PORT}`) }) })
    .catch((error) => { console.log(error.message) })