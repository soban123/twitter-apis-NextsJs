var express = require('express');
var router = express.Router();



var Twit = require('twit')
 
var T = new Twit({
  consumer_key:         'ZAFubZisUM3WxY0zBWHVrq3Sy',
  consumer_secret:      'oKEjaDLIbf7OXukbfTfq1D5zfJ1GXEA7m78nmNujr5mLx2aiB8',
  access_token:         '442006100-jbninmypY5rliTOZhCZVfdohIyH4jGepYsvyJ6yU',
  access_token_secret:  'DJciSAXFVWuXoi8Ip3g3zBsRYNpLMe1havzT7bbwomDRF',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
})



/* GET Tweets listing. */
router.get('/:topic/:count', async function (req, res, next) {
    
    // res.send("tweets");
    const { topic , count  } = req.params ; 
    console.log( topic , count )
    T.get('search/tweets', { q: ` ${topic} `, count: count }, function(err, data, response) {
        // console.log(data)   
        res.json( data.statuses  )
      })
  });

module.exports = router;
