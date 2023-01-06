const express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var databaseOperation = require("./database_operations");
const app = express()
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/insertWord', function (req, res) {
  console.log("recieved", req.body);
  let data = req.body;
  databaseOperation.addWordsToList(data, res);
})

app.get('/getAllKeywords', function (req, res) {
  databaseOperation.getWordsList(undefined, res);
})

app.post('/deleteKeyword', function (req, res) {

  let data = req.body.id;
  console.log("hit here");
  databaseOperation.deleteWord(data, res);

});

app.listen(3000)