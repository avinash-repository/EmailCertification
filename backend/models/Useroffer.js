const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:{
        type:String, 
        required:true 
    },

    joindt:{
        type:String,
        required:true
    }, 
    completedt:{
        type:String,
        required:true
    }, 
    email:{
        type:String,
        required:true
    }, 

    domain:{
        type:String,
        required:true
    }, 


    date:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('offerletter', UserSchema)