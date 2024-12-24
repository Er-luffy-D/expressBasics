// Example of how to take query parameters

const express= require("express")

const app=express()

const calculateCube=(n)=>(n*n*n)


// to take query parameters sent through url in form of "url?n=<some number>"
app.get('/',(req,res)=>{
    res.send(`Cube of ${req.query.n} is ${calculateCube(req.query.n)} `)
})
app.listen(3000,()=>{
console.log("server is listening")
})