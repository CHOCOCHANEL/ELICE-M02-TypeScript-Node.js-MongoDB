const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
const UserSchema = require('./schemas/user');

const Post = mongoose.model('Post', PostSchema);
const User = mongoose.model('User', UserSchema);

module.exports = {
    Post,
    User,
};