var express = require('express');
var router = express.Router();
const user = require('../models/tweets');

router.get('/', (req, res) => {
	user.find().then(data => {
        console.log(tweets = data)
		res.json({ tweets: data });
	});
});

router.post('/', (req, res) => {
    user.push(req.body.newTweet);
    console.log(succed);
    res.json({ tweetsList: tweets });
   });
   
   
router.delete('/:position', (req,res) => {
    user.splice(req.posiotion,1);
    res.json({data});
});




module.exports = router;