const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

app.post('./createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

mongoose.connect('mongodb://127.0.0.1:27017/crud')
app.listen(3001, ()=> {console.log(`Server is running at port 3001`)})
