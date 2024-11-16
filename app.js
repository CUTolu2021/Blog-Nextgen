const express = require('express')
const blogRoute = require("./routes/blog.route")
const userRouter = require('./routes/user.route')
const ratingRouter = require('./routes/rating.route')
const commentRouter = require('./routes/comment.route')

const app = express()

app.use(express.json())


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/blog",blogRoute)
app.use("/user",userRouter)
app.use("/rating",ratingRouter)
app.use("/comment",commentRouter)

module.exports = app

