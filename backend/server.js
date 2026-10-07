const express=require("express");
const app=express();
const cors=require("cors");
app.use(express.json());
app.use(cors());
app.listen(3000,function(){
    console.log("server running on 3000 ports")
})

let arr=[1,2,3,4];
app.get("/hello",function (req,res){
    res.send(arr);
})

app.post("/push",function(req,res){
    const (name)=req.body;
    push.arr(name);
   res.send(arr);
})


app.update("/update",function(req,res){
  const {index,value}=params.index;
  arr[index]=value;
  res.send(arr);
})


app.delete("/delete",function(req,res){
  const{index}= params.index;
  arr.splice(index,1);
 res.send(arr);
})



