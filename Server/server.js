require("dotenv").config()
const express = require("express")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConn")
const { default: mongoose } = require("mongoose")
const PORT = process.env.PORT || 7654
const app = express()
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static("public"))
app.use('/api/members' ,require("./routes/member"))
app.use('/api/coronas' ,require("./routes/corona"))
app.use('/api/vaccines' ,require("./routes/vaccine"))

app.get("/", (req,res)=>{
    res.send("This is the home page")
})

mongoose.connection.once('open', ()=> {
    console.log('Connected to mongoDB')
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
})

mongoose.connection.on('error', err => {
   console.log(err) 
} )
