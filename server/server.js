const express = require("express");
const app = express();
const router = require("./router/auth-router")



//? Mount the Router: To use the router in your main Express app, you can "mount it at a specific URL prefix"
app.use('/api/auth', router);

// app.get('/',(req,res)=>{
//     res.status(200).send("Hellow World!")
// });

// app.get('/second',(req,res)=>{
//     res.status(200).send("Hello second")
// });
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`server running at port : ${PORT}`)
});