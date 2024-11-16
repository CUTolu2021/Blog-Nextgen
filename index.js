const mongoose = require('mongoose')
const app = require("./app")
require('dotenv').config()

mongoose.connect(process.env.MONGODB, {useNewUrlParser: true})
.then(() => {
    console.log('Connected to MongoDB')
})
.catch(err => {
    console.log(err)
})

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})