const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const schema = mongoose.Schema

const User = new schema({
    email: {type: String},
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 }
},
    {
        timestamps: true
    })

    User.plugin(mongooseDelete, {
        deletedAt: true,
        overrideMethods: true
    })

    module.exports = mongoose.model('User', User)