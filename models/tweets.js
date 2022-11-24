const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  username: String,
  tweet : String,
  date : Date,
  hashtag : Array,
  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;