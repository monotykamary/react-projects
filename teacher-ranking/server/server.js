const express=require("express")
const data=require("./data")

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.get("/api/professors", (req, res) =>{
    //console.log(data);
    return res.status(200).json(data.professors)
})

app.get("/api/users", (req, res) =>{
    //console.log(data);
    return res.status(200).json(data.users)
})

app.get("/api/users/:id", (req, res) =>{
    const userId = req.params.id;
    const user = data.professors.find(x=>x._id === userId);
    if(user)
        res.send(user)
    else
        res.status(404).send({msg:"User Not Found"})
})

app.get("/api/comments", (req, res) =>{
    //console.log(data);
    
    return res.status(200).json(data.comments)
})

app.get("/api/comments/:phdId", (req, res) =>{
    const phdId = req.params.phdId;
    const cmt = data.comments.find(x=>x._id === phdId);
    return res.status(200).json(cmt)
})

app.get("/api/professors/:id", (req, res) =>{
    const phdId = req.params.id;
    const phd = data.professors.find(x=>x._id === phdId);
    if(phd)
        res.send(phd)
    else
        res.status(404).send({msg:"Product Not Found"})
})

app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")})
