const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const port = 3000

app.get('/', function(req, res){
  res.send('Hello world.');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))