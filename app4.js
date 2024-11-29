const express=require('express')
const app=express()

app.get("/html",(req,res)=>{
    res.send(`
    
        <ul>
            <li><a href=#home>Home</a></li>
            <li><a href=#about>about</a></li>
            <li><a href=#contact>Contact</a></li>
            <li><a href=#login>login</a></li>
          </ul>
        `)
})

app.listen(6008)
    