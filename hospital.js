const express=require("express")
const app =express()

const users=[{
    name:'john',
    kidneys:[{
        healthy:false
    },{
        healthy:true
    }]
}];

function atLeastOneUN(){
    const user_kidney=users[0].kidneys
    const unhealthy=user_kidney.filter((e)=>
    e.healthy==false).length
    
    return unhealthy;
}
app.use(express.json());


app.get("/",(req,res)=>{
    const user_kidney=users[0].kidneys
    const healthy_kidney=user_kidney.filter((e)=>
        e.healthy==true
    ).length
    // console.log(`No of healthy kidneys ${healthy_kidney} out of ${user_kidney.length}`);
    res.json({
        TotalKidneys:`${user_kidney.length}`,
        healthyKidneys:`${healthy_kidney}`,
        UnhealthyKidneys:`${user_kidney.length-healthy_kidney}`
    })
})

// BODY
// req.body will be undefined -> this can be more cleared in middlewares
// To prevent this use body parser or express.json
app.post("/",(req,res)=>{
    const ishealthy=req.body.ishealthy
    users[0].kidneys.push({
        healthy:ishealthy
    })
    res.json({
        msg:"Done!"
    })
})
app.put("/",(req,res)=>{
    if(atLeastOneUN()){
        const kidneys=users[0].kidneys.forEach((e)=>e.healthy=true);
        res.json({
            msg:"Done"
        })
    }
    else{
        res.status(411).json({
            msg:"You have no unhealthy kidney"
        })
    }
})
app.delete("/",(req,res)=>{
    if(atLeastOneUN()){
        const newKidneys=users[0].kidneys.filter((e)=>e.healthy==true);
        users[0].kidneys=newKidneys;
        res.json({
            msg:"Deleted Succesfully"
        })
    }
    else{
        res.status(411).json({
            msg:"You have no unhealthy kidney"
        })
    }
})
app.listen(3000,()=>console.log("Listening at 3000 port"))