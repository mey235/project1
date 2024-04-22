const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const user = new Schema(
    {
    name: { type: String, required: true },
    email:{type: String, required: true},
    encrypassword:{type:String,required: true},
    image:{type:String}
    }
);

module.exports=mongoose.model('Users',user);