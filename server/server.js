const express = require('express')
const cors = require('cors')
const app = express()
const UserModel = require('./User')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/Company')
.then(() => console.log('DB connected'))
.catch(err => console.log(err))
app.use(cors())
app.use(express.json())
//Create API End Points (HTTP Request,Response)
app.get('/',(req,res)=>{
res.send('Welcome to Node JS Server URK22CS2024')
})

app.post('/register',(req,res)=>{
    UserModel.create(req.body)
    .then(res.json('Data Saved Successfully'))
    .catch(err=>res.json(err))
    })
//config PORT and Start Server
const PORT = 9000
app.listen(PORT, ()=>{
console.log(`Server running on port ${PORT}`)
})