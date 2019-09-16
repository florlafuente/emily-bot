const express = require('express')
const app = express()
const Twit = require('twit')
const axios = require('axios')

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

const apiUrl = "http://poetrydb.org/author/Emily Dickinson"


// Bring an array of quotes from the API
const getQuote = async () => {
  try {
    const res = await axios.get(apiUrl)
    const poems = res.data

    //get a random poem from the array
    const randomPoem = poems[Math.floor(Math.random()*poems.length)].lines


  } catch (err) {
    console.error(err)
  }
}

getQuote()

app.listen(port, () => console.log(`Example app listening on port ${port}!`))