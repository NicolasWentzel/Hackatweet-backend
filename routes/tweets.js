var express = require('express');
var router = express.Router();
const user = require('../models/tweets');
const Tweet = require('../models/tweets');


router.post('/', (req, res) => {
    let { firstname, username, content } = req.body;

    if(!content) {
        res.json({result: false, message: 'No tweet submitted.'});
        return;
    }

    Tweet.find().then(data =>{
        const pattern = /#.\S*/gi;
        const newTweet = new Tweet({
            firstname,
            username,
            time: Date(),
            content,
            hashtag: content.match(pattern),
        });

        newTweet.save().then(() => {

            Tweet.find().then(tweets => {
                res.json({
                    result: true, 
                    message: 'New tweet created.', 
                    tweets,
                });
            });
        });
    });
});
   
   router.delete('/:tweets', (req, res) => {
    Tweet.deleteOne({ tweet: req.params.data_id }).then(({ deletedCount }) => {
        tweet.find()
        .populate('tweet')
        .then(data => {
          res.json({ result: deletedCount > 0, bookings });
        });
    });
  });
  


module.exports = router;