const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'Please add name']
    },
    email:{
        type: String,
        required: [true, 'please add email'],
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            'Please add valid eamil'
        ]
    },
    degree:{
        type: String,
        required: [true, 'Please add degree']
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
});


module.exports = mongoose.model('author', AuthorSchema);
