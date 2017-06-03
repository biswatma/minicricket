'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()

app.set('port', (process.env.PORT || 5000))


app.use(express.static(__dirname ));
// index
app.get('/', function (req, res) {
	res.sendFile(__dirname + '/index.html');
})



// spin spin sugar
app.listen(app.get('port'), function() {
	console.log('running on port', app.get('port'))
})
