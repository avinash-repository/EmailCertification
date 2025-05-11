const express = require('express')
const app = express()
const port = 3000;
const mongoDB = require('./db')
const cors = require('cors');
mongoDB();

app.use(cors());


app.use(express.json())
app.use('/api', require("./Routes/CreateUser"));
app.use('/api' , require("./Routes/loginuser"));
app.use('/api' , require("./Routes/OfferUser"));
app.use('/api' , require("./Routes/DisplayData"));


app.get('/', (req, res)=>{
    res.send("Hello Welcome to hell ")
})
app.listen(port , ()=>{
    console.log(`App  listening at port -> ${port} `)
})  