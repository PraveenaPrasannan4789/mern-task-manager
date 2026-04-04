// models/Job.js
const mongoose=require('mongoose');

const jobSchema=new mongoose.Schema({
 jobName:{type:String,required:true},
 companyName:{type:String,required:true},
 status:{type:String,required:true, default:"wishlist",enum:['wishlist','applied',"interviewing"]},
 decsription:{type:String},
 userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}
},{timestamp:true})

module.exports= mongoose.model("Job",jobSchema);
