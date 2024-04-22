const mongoose = require('mongoose');

const Schema=mongoose.Schema;

const feed = new Schema(
    {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email:{ type: String, required: true },
    feedback:{ type: String, required: true },
    }
);

module.exports=mongoose.model('Feed',feed);