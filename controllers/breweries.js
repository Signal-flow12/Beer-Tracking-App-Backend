const express = require("express");
const router = express.Router();

const { Breweries, Comments } = require("../models/Index");

const seedData = [
    {
        name: "Kane Brewing",
        address: "1750 Bloomsbury Ave, Ocean Township, NJ 07712",
        website:"https://www.kanebrewing.com/",
        image: "https://upload.wikimedia.org/wikipedia/en/b/be/Kane_Brewery.png",
        flagship: "Head High",
        likes: 0
    },
    {
        name: "Bradley Brew Project",
        address: "714 Main St, Bradley Beach, NJ 07720",
        website:"https://www.bradleybrew.com/",
        image: "https://pbs.twimg.com/profile_images/865597956421853184/4Iwiqf55_400x400.jpg",
        flagship: "Unicorn Girls",
        likes: 0
    },
    {
        name: "Carton Brewing",
        address: "6 E Washington Ave, Atlantic Highlands, NJ 07716",
        website:"https://cartonbrewing.com/",
        image: "https://cartonbrewing.com/wp-content/uploads/2015/07/carton200x200.jpg",
        flagship: "077XX",
        likes: 0
    }
]

//Index route
router.get("/", async (req, res, next) => {
    try{
        res.json(await Breweries.find({}))
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
        //comments
        console.log(breweryComments)
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


module.exports = router;