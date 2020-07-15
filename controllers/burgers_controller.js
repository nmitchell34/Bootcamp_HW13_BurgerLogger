const express = require("express")
const app = express()

const burger=require("../models/burger.js")

app.get("/",function(req,res){
    res.render("index")
})




module.exports = router