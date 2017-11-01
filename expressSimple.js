
const http = require('http')

const express = require('express')
var app = express()

app.get('/', (req, res, next)=>{
	res.send('hello, world')
})


var server = http.createServer(app)
server.listen(8080)
console.log('The server is listening on port 8080')



setTimeout(wait, 4000)
function wait() {
	console.log('test')
}