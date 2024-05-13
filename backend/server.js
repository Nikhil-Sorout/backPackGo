const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');
const axios = require('axios')

const port = process.env.PORT || 5000;
connectDb();
// Creating routes to fetch data from foursquare api
app.use('/api', require('./routes/userRoutes'))
app.listen(port,()=>{
    console.log("Server started on port: ", port);
})