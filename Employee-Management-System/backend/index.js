const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db');

app.get('/', (req, res) => {
    res.send("Employee management server is running..")
})

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})