const mongoose =require("mongoose");

let courseSchema = new mongoose.Schema({
   course_Name:{
    type:string,
    required:true
   },
   course_title:{
    type:string,
    required:true,
    unique:true,
   },
   course_code:{
    type:string,
    required:true,
    unique:true
   },
   course_duration:{
    type:string,
    required:true
   }

},{timestamps:true});
module.exports=new mongoose.model("student",courseSchema);