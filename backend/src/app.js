const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const cookieParser = require("cookie-parser")

app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("MongoDB connected")
}).catch((error) => {
    console.error("MongoDB connection error:", error)
})

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/messages", require("./routes/messages.routes.js"))

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})