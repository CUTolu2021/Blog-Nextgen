const express = require('express')
const mongoose = require('mongoose')
const blogRoute = require("./routes/blog.route")
const userRouter = require('./routes/user.route')
const ratingRouter = require('./routes/rating.route')
const commentRouter = require('./routes/comment.route')
require('dotenv').config()

const app = express()

app.use(express.json())
mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.log(err)
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/blogs",blogRoute)
app.use("/users",userRouter)
app.use("/ratings",ratingRouter)
app.use("/comments",commentRouter)

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})

/*Updates made in the comment controller, rating controller, generic controller, user controller
1. Added a new route /comments/blogs/:blogId to get all comments by blog id
2. Added a new route /ratings/blogs/:blogId to get all ratings by blog id
3. Worked with .populate so when i get a blog by id we se the comments and rating related to it but its not working.
4.Added a function to check if user is an admin, author or user and upted the roles in our usermodel to take an enum.

ISSUE
When we create a blog is there a way for the author id to be automatically added?
or that is only a functionality when working with frontend frameworks

*/