import express from 'express'
import data from './data'

const app = express();

app.get("/api/professors", (req, res) =>{

    res.send(data.professors);
})

app.get("/api/comments", (req, res) =>{
    console.log(data.comments);
    
    res.send(data.comments);
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
