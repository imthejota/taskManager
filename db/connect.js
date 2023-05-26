const mongoose = require('mongoose')

const connectDB = (url) => {
    return mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    })
}


    /* .then(() => console.log("Connected to Mongo db"))
    .catch((err) => console.log(err)); */

module.exports = connectDB