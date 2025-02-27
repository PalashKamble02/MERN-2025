//*-----------------------
//* Controllers 
//*----------------------

//? In an Express.js apllication, a "controller" refers to a part of your code
//  that is responsible for handling the application's logic. Conttrollers are
//  typically used to process incoming requests, interact with models (data sources),
//  and send responses back to clients. they Help organize your application by
//  seperating concern and following the MVC(Model_View-Controller) design pattern.

//   *-----------
// Home Logic 
//   *-----------

  const home = async (req, res)=> {
    try{
        res.status(200).send(" Hello World From Controller");
    } catch(error){
        console.log(error)
    }
  };

  // *---------
  // Registartion Page lOgic 
const register = async (req,res) =>{
    try{
        res.status(200).send("Hello World from controller for registraion page again")
    }catch(error){
        res.status(400).send({msg:"page not Found"})
    }
}

  module.exports= {home, register};