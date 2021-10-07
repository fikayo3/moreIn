const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const auth = require('./middleware/auth');
require("dotenv").config()

const app = express();
const port = process.env.port || 5000;

app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex: true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once("open", () => {
    console.log("mongoDb connected succesfully")
})

app.all('/api/*', auth);

const investRouter = require('./routes/invest');
app.use('/api/invest', investRouter);

const profileRouter = require('./routes/profile');
app.use('/api/profile', profileRouter);

const bankRouter = require('./routes/bankdetails');
app.use('/api/bankdetails',bankRouter)

const changeRouter = require('./routes/security');
app.use('/api/security',changeRouter)

const authRouter = require('./routes/signin');
app.use('/signing',authRouter)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})