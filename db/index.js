const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost:27017/cinema', {useNewUrlParser: true, useUnifiedTopology: true})
    .catch(e => {
        console.error('Connection error', e.message)
    })

console.log()

const db = mongoose.connection

module.exports = db