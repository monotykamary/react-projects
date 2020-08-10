const mongoose=require("mongoose")
const bcrypt=require("bcryptjs")
const {promisify}=require("util")
const UserSchema=new mongoose.Schema({
    password:   {type: String,required: true},
    email:      {type: String,required: true},
    isAdmin:   {type: Boolean, default: false},


})
const genSalt=promisify(bcrypt.genSalt)
const hash=promisify(bcrypt.hash)

UserSchema.pre("save",function(next){
    const user=this
    if(!user.isModified("password")) return next()
    genSalt(10)
        .then(salt=>{
            return hash(user.password,salt)
        })
        .then(hash=>{
            user.password=hash
            return next()
        })
})


const User=mongoose.model("users",UserSchema,"users");

module.exports={
    User,UserSchema
}