const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const blogRoutes = require('./routes/blog')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const categoryRoutes = require('./routes/category')
const tagRoutes = require('./routes/tag')



//app
const app = express()

//database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
    .then(() => console.log('DB CONNECTED'))
    .catch(err => {
        console.log(err);
    });

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if (process.env.NODE_ENV === 'development') {
    app.use(cors({Origin: 'http://localhost:3000'}))

}

//routes middleware
app.use('/api', blogRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', categoryRoutes)
app.use('/api', tagRoutes)


//port
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`server is running on ${port}`)
})
