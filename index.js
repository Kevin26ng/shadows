require('dotenv').config
const express = require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send("Hello Woeld!")
})
app.get('/twitter',(req,res)=>{
    res.send('KevinNg twitter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login using your own wifi</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>please login using your own wifi</h2>')
})
app.listen(process.env.port,()=>{
    console.log(`Example app running on port${port}`)
})