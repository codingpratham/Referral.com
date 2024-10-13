const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://bro123:pratham@pratham.j9fifsz.mongodb.net/')
.then(()=>{
    console.log("Connected to MongoDB");  
})
.catch((err)=>{
    console.error("Error connecting to MongoDB",err);
})

const userSchema=new mongoose.model({
    email:String,
    password:String,
    firstName:String,
    lastName:String
})

const User= mongoose.model('User',userSchema)


module.exports= {User}