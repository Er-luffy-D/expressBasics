const express = require("express");

const app = express();

// // Counter Request
// let currentRequests=0
// function CalculateReq(req,res,next){
//     currentRequests++;
//     console.log(currentRequests);

//     next(); // next is used to transfer the flow to next callback function else you will need a res.send or res.json to transfer the flow but in a single route only one response can be send \.
// }
// app.get("/",CalculateReq,(req,res)=>{
//     res.send(`Working : current request ${currentRequests}`)
// })

// app.use(express.json())  // .use is called everytime each route,

// app.post("/",(req,res)=>{
//     const Kidneys=req.body.Kidney;
//     const Kidney_len=Kidneys.length;

//     res.send("Kidneys you have " + Kidney_len +" kidneys");
// })

// // Uses now global catches (have 4 inputs ) --( This is called whenever any route caught an error/exception  )
// // Express recognizes it has an error handling middleware because of its 4 arguments.
// app.use(function(err,req,res,next){
//     console.log(err)
//     res.status(500).json({
//         msg:"Something's wrong with the server"
//     })
// })




// Using Zod to check whether the input contains array of number or not
const zod = require("zod");
const schema = zod.array(zod.number()); // checks whether the input is arrays of

app.use(express.json()); // .use is called everytime each route,

app.post("/", (req, res) => {
  const Kidneys = req.body.Kidney;
  const response = schema.safeParse(Kidneys)
  res.send({
    response
  })
});

app.listen(3000, () => {
  console.log("listening at 3000 port");
});
