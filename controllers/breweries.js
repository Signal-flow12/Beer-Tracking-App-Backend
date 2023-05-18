const express = require("express");
const router = express.Router();

const { Breweries } = require("../models/Index");

const seedData = [
    {
        name: "Kane Brewing",
        adress: "1750 Bloomsbury Ave, Ocean Township, NJ 07712",
        website:"https://www.kanebrewing.com/",
        image: "https://upload.wikimedia.org/wikipedia/en/b/be/Kane_Brewery.png",
        flagship: "Head High"
    },
    {
        name: "Bradley Brew Project",
        adress: "714 Main St, Bradley Beach, NJ 07720",
        website:"https://www.bradleybrew.com/",
        image: "https://pbs.twimg.com/profile_images/865597956421853184/4Iwiqf55_400x400.jpg",
        flagship: "Unicorn Girls"
    },
    {
        name: "Carton Brewing",
        adress: "6 E Washington Ave, Atlantic Highlands, NJ 07716",
        website:"https://cartonbrewing.com/",
        image: "https://cartonbrewing.com/wp-content/uploads/2015/07/carton200x200.jpg",
        flagship: "077XX"
    }
]

// router.get('', async (req, res, next) => {
//     try {
//         let brew;
//         console.log(req.query);
//         if(req.query.search) {
//             brew = await Breweries.find({author: req.query.search})
//             console.log(brew);
//         } else {
//             brew = await Breweries.find({});
//             console.log(brew);
//         }
//         res.json(brew)
//     } catch(err) {
//         // If there's an error, it'll go to the catch block
//         console.log(err);
//         next();
//     }
// })

router.get('/seed', async (req, res, next) => {
    try {
        await Breweries.deleteMany({});
        await Breweries.insertMany(seedData);
        res.redirect('/Breweries');
    } catch(err) {
        console.log(err);
        next();
    }
})





module.exports = router;