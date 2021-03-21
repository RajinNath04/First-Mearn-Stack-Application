const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
import { readdirSync } from 'fs';
require('dotenv').config()



const app = express()


mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true

}).then(() => { console.log('DB Connected'); })
    .catch((err) => { console.log('DB Connection error', err); })

app.use(morgan("dev"))
app.use(cors())
readdirSync("./routes").map((r) => {
    app.use("/api", require(`./routes/${r}`))
})



const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server Running on port ${PORT}`);
})