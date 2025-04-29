import express from "express"
const app=express()
const port=3000

app.get('/test',(req,res)=>{
    res.status(200).json("My Server is runnig")
})

app.listen(port,()=>{
    console.log("My server is running at port 3000")
})