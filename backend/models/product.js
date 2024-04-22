const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const be = new Schema(
    {
    name: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    }
);

module.exports=mongoose.model('Products',be);