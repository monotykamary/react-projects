const express = require ('express')
const router = express.Router()
const {Tour} = require('../models/tourModel')

router.get('/', async (req, res)=>{
    const tours = await Tour.find();
    return res.status(200).json(tours)
})

router.post('/', (req, res)=>{
    console.log('im here')
    const tour = new Tour({
        title: req.body.title,
        subtitle: req.body.subtitle,
        image: req.body.image,
        image2: req.body.image2,
        image3: req.body.image3,
        image4: req.body.image4,
        context: req.body.context
    })
    tour.save()
        .then(tour=>res.status(200).json(tour))
        .catch(err=>res.status(500).json(err))

})

router.put("/:id", async (req, res) => {
   try {
    const tourId = req.params.id;
    const tour = await Tour.findById(tourId);
    if (tour) {
        tour.title = req.body.title;
        tour.subtitle = req.body.subtitle;
        tour.image = req.body.image;
        tour.image2 = req.body.image2;
        tour.image3 = req.body.image3;
        tour.image4 = req.body.image4;
        tour.context = req.body.context;
        const updatedtour = await tour.save();
        return res.status(200).json({ message: 'tour Updated', data: updatedtour });
        }
    } catch (error) {
    return res.status(500).json({ message: error });
   }
});

router.get("/:id",async (req,res)=>{
    try{
    const tourId=req.params.id
    const tour=await Tour.findById(tourId)
    return res.status(200).json(tour)
    }
    catch (error) {
        return res.status(500).json({ message: error });
    }
})

router.delete("/:id", async (req, res) => {
    try{
        const deletedtour = await Tour.findById(req.params.id);
        if (deletedtour) {
            await deletedtour.remove();
            res.json({ message: "tour Deleted" });
        } else {
            res.json("Error in Deletion.");
        }
    } catch (error) {
        return res.status(500).json({ message: error });
    } 
});


module.exports = router