const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt")
const { Users } = require("../models/Index")

//Sign up 
router.post("/register", async (req, res, next) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        req.body.password= passwordHash;
        const newUser = await Users.create(req.body);

        res.status(201).json({
            currentUser: newUser,
            isLoggedIn: true,
        })
    }catch (err) {
        console.log(err)
    }
});

//Sign in
router.post("/login", async (req, res, next) => {
    try {
        
    }catch(err) {
        console.log(err)
    }
});


module.exports = router;