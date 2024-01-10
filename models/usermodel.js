const mongoose = require('mongoose');
const { stringify } = require('querystring');
const { Schema } = mongoose;


//schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email:{
        type: String,
        required: [true, 'Please enter a email'],
        unique: true,
    },

    password:{
        type: String,
        required: [true, 'Please enter a password'],
    },
    

    

},
{timestamps: true}
);


//exporting
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
