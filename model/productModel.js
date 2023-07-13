const mongoose = require('mongoose')

const schema = mongoose.Schema

const Product = new schema({
    title: {type: String, required: true},
    description: {type: String},
    url:{type: String},
    status:{type: String, enum: ['TO LEARN', 'LEARNING', 'LEARNED']},
    user: {type: schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Product', Product)