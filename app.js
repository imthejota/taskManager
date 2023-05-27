
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tasks = require('./src/routes/routes')
const connectDB = require('./db/connect')
const notFound = require('./src/middleware/not-found')
require('dotenv').config()

// Middlewares
app.use(express.static('./public'))
app.use(express.json())




// app.get('/api/v1/tasks)
// app.post('/api/v1/tasks)
// app.get ('/api/v1/tasks/:id)
// app.put ('/api/v1/tasks/:id)
// app.delete ('/api/v1/tasks/:id)


app.use('/api/v1/tasks', tasks)
app.use(notFound)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}, https://localhost:${port} `))
    } catch (error) {
        console.log(error)
    }
}

start()
