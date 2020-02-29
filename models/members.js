let mongoose = require('mongoose')

let membersSchema = new mongoose.Schema({
  memberName: String,
  password: Number,
  videos: {type: Number, default: 0}
},
{ collection: 'members' })

module.exports = mongoose.model('Members', membersSchema)
