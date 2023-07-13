const mongoose = require('mongoose')
const urlMongodb = 'mongodb://localhost:27017/PET-APP'
const conectDB = () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(urlMongodb, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!')
    } catch (error) {
        console.log('conect failure!!!');
    }
}

module.exports = conectDB