const express=require('express')
const app=express()
const router=express.Router()
const cors=require('cors')
const rootRouter=require('./Routes/index')

app.use(express.json())
app.use(cors())
app.router('/api/v1',rootRouter)

app.listen(3000)