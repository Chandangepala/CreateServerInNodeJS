const mongoose = require("mongoose"); //To access lib files

const userSchema = new  mongoose.Schema({

    username : {
        type : String,
        required : true
    },
    
    avatar: {
        type: String
    },

    email :{
    
        type: String,   
        required: true
    
    },

    password:{
        type: String,   
        required: true
    }

});

module.exports = mongoose.model('User', userSchema); //exporting a constant