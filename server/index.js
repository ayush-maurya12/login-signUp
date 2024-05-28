const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const employeemodel=require("./models/EmpModel");

const app=express()
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/emp");

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    employeemodel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("password is incorrect");
            }
        }else{
            res.json("email is not reginter");
        }
    })
})

app.post("/signup",(req,res)=>{
    employeemodel.create(req.body)
    .then(emps=>res.json(emps))
    .catch(err=>res.json(err))
});

app.listen(3001,()=>{
    console.log("server is ready");
});