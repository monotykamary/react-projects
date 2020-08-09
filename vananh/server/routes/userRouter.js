const express = require ('express')
const router = express.Router()
const {User} = require('../models/userModel')
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const {promisify} = require ("util")
require('dotenv').config()


const jwtSign=promisify(jwt.sign)

const comparePassword = promisify(bcrypt.compare)
const getToken =async (user)=>{
    const payload={
        email: user.email,
        isAdmin: user.isAdmin,
    }
    const key=process.env.JWT_SECRET
    const token=await jwtSign(
        payload,
        key,
        {expiresIn: "48h"}
    )
    return token
}
router.post('/login', async (req, res)=>{
    const loginUser = await User.findOne({
        email: req.body.email
    })
    if(loginUser){

        const isMatch = await comparePassword(req.body.password,loginUser.password)
        if(!isMatch) return res.status(401).send({msg:"Invailid email or password"})
        const token=await getToken(loginUser)
        res.send({
            email: loginUser.email,
            isAdmin: loginUser.isAdmin,
            token: token
        })
    }else res.status(401).send({msg:"Invaild email or password"})
})

router.get('/', async (req, res)=>{
    const users = await User.find();
    return res.status(200).json(users)
})

router.post('/', (req, res)=>{
    console.log('im here')
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
    })
    user.save()
        .then(user=>res.status(200).json(user))
        .catch(err=>res.status(500).json(err))

})

router.put("/:id", async (req, res) => {
   try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (user) {
        user.email = req.body.email,
        user.password = req.body.password,
        user.isAdmin = req.body.isAdmin
        const updateduser = await user.save();
        return res.status(200).json({ message: 'user Updated', data: updateduser });
        }
    } catch (error) {
    return res.status(500).json({ message: error });
   }
});
router.get("/createadmin", async (req, res)=>{
    try{
        const user = new User({
            email:"vananh@gmail.com",
            password:"newatlantic2020",
            isAdmin: true,
        })
        const newUser = await user.save()
        return res.status(200).json(newUser);
    }catch (err){
        res.status(500).json({msg: err.message})
    }
})

router.get("/:id",async (req,res)=>{
    try{
    const userId=req.params.id
    const user=await user.findById(userId)
    return res.status(200).json(user)
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const deleteduser = await user.findById(req.params.id);
        if (deleteduser) {
            await deleteduser.remove();
            res.json({ message: "user Deleted" });
        } else {
            res.json("Error in Deletion.");
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    }
});




module.exports = router
