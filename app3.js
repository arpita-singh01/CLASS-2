const express=require('express')
const app=express()

app.get("/",(req,res)=>{
    res.send("<h1>good afternoon</h1>")

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

app.get("/html",(req,res)=>{
    res.send(`
        <table>
            <thead>
                <tr>
                    <th>backend</th>
                    <th>frontend</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>node</li>
                            <li>express</li>
                            <li>python</li>
                            <li>java</li>
                            <li>php</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>ANGULAR</li>
                            <li>REACT</li> 
                        </ul>
                        

                    </td>
                </tr>
            </tbody>
        </table>
    `)
})

app.get("/json",(req,res)=>{
    res.send([
        {"name":"arpita","roll":16},
        {"name":"mumma","roll":17},
        {"name":"papa","roll":18}

    ])
})

app.listen(6007)
