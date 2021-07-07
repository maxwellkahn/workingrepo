const express = require('express');
const router = express.Router();
const request = require('request');

const randomURL = 'https://api.chucknorris.io/jokes/random';

/* GET home page. */
router.get('/', function(req, res, next) {
  const joke = req.query.joke;
  console.log(`joke: ${joke}`)
  request(`${randomURL}`, function(err,response, body) {
    res.render('index');
  })
});

module.exports = router;
