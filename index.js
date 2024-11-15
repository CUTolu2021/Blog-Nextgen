const express = require('express')
const mongoose = require('mongoose')
const blogRoute = require("./routes/blog.route")
const userRouter = require('./routes/user.route')
const ratingRouter = require('./routes/rating.route')
const commentRouter = require('./routes/comment.route')
require('dotenv').config()

const app = express()

app.use(express.json())
mongoose.connect(process.env.MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/blog",blogRoute)
app.use("/user",userRouter)
app.use("/rating",ratingRouter)
app.use("/comment",commentRouter)


//uche working
app.put('/', (req, res) => {
    res.send('Hello World 2024')
})
//latifat working

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})