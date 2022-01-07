// create a new express server
const express = require("express")
require("dotenv").config()
const app = express()
const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const useSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

const User = mongoose.model("User", useSchema)

const user1 = new User({
    name: "John Doe",
    email: "JohnDoe@gmail.com",
    password: "12345",
})


app.get("/", (req, res) =>{
    User.find({}, (found, er) => {
        res.send(found)
    })
    console.log(err)
    res.send("Some error occured")
} )

const port = process.env.PORT

app.listen(port, () => {
  console.log(`listening on port ${port}`)
 
})
