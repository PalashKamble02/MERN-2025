const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Hellow World!")
});

const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server running at port : ${PORT}`)
});