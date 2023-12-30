const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = 5500;
const persons = require('./routes/persons.route');
const jobs = require('./routes/jobs.route');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI).then(
    () => {console.log("Connection with database established")},
    error => {console.log("Failed to connect to MongoDB", error)}
);

app.use(cors({
    origin:'*'
}))

app.use('/', express.static('files'));
app.use('/api/persons', persons);
app.use('/api/jobs', jobs);

app.listen(port, () => {console.log("Listening on port 5500")});