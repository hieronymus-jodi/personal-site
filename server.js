// server.js

// Imports
const http = require('http')
const express = require('express')
const path = require('path')

const app = express()

const server = http.createServer(app)
const port = 3939

// Static files
app.use(express.json())
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/component', express.static(__dirname + 'public/component'))

app.set('pages', './pages')

// Website Urls
app.use('', function(req,res){
    res.sendFile(path.join(__dirname + '/pages/homepage.html'))
})

app.use('/about-me', function(req,res){
    res.sendFile(path.join(__dirname + '/pages/about-me.html'))
})

app.use(express.static("source"))

server.listen(port, () => console.info(`Listening on port ${port}`))