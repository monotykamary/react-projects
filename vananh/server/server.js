const express= require("express")
const data= require("./data")

const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({ tours: data.tours})
  .write()

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
  });

app.get("/api/tours", (req, res) =>{
    const tours = db.get('tours').value();
    return res.status(200).json(tours);
})

app.get("/api/tours/:id", (req, res) =>{
  const tourId = req.params.id;
  const tour = db.get('tours').find({_id: tourId}).value();
  if(tour) res.send(tour);
  else res.status(404).send({msg:"Tour not found"});
})

app.put("/api/tours/:id/edit", async (req, res) =>{
  const tourId = req.params.id;
  const tour = db.get('tours').find({_id: tourId}).value();
  if (tour) {
    db('posts')
    .find({_id: tourId})
    .assign({ title: req.params.title , subtitle: req.params.subtitle , image: req.params.image,
      image2: req.params.image2, image3: req.params.image3, image4: req.params.image4,
       context: req.params.context}) // or .defaults depending on what you want to do
    .value()
    }
});

app.listen(5000, ()=>{console.log("Server started at http://localhost:5000")})
