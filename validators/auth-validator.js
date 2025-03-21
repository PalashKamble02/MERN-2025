const { z } = require("zod");



// Creating an object Schema 
const signupSchema = z.object({
    username : z
    .string({required_error:"name is required"})
    .trim()
    .min(3, {message:"Name must be atleast of 3 chars."})
    .max(255,{message:"name must not be more than 255 characters"}),
    email : z
    .string({required_error:"email is required"})
    .trim()
    .email({message:"Inavalid email address"})
    .min(3, {message:"email must be atleast of 3 chars."})
    .max(255,{message:"email must not be more than 255 characters"}),
 phone : z
    .string({required_error:"phone is required"})
    .trim()
    .min(10, {message:"phone must be atleast of 10 chars."})
    .max(20,{message:"phone must not be more than 20 characters"}),
 password : z
    .string({required_error:"password is required"})
    .min(7, {message:"password must be atleast of 6 chars."})
    .max(1024,{message:"password must not be more than 1024 characters"}),

});

module.exports = signupSchema;