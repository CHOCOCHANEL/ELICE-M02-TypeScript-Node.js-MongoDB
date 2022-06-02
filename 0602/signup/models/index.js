const mongoose = require('mongoose');
const PostSchema = require('./schemas/post');
const UserSchema = require('./schemas/user');
const connect = require('../dbconfig');
const url = 'mongodb://' + connect.username + ':' + connect.password
    + '@' + connect.url + '/' + connect.dbname;
const Post = mongoose.model('Post', PostSchema);
const User = mongoose.model('User', UserSchema);

const dbconnect = () => {
    mongoose.connect(
        url,
        error => {
            if (error) {
                console.log("mongodb connect error", error);
            } else {
                console.log("mongodb-connect-success");
            }
        }
    );
};

mongoose.connection.on('error', error => {
    console.log('mongodb connection error', error);
});

mongoose.connection.on('disconnected', () => {
    console.error('mongodb disconnected try reconnect....');
});

async function boot() {
    for (let i = 0; i < 100; i++) {
      await Post.create({
        title: `게시글 ${i} 번`,
        content: `게시글 ${i} 번 내용`,
      });
    }
  }
  
boot()
    .then(() => process.exit());

module.exports = dbconnect;
module.exports = Post;
module.exports = User;