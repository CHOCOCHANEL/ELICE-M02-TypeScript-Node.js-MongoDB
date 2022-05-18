const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
}, {
    timestamps: true,
});

exports.userSchema = mongoose.model('userSchema', userSchema);

