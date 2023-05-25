const express = require("express");
const router = express.Router();
const { Favorites } = require("../models/Index");

router.get('/', async (req, res, next) => {
    try {
        let myUser;
        if (req.session.currentUser) myUser = req.session.currentUser.username;
        const item = await Cart.find({})
        res.render('cart', {items: item, myUser})
    } catch(err) {
        console.log(err)
    }
})
