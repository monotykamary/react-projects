const express= require("express")
const data= require("./data")

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.get("/api/tours", (req, res) =>{
    //console.log(data);
    
    return res.status(200).json(data.tours)
})

app.get("/api/tours/:id", (req, res) =>{
  const tourId = req.params.id;
  const tour = data.tours.find(x=>x._id === tourId);
  if(tour)
      res.send(tour)
  else
      res.status(404).send({msg:"Tour not found"})
})

app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")})
