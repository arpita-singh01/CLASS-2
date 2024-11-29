const ex=require("express")
const app=ex()

app.get("/",(req,res)=>{
    res.send(`
        <a href="/home">Home</a>
        <a href="/about">about</a>
        <a href="/contact">Contact</a>
        <a href="/login">login</a>
        <a href="/signup">signup</a>
        
        `)
})
app.get("/home",(req,res)=>{
    res.send("<h1>this is home page</h1>")

})
app.get("/about",(req,res)=>{
    res.send("<h1>this is about page</h1>")

})
app.get("/contact",(req,res)=>{
    res.send("<h1>this is contact page</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>this is login page</h1>")
})
app.get("/signup",(req,res)=>{
    res.send("<h1>this is signup page</h1>")
})

app.listen(7000)