const express = require("express");
const router = express.Router();
const { requireToken, handleValidateOwnership } = require('../middleware/auth');

const { Breweries, Comments, Users } = require("../models/Index");

const seedData = [
    {
        name: "Kane Brewing",
        address: "1750 Bloomsbury Ave, Ocean Township, NJ 07712",
        website:"https://www.kanebrewing.com/",
        image: "https://i0.wp.com/beerbusterspodcast.com/wp-content/uploads/2015/01/Taps-1.jpg?ssl=1",
        flagship: "Head High",
        likes: []
    },
    {
        name: "Bradley Brew Project",
        address: "714 Main St, Bradley Beach, NJ 07720",
        website:"https://www.bradleybrew.com/",
        image: "https://pbs.twimg.com/profile_images/865597956421853184/4Iwiqf55_400x400.jpg",
        flagship: "Unicorn Girls",
        likes: []
    },
    {
        name: "Carton Brewing",
        address: "6 E Washington Ave, Atlantic Highlands, NJ 07716",
        website:"https://cartonbrewing.com/",
        image: "https://cartonbrewing.com/wp-content/uploads/2015/07/carton200x200.jpg",
        flagship: "077XX",
        likes: []
    }
]

//Index route
router.get("/", async (req, res, next) => {
    try{
        const breweries = await Breweries.find({}).populate('likes.user', 'username');
        res.json(breweries)
    }catch(err){
        console.log(err)
    }
});

//Seed route
router.get('/seed', async (req, res, next) => {
    try {
        await Breweries.deleteMany({});
        await Breweries.insertMany(seedData);
        res.redirect('/breweries');
    } catch(err) {
        console.log(err);
        next();
    }
})

//Show
router.get('/:id', async (req, res, next) => {
    try{
        const brewery = await Breweries.findById(req.params.id)
        //console.log(brewery)
        res.json(brewery)
    }catch(err){
        console.log(err)
        next()
    }
})

//post
router.post('/', async (req, res, next) => {
    try{
        res.json(await Breweries.create(req.body))
    }catch (err){
        console.log(err)
    }
})

// Like a brewery
router.post('/:id/likes', requireToken, async (req, res, next) => {
    try {
        const breweryId = req.params.id;
        const userId = req.user._id;
        const brewery = await Breweries.findById(breweryId)
        console.log(brewery)

        const userLiked = brewery.likes.includes(userId)

        if (userLiked) {
            await Breweries.findByIdAndUpdate(postId, {
                $pull: { likes: userId}
            });
            const updatedBrewery = await Breweries.findById(breweryId)
            res.json(updatedBrewery)
        }else {
            await Breweries.findOneAndUpdate(breweryId, {
                $push: { likes: userId }
            })
            const updatedBrewery = await Breweries.findById(breweryId)
            res.json(updatedBrewery)
        }
    } catch (err) {
        console.log(err);
        next();
    }
});




module.exports = router;