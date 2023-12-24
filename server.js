const express =require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const routesUrls = require('./routes/Routes')
const cors=require('cors')

app.get('/',(req, res)=>{
res.send("hello")
})
// mongoose.set(`strictQuery`, 'true');
mongoose.set('strictQuery', false)

dotenv.config()

mongoose.connect(process.env.Database_URL,()=>console.log("DataBase connected"))
app.use(cors())
app.use(express.json())
app.use('/app',routesUrls)  
app.listen(2082,()=>console.log("server is up and running"))