const User = require("../models/user-models");
const bcrypt = require("bcryptjs")
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

  // *-------------------------
  // * User Registration Logic 
  // *-------------------------
  // 1. Get the registration data: Retrive user data (username , email , password).
  // 2/ Check Email Existence: Check if the email is already registered.
  // 3. hash Password: Securely hash the password. 
  // 4. create user : create a new user with hashed password.
  // 5. save to DB : save user data to the database.
  // 6. Respond : Respond with "Registration Successful" or handle errors.
const register = async (req,res) =>{
    try{
      console.log(req.body);
      const {username , email, password, phone} = req.body;

      const userExist = await User.findOne({email});

      if(userExist){
        return res.status(400).json({msg: "email already exists"});
      }

      // Hash the Password
      // const saltRound = 10;
      // const hash_password = await bcrypt.hash(password, saltRound);

      const userCreated= await User.create({username , email,  phone, password,});

        res.status(201).json({ msg:"Registration Successful", token: await userCreated.generateToken(), userId:userCreated._id.toString(),

        })
    }catch(error){
        res.status(500).json("internal server error")
    }
}


 // *-------------------------
  // * User Login Logic 
  // *-------------------------
const login = async(req, res)=>{
  try {
    const {email, password} = req.body;

    const userExist = await User.findOne({email});

    if(!userExist){
      return res.status(400).json({message:"Invalid Credentials"});
    }
    // const user = await bcrypt.compare(password, userExist.password);
    const user = await userExist.comparePassword(password);
    if(user){
      res.status(200).json({
        msg:"Login Successful",
        token:await userExist.generateToken(),
        userId:userExist._id.toString(),
      });
    }else{
      res.status(401).json({message:"Invalid email or password"})
    }
  } catch (error) {
    res.status(500).json("Internal Server Error")
  }
}
     

  module.exports= {home, register, login};