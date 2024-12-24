//  to restart server automatically on saving use 
// npx nodemon index.js
// nodemon restarts express server itself


const express=require("express")
const bodyParser = require("body-parser")

const app=express()
const port=3000

// middleware
app.use(bodyParser.json({}));


app.post('/conversation',(req,res)=>{
    // Express doesn't allow to acess the body 
    // So to access the body we use body-parser library
    console.log(req.body)  // here body is comming from bodyparser


    // console.log(req.headers) // to print all the headers

    res.send({
        msg:"2+2=4"
    })
})
app.get("/",(req,res)=>{
    res.send({
        msg:"send s1"
    })
})

app.listen(port,()=>{
    console.log(`App is listening on ${port}`)
})