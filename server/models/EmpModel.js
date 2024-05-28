const mongoose=require("mongoose");
const authSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        required:true
    },
    password:{
        type:String,
        trim:true
    },
    number:{
        type:Number,
        trim:true
    }
});
 
module.exports=mongoose.model('empauth',authSchema);