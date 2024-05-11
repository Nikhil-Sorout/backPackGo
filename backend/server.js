const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const connectDb = require('./config/dbConnection');

const port = process.env.PORT || 5000;
connectDb();
// app.use('/api/user', userRoutes)
app.listen(port,()=>{
    console.log("Server started on port: ", port);
})