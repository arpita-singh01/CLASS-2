const fs=require('fs')
const path=require('path')
const html=path.join(__dirname,'html')
const php=path.join(__dirname,'php')

for(i=1;i<=1000;i++){
    fs.writeFileSync(html+"/new"+i+".html","<h1>This is html file</h1>")
    fs.writeFileSync(php+"/new"+i+".php","<?php echo ('good morning')?>")

}
//find a file
fs.readFile(`${html}/new1.html`,'utf-8',(err,iteam)=>{
    if(err){console.log("thr error is",err)
    } else{
console.log(iteam)}
})   

//rewrite a file
fs.appendFile(`${php}/new1.php`,"this is a php file",(err,iteam)=>{
    if(!err){console.log("update")}
}
)

//file rename
fs.rename(`${html}/new1.html`,`old1.html`,(err)=>{
    if (err){console.log("renamed")}
})

//file delete
fs.unlink(`${html}/new2.html`,(err)=>{
    if(err){console.log("deleted")}
})