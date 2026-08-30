const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')

const app = express();
app.use(cors());
app.use(express.json());

app.post('/createUser',(req,res)=>{
    UserModel.create(req.body)
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

mongoose.connect('mongodb+srv://testinguser:86SCMKSE0rGRHOL7@cluster0.pehbkav.mongodb.net/?appName=Cluster0')
app.listen(3001, ()=> {console.log(`Server is running at port 3001`)})
