// const mongoose=require("mongoose")

// mongoose.connect("<mongo db url>")

// // Create a model ( structure or schema)
// const User= mongoose.model("Users",{ name:String, email: String, password: String});

// const user= new User({name:"piyush",email:"sawe@sah.com",password:"909310"});

// // to put data into db
// user.save().then(()=>{
//     console.log("Write succesfull")
// });

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("<mongodburl>");

const User = mongoose.model("Users", {
  email: String,
  name: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;

  const ExistingUser = await User.findOne({ email: email });
  if (ExistingUser) {
    return res.status(400).send("email already exists");
  }

  const NewUser = new User({
    email: email,
    name: name,
    password: password,
  });
  NewUser.save();
  res.status(200).json({
    msg: "Succesfully Signed Up",
  });
});
app.listen(3000);
