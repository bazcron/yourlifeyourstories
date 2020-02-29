let mongoose = require('mongoose')
var Member = require('../models/members')
let express = require('express')
let router = express.Router()

var mongodbUri = 'mongodb+srv://barry:hobbit00@cluster0-58mmj.mongodb.net/YourLifeYourStories?retryWrites=true&w=majority'

mongoose.connect(mongodbUri)
let db = mongoose.connection

db.on('error', function (err) {
  console.log('Unable to Connect to [ ' + db.name + ' ]', err)
})

db.once('open', function () {
  console.log('Successfully Connected to [ ' + db.name + ' ]')
})

router.findAll = (req, res) => {
  // Return a JSON representation of our list
  res.setHeader('Content-Type', 'application/json')

  Member.find(function (err, members) {
    if (err) { res.send(err) }

    res.send(JSON.stringify(members, null, 5))
  })
}
