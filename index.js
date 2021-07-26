const express = require('express')
const cors = require('cors')

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express();
const apiPort = 3001;


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));