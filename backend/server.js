const express=require("express");
const app=express();
app.listen(3000,function(){
    console.log("server running on 3000 ports")
})

let arr=[1,2,3,4];
app.get("/hello",function (req,res){
    res.send(arr);
})


