const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    job: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

const userData = mongoose.model('user', user);
module.exports = userData;