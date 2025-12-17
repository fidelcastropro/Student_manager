const mongoose = require("mongoose");
const Counter = require("./counter");

const studentShema = new mongoose.Schema({
    rollno: { type:Number,unique:true},
    name:{type: String, required: true},
    email:{type: String, required: true, unique: true}
});

// studentShema.pre("save",async function(){
//     if(this.isNew){
//         const counter = await Counter.findOneAndUpdate(
//             {id:"rollno"},
//             {$inc:{seq:1}},
//             {new:true, upsert:true}
//         );
//         this.rollno=counter.seq;
//     }
// });

module.exports = mongoose.model("Student", studentShema)