//
//
'use strict'
const express = require('express')
const path = require('path')
const cors = require('cors')
const logger = require('morgan')

const CF = require('./conf/conf_app')
const connectMongoDB = require('./db/mongodb-conn')
const { notFound, errorHandler } = require('./middleware/error')

const app = express()



const mongoose = require('mongoose')
// Database Connection
mongoose.Promise = global.Promise
Promise.resolve(app)
    .then( connectMongoDB() )
    .catch(err => console.error.bind(console, `MongoDB connection error: ${JSON.stringify(err)}`))


// --- midleware
app.use( cors() )
app.use( logger('dev') )
app.use( express.json() )
app.use( express.urlencoded({ extended: true, limit: "50mb" }))


// use: route
app.use('/api/test', require('./module/test/api') )

// serve client
const frontEndPath = path.join(__dirname, '..', CF.frontEnd.path)
console.log(frontEndPath)
app.use( express.static(frontEndPath) )
app.get( ['/*'], function(req, res) {
        res.sendFile('index.html',  { root: frontEndPath } )
    }
)

app.use(notFound)
app.use(errorHandler)

module.exports = app
