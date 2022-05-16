const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose);

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    content: {
        type: String,
        required: true,
    },
    no: Number,
}, {
    timestamps: true,
})

blogSchema.plugin(autoIncrement.plugin, {
    model: 'blog',
    field: 'no',
    startAt: 1,
    increment: 1,
});

module.exports = mongoose.model('blog', blogSchema);;