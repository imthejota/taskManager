
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./src/routes/routes')
const connectDB = require('./db/connect')
const notFound = require('./src/middleware/not-found')
const errorHandler = require('./src/middleware/error-handler')

require('dotenv').config()

// Middlewares
app.use(express.static('./public'))
app.use(express.json())
app.use('/api/v1/tasks', tasks)
app.use(notFound)
app.use(errorHandler)  


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}, https://localhost:${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
