const express = require("express");
require('dotenv').config();
const route = require('./routes/route');
const port = process.env.port || 4500;
const cors = require('cors');
const bp = require('body-parser');
require('./db/connection');


const app = express();

 
app.use(express.json());
app.use(cors());
app.use(route);


app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})