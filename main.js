var express = require('express')
var jokeHandler = require('./jokeHandler')
var app = express()

app.get('/danger', function(req, res) {
  res.status(400).send('DANGER!')
})

app.get('/jokes', function(req, res){
  res.status(200).send(jokeHandler.createOneLiner())
})

app.get('/jokes/knockknock', function(req, res){
  res.status(200).send(jokeHandler.createKnockKnock())
})

app.listen(8000, function() {
  console.log('server listening on port: '+ 8000)

})
