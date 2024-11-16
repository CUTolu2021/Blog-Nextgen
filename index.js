const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.log(err)
})
.finally(() => {
    console.log('Connection Established')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("/blogs",blogRoute)
app.use("/users",userRouter)
app.use("/ratings",ratingRouter)
app.use("/comments",commentRouter)


//uche working
app.put('/', (req, res) => {
    res.send('Hello World 2024')
})
//latifat working

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})