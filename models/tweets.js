const mongoose = require('mongoose');

const tweetSchema = mongoose.Schema({
  username: String,
  tweet : String,
  hashtag : String,
  
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
});

const Tweet = mongoose.model('tweets', tweetSchema);

module.exports = Tweet;