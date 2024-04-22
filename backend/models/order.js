const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const be = new Schema(
    {
    totalprice: { type: Number, required: true },
    taxprice: { type: Number, required: true, unique: true }
    
    }
);

module.exports=mongoose.model('Order',be);