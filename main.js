const express = require('express')
const app = express()
var Twit = require('twit')

require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.send('Hello world.');
});

// insert your twitter app info here
const T = new Twit({
  consumer_key:         process.env.API_KEY, 
  consumer_secret:      process.env.API_SECRET_KEY,
  access_token:         process.env.ACCESS_TOKEN,
  access_token_secret:  process.env.ACCESS_TOKEN_SECRET
})

console.log(T)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))