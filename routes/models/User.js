  
const mongoose = require("mongoose");

const User = new mongoose.Schema({

    id:{
        type: mongoose.SchemaTypes.ObjectId,
        /* default: mongoose.SchemaTypes.ObjectId.get(), */
    }, 

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },
        
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    dob:{
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("user", User);