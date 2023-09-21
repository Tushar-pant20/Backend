const express = require('express');
const mypattern = require('../schemas/schemaformat');
const route = express.Router()


route.get('/alldata',async(req,res)=>{
    const alldata = await mypattern.find();
    res.json(alldata);
    console.log(alldata);
})

route.get("/",(req,res)=>{
    res.send("welcome to express js");
})

route.get("/about",(req,res)=>{
    res.send("welcome to express about page");
})


module.exports = route;